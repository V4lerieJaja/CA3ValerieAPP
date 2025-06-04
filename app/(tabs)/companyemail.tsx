import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

export default function CompanyEmailScreen() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    fetch('https://fake-json-api.mock.beeceptor.com/users')
      .then((res) => res.json())
      .then(() => {
        setFetched(true);       // Mark as fetched
        setLoading(false);      // Stop loading
      })
      .catch((err) => {
        console.error('API Error:', err);
        setError(true);         // Show error if fetch fails
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Data Fetch Status</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#007AFF" />
      ) : error ? (
        <Text style={styles.errorText}>❌ Failed to fetch data</Text>
      ) : (
        <Text style={styles.successText}>✅ Data has been successfully fetched!</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: 'pink',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 30,
  },
  successText: {
    fontSize: 18,
    color: 'green',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
});
