import React from 'react'
import { View,Text } from 'react-native'
import { Avatar, Title } from 'react-native-paper';
import AddNewProduct from './AddNewProduct';

function UserInfo({user, userProducts, setUserProducts}) {
  return (
    <View style={{marginTop:100,flexDirection:'column',alignItems:'center'}}>
  <Avatar.Image size={200} source={{uri:user.userImg} }/>
  <Title style={{fontSize:25}}>
    {user.name}
  </Title>
  <View style={{flexDirection:'row',alignItems:'center'}}>
    <Text>
      Poket Money :
    </Text>
    <Title> {user.mony} $</Title>
  </View>
  <AddNewProduct  userProducts={userProducts}
            setUserProducts={setUserProducts}/>
    </View>
  )
}

export default UserInfo
