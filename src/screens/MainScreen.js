import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Grow Pulse Control</Text>
      <Button
        title="Dashboard"
        onPress={() => navigation.navigate('Dashboard')}
      />
      <Button
        title="Control Panel"
        onPress={() => navigation.navigate('ControlPanel')}
      />
      <Button
        title="Plants Wiki"
        onPress={() => navigation.navigate('PlantsWiki')}
      />
      <Button
        title="Alerts"
        onPress={() => navigation.navigate('Alerts')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
});

export default MainScreen;
