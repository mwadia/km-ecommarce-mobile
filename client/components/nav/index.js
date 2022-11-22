import React, { useContext, useEffect } from 'react';
import { View, Text } from 'react-native';
import { IconButton } from 'react-native-paper';
import { Store } from '../Storage';
import { Badge } from 'react-native-paper';
import Apiservices from '../../servese/ApiServices';

function Nav({ setNavgate, navgate }) {
  const { countCart, setTotal, setCartProduct, SetCountCart,user } =
    useContext(Store);

  const handleClickOpen = () => {
    setNavgate(3);
  };
  useEffect(() => {
    Apiservices.get('/getcartproduct').then((res) => {
      setCartProduct(res.data.data);
      SetCountCart(res.data.data.length);
      setTotal(
        res.data.data.reduce((a, b) => a + b.Product.price * b.count, 0)
      );
    });
  }, [navgate]);

  return (
    <View
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'grey',
      }}
    >
      <IconButton
        iconColor='red'
        containerColor='gray'
        icon='arrow-left-thick'
        onPress={() => setNavgate(0)}
      ></IconButton>
      <IconButton
        icon='home'
        textColor='#3d4526'
        onPress={() => setNavgate(1)}
      ></IconButton>
      <IconButton
        icon='login-variant'
        textColor='#3d4526'
        onPress={() => setNavgate(2)}
      ></IconButton>
      <IconButton
        icon='account-circle'
        textColor='#3d4526'
        onPress={() => setNavgate(5)}
      ></IconButton>
      {
        user &&
        <View style={{ position: 'relative' }}>
        <IconButton
          icon='cart'
          textColor='#3d4526'
          onPress={handleClickOpen}
        ></IconButton>
        <Badge style={{ position: 'absolute', right: 5, top: 5 }}>
          {countCart}
        </Badge>
      </View>
      }
    
    </View>
  );
}

export default Nav;
