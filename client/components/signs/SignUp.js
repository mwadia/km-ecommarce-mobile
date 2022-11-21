import React, { useState } from 'react'
import { View ,Text} from 'react-native'
import { TextInput } from 'react-native-paper';
import UseUpdateImg from '../../hook/UseUpdateImg';
import Apiservices from '../../servese/ApiServices';
import JwtServise from '../../servese/JwtServise';


function SignUp() {
  const [signUp,setSignUp]=useState({
    name: '',
    email: '',
    password: '',
    confirmPassword:'',
    userImg: '',
  })
  const [imgFile, setImgFile] = useState('');
  const handelSignUp=()=>{
    console.log(111);
    const newData = new FormData();
    newData.append('file', imgFile);
    newData.append('data', JSON.stringify(signUp));
    Apiservices({
      method: 'post',
      url: '/signup',
      data: newData,
      headers: { 'Content-Type': 'multipart/form-data' },
    }).then((isExist) => {
      console.log(isExist.data);
      if(isExist.data.data){
        console.log(222);
        JwtServise.setToken(isExist.data.data.token)
console.log('eee');
      }

      console.log(333333)
      // if (isExist.data.data) {
      //   setUser(isExist.data.data);
      //   toast.success(isExist.data.msg);
      //   setOpen(false);
      // } else {
      //   toast.error(isExist.data.msg);
      // }
    }).catch((err)=>console.log(err));
  }

  return (
    <View style={{marginTop:100}}>
       <TextInput
      label="name"
      value={signUp.name}
      onChangeText={text => setSignUp({...signUp,name:text})}
    />
         <TextInput
      label="Email"
      value={signUp.email}
      onChangeText={text => setSignUp({...signUp,email:text})}
    />
         <TextInput
      label="password"
      value={signUp.password}
      onChangeText={text => setSignUp({...signUp,password:text})}
    />
      <UseUpdateImg setImgFile={setImgFile}/> 
      <Text onPress={handelSignUp}> SignUP</Text>
      <Text onPress={()=>{
        JwtServise.getToken()
      }}> cccccccccccccccccccccccccccc</Text>
    
    </View>
  )
}

export default SignUp
