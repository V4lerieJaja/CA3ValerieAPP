import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps';

export default function Mapscreen() {
  // Define the map region
  const region: Region = {
    latitude: 6.5244,       // Lagos, Nigeria
    longitude: 3.3792,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Map View</Text>
      <MapView style={styles.map} initialRegion={region}>
        <Marker
          coordinate={{ latitude: 6.5244, longitude: 3.3792 }}
          title="You are here"
          description="Welcome to your map screen!"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 10,
  },
  map: {
    flex: 1,
  },
});