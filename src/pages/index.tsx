import {StyleSheet, Text, View} from 'react-native';

export default function PageComponent() {
  <>
    <View style={styles.container}>
      <Text style={{fontSize: 14}}>haloooo test</Text>
    </View>
  </>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
