import * as React from 'react';
import { Button } from 'react-native-paper';

const ButtonSign = ({ type }) => (
  <Button
    buttonColor='#f0e9dd'
    textColor='#b97d3b'
    style={{ borderRadius: 5, height: 50, marginTop: 20, marginBottom: 7 }}
    mode='contained'
    onPress={() => console.log('Pressed')}
  >
    {type}
  </Button>
);

export default ButtonSign;
