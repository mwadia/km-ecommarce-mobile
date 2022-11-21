import React from 'react';
import { Text, View, Dimensions, Image } from 'react-native';
import ButtonSign from './ButtonSign';
import InputSign from './inputSign';

function SignUp() {
  let ScreenHeight = Dimensions.get('window').height;

  return (
    <View
      style={{
        height: ScreenHeight,
      }}
    >
      <View
        style={{
          marginVertical: 250,
        }}
      >
        <View style={{ alignSelf: 'center' }}>
          <Image
            style={{ width: 100, height: 100 }}
            source={require('../../assets/logo.jpeg')}
          />
          <Text
            style={{ textAlign: 'center', color: '#b97d3b', marginBottom: 20 }}
          >
            Create Account
          </Text>
        </View>
        <View>
          <InputSign type={'Name'} />
          <InputSign type={'Email'} />
          <InputSign type={'Password'} />
        </View>
        <ButtonSign type='Sign up' />
        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
          <Text>Already have an account? </Text>
          <Text style={{ color: '#b97d3b' }}>Login</Text>
        </View>
      </View>
    </View>
  );
}

export default SignUp;
