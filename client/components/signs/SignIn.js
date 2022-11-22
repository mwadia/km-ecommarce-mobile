import React, { useContext, useState } from 'react';
import { Text, View, Dimensions, Image } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import Apiservices from '../../servese/ApiServices';
import JwtServise from '../../servese/JwtServise';
import { Store } from '../Storage';

function SignIn({ setNavgate }) {
  const { setUser, cartProduct } = useContext(Store);
  const [isLoading, setIsLoading] = useState(false);
  const [isError,setIsError]=useState('')
  let ScreenHeight = Dimensions.get('window').height;
  const [signin, setSignIn] = useState({
    email: '',
    password: '',
  });
  const handelSignIn =async () => {
    try{
      if(signin.email && signin.password){
    setIsLoading(true);
    setIsError('')
    Apiservices.post('/signin', signin).then((res) => {
      setIsLoading(false);
      if (res.data.data) {
        JwtServise.setToken(res.data.data.token);
        setNavgate(1);
        setUser(res.data.data);
        setSignIn({
          email: '',
          password: '',
        });
      }else{
        setIsError(res.data.msg)
      }
    }); }else{
      setIsError('plz')
    }
  }catch (err) {
      console.log(err);
    }
  };
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
          <Text>{isError}</Text>
          <TextInput
            outlineColor='#00000024'
            activeOutlineColor='#b97d3b'
            mode='outlined'
            label='Email'
            value={signin.email}
            onChangeText={(text) => setSignIn({ ...signin, email: text })}
            style={{ marginBottom: 5 }}
          />
          <TextInput
            outlineColor='#00000024'
            activeOutlineColor='#b97d3b'
            mode='outlined'
            label='Password'
            secureTextEntry={true}
            value={signin.password}
            onChangeText={(text) => setSignIn({ ...signin, password: text })}
            style={{ marginBottom: 5 }}
          />
          <Button
            buttonColor='#f0e9dd'
            textColor='#b97d3b'
            style={{
              borderRadius: 5,
              height: 45,
              marginTop: 20,
              marginBottom: 7,
            }}
            loading={isLoading}
            mode='contained'
            onPress={handelSignIn}
          >
            Sign In
          </Button>
        </View>
        {/* <ButtonSign type='Login' /> */}
        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
          <Text>Don't have an account? </Text>
          <Text onPress={() => setNavgate(4)} style={{ color: '#b97d3b' }}>
            Sign up
          </Text>
        </View>
      </View>
    </View>
  );
}

export default SignIn;
