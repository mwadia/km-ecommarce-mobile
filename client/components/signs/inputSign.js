import * as React from 'react';
import { TextInput } from 'react-native-paper';

const InputSign = ({ type }) => {
  const [text, setText] = React.useState('');

  return (
    <TextInput
      outlineColor='#00000024'
      activeOutlineColor='#b97d3b'
      mode='outlined'
      label={type}
      value={text}
      onChangeText={(text) => setText(text)}
      style={{ marginBottom: 5 }}
    />
  );
};

export default InputSign;
