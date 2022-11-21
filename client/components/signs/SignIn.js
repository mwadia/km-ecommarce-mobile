import React from 'react';
import { Text, View, Dimensions, Image } from 'react-native';
import ButtonSign from './ButtonSign';
import InputSign from './inputSign';

function SignIn() {
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
            Welcome back
          </Text>
        </View>
        <View>
          <InputSign type={'email'} />
          <InputSign type={'password'} />
        </View>
        <ButtonSign type='Login' />
        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
          <Text>Don't have an account? </Text>
          <Text style={{ color: '#b97d3b' }}>Sign up</Text>
        </View>
      </View>
    </View>
  );
}

export default SignIn;
