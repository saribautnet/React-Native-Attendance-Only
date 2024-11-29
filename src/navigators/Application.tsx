import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Suspense, useState} from 'react';
import {View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {AuthorizedScreens, UnauthorizedScreens} from './config';

const Stack = createStackNavigator();

export default function ApplicationNavigator() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
      <GestureHandlerRootView style={{flex: 1}}>
        <Suspense fallback={<View />}>
          <NavigationContainer>
            <Stack.Navigator>
              {!isLoggedIn ? (
                <Stack.Group>
                  {UnauthorizedScreens.map((i, index): JSX.Element => {
                    return (
                      <Stack.Screen
                        key={index}
                        name={i.name}
                        component={i.component}
                        options={i.options}
                      />
                    );
                  })}
                </Stack.Group>
              ) : (
                <Stack.Group>
                  {AuthorizedScreens.map((i, index): JSX.Element => {
                    return (
                      <Stack.Screen
                        key={index}
                        name={i.name}
                        component={i.component}
                        options={i.options}
                      />
                    );
                  })}
                </Stack.Group>
              )}
            </Stack.Navigator>
          </NavigationContainer>
        </Suspense>
      </GestureHandlerRootView>
    </>
  );
}
