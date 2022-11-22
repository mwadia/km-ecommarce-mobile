import { Text, View, Dimensions, Image } from 'react-native';
import React, { useContext, useState } from 'react';
import { TextInput, Button } from 'react-native-paper';
import UseUpdateImg from '../../hook/UseUpdateImg';
import Apiservices from '../../servese/ApiServices';
import JwtServise from '../../servese/JwtServise';
import { Store } from '../Storage';
function SignUp({ setNavgate }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIserror] = useState('');
  const [signUp, setSignUp] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    userImg: '',
  });
  const { user, setUser } = useContext(Store);
  const [imgFile, setImgFile] = useState('');
  const handelSignUp = () => {
    const newData = new FormData();
    newData.append('file', imgFile);
    newData.append('data', JSON.stringify(signUp));
    setIsLoading(true);
    if (imgFile && signUp.name && signUp.email && signUp.password) {
      setIserror('');
      Apiservices({
        method: 'post',
        url: '/signup',
        data: newData,
        headers: { 'Content-Type': 'multipart/form-data' },
      })
        .then((isExist) => {
          setIsLoading(false);

          if (isExist.data.data) {
            JwtServise.setToken(isExist.data.data.token);
            setUser(isExist.data.data);
            setNavgate(1);
            setSignUp({
              name: '',
              email: '',
              password: '',
              confirmPassword: '',
              userImg: '',
            });
            setImgFile('');
          } else {
            setIserror(isExist.data.msg);
          }
        })
        .catch((err) => setIsLoading(false));
    } else {
      setIsLoading(false);
      setIserror('please fill all fields');
    }
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
          <Text style={{ textAlign: 'center', color: 'red' }}>{isError}</Text>
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
            secureTextEntry={true}
            value={signUp.password}
            onChangeText={(text) => setSignUp({ ...signUp, password: text })}
            style={{ marginBottom: 10, backgroundColor: '#fffcfc' }}
          />
        </View>

        <UseUpdateImg setImgFile={setImgFile} />
        <Button
          onPress={handelSignUp}
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
        >
          Sign up
        </Button>
        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
          <Text>Already have an account? </Text>
          <Text onPress={() => setNavgate(2)} style={{ color: '#b97d3b' }}>
            Login
          </Text>
        </View>
      </View>
    </View>
  );
}

export default SignUp;
