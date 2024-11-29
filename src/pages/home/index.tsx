import {StyleSheet, Text, View} from 'react-native';

export default function Home() {
  return (
    <>
      <View style={styles.container}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>TEST HOME</Text>
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
