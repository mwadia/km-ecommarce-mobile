import { Text, View, Dimensions, Image } from 'react-native';
import React, { useState } from 'react';
import { TextInput, Button } from 'react-native-paper';
import UseUpdateImg from '../../hook/UseUpdateImg';
import Apiservices from '../../servese/ApiServices';
import JwtServise from '../../servese/JwtServise';
function SignUp() {
  const [signUp, setSignUp] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    userImg: '',
  });
  const [imgFile, setImgFile] = useState('');
  const handelSignUp = () => {
    console.log(111);
    const newData = new FormData();
    newData.append('file', imgFile);
    newData.append('data', JSON.stringify(signUp));
    Apiservices({
      method: 'post',
      url: '/signup',
      data: newData,
      headers: { 'Content-Type': 'multipart/form-data' },
    })
      .then((isExist) => {
        console.log(isExist.data);
        if (isExist.data.data) {
          console.log(222);
          JwtServise.setToken(isExist.data.data.token);
          console.log('eee');
        }

        console.log(333333);
        // if (isExist.data.data) {
        //   setUser(isExist.data.data);
        //   toast.success(isExist.data.msg);
        //   setOpen(false);
        // } else {
        //   toast.error(isExist.data.msg);
        // }
      })
      .catch((err) => console.log(err));
  };
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
          <TextInput
            outlineColor='#00000024'
            activeOutlineColor='#b97d3b'
            mode='outlined'
            label='name'
            value={signUp.name}
            onChangeText={(text) => setSignUp({ ...signUp, name: text })}
            style={{ marginBottom: 5 }}
          />
          <TextInput
            outlineColor='#00000024'
            activeOutlineColor='#b97d3b'
            mode='outlined'
            label='Email'
            value={signUp.email}
            onChangeText={(text) => setSignUp({ ...signUp, email: text })}
            style={{ marginBottom: 5 }}
          />
          <TextInput
            outlineColor='#00000024'
            activeOutlineColor='#b97d3b'
            mode='outlined'
            label='password'
            value={signUp.password}
            onChangeText={(text) => setSignUp({ ...signUp, password: text })}
            style={{ marginBottom: 5 }}
          />
        </View>

        <UseUpdateImg setImgFile={setImgFile} />
        <Button
          onPress={handelSignUp}
          buttonColor='#f0e9dd'
          textColor='#b97d3b'
          style={{
            borderRadius: 5,
            height: 50,
            marginTop: 20,
            marginBottom: 7,
          }}
          mode='contained'
        >
          Sign up
        </Button>
        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
          <Text>Already have an account? </Text>
          <Text style={{ color: '#b97d3b' }}>Login</Text>
        </View>
      </View>
    </View>
  );
}

export default SignUp;
