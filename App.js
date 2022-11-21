import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import mobileAds from 'react-native-google-mobile-ads';

export default function App() {

  const [adInit, setAdInit] = useState(false);

  mobileAds()
  .initialize()
  .then(adapterStatuses => {
    // Initialization complete!
    // Check if any ad networks failed to initialize:
    adapterStatuses.forEach(adapterStatus => {
      if (adapterStatus.state === 'error') {
        console.error(
          'Adapter failed to initialize: ' + adapterStatus.description
        );
      }

      setAdInit(true);

    });
    


  });

  if(!adInit) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    )
  }else{
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
