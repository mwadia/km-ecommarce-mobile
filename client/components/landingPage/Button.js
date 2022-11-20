import React from 'react';
import { Text } from 'react-native';
import { Button } from 'react-native-paper';

function StartButton({ setNavgate }) {
  return (
    <Button
      onPress={() => setNavgate(1)}
      mode='contained'
      style={{ backgroundColor: '#f0e9dd' }}
    >
      <Text style={{ color: 'rgb(185, 125, 59)' }}>GET START</Text>
    </Button>
  );
}

export default StartButton;
