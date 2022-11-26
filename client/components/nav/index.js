import React, { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { IconButton } from 'react-native-paper';
import { Store } from '../Storage';
import { Badge } from 'react-native-paper';
import Apiservices from '../../servese/ApiServices';
import JwtServise from '../../servese/JwtServise';

function Nav({ setNavgate, navgate }) {
  const { countCart, setTotal, setCartProduct, SetCountCart, user, setUser } =
    useContext(Store);
  const handleClickOpen = () => {
    setNavgate(3);
  };
  useEffect(() => {
    if (user) {
      Apiservices.get('/getcartproduct').then((res) => {
        setCartProduct(res.data.data);
        SetCountCart(res.data.data.length);
        setTotal(
          res.data.data.reduce((a, b) => a + b.Product.price * b.count, 0)
        );
      });
    }
  }, [navgate, user]);

  return (
    <View
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#ffff',
        borderTopColor:'#c4c6c9',
        borderTopWidth:1
      }}
    >
      <IconButton
        iconColor='black'
        icon={navgate===0?'diamond':'diamond-outline'}
        onPress={() => setNavgate(0)}
      ></IconButton>
      <IconButton
        icon={navgate===1?'home':'home-outline'}
        iconColor='black'
        onPress={() => setNavgate(1)}
      ></IconButton>
      {user && (
        <IconButton
          icon={navgate===5?'account-circle':'account-circle-outline'}
          iconColor='black'
          onPress={() => setNavgate(5)}
        ></IconButton>
      )}
      {user && (
        <View style={{ position: 'relative' }}>
          <IconButton
            icon={navgate===3?'cart':'cart-outline'}
            iconColor='black'
            onPress={handleClickOpen}
          ></IconButton>
          <Badge style={{ position: 'absolute', right: 5, top: 5 }}>
            {countCart}
          </Badge>
        </View>
      )}
      {!user && (
        <IconButton
          icon={navgate===5?'login-variant':'login-variant'}
          iconColor='black'
          onPress={() => setNavgate(2)}
        ></IconButton>
      )}
      {user && (
        <IconButton
          icon={navgate===5?'logout':'logout'}
          iconColor='black'
          onPress={() => {
            JwtServise.destroyToken();
            setUser(null);
            setNavgate(2);
          }}
        ></IconButton>
      )}
    </View>
  );
}

export default Nav;
