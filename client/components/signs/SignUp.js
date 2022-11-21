import React from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useState } from 'react';
import UseUpdateImage from './UseUpdateImage';
function SignUp() {
  const [signUp, setSignUp] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [imgFile, setImgFile] = useState(null);
  return (
    <View style={{ flexDirection: 'column', padding: 20 }}>
      <TextInput
        label='Name'
        value={signUp.name}
        onChangeText={(text) => setSignUp({ ...signUp, name: text })}
      />
      <TextInput
        label='Email'
        value={signUp.email}
        onChangeText={(text) => setSignUp({ ...signUp, email: text })}
      />
      <TextInput
        label='password'
        value={signUp.password}
        onChangeText={(text) => setSignUp({ ...signUp, password: text })}
      />
      <TextInput
        label='confirmPassword'
        value={signUp.confirmPassword}
        onChangeText={(text) => setSignUp({ ...signUp, confirmPassword: text })}
      />
      <UseUpdateImage imgFile={imgFile} setImgFile={setImgFile} />
      <Text
        onPress={() => {
          console.log(imgFile);
        }}
      >
        SignUp
      </Text>
    </View>
  );
}

export default SignUp;
