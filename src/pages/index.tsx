import {useNavigation} from '@react-navigation/native';
import {Button, StyleSheet, Text, View} from 'react-native';

export default function PageComponent() {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <Text style={{fontSize: 14, color: 'black'}}>haloooo test</Text>
        <Button title="test" onPress={() => navigation.navigate('Home')} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
