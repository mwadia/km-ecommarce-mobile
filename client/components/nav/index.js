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
const [isActive,setIsActive]=useState(0)
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
        backgroundColor: '#6b837d',
      }}
    >
      <IconButton
        iconColor={navgate===0?'#efda7e':'#ffff'}
        icon='diamond'
        onPress={() => setNavgate(0)}
      ></IconButton>
      <IconButton
        icon='home'
        iconColor={navgate===1?'#efda7e':'#ffff'}
        onPress={() => setNavgate(1)}
      ></IconButton>
      {user && (
        <IconButton
          icon='account-circle'
          iconColor={navgate===5?'#efda7e':'#ffff'}
          onPress={() => setNavgate(5)}
        ></IconButton>
      )}
      {user && (
        <View style={{ position: 'relative' }}>
          <IconButton
            icon='cart'
            iconColor={navgate===3?'#efda7e':'#ffff'}
            onPress={handleClickOpen}
          ></IconButton>
          <Badge style={{ position: 'absolute', right: 5, top: 5 }}>
            {countCart}
          </Badge>
        </View>
      )}
      {!user && (
        <IconButton
          icon='login-variant'
          iconColor={navgate===2?'#efda7e':'#ffff'}
          onPress={() => setNavgate(2)}
        ></IconButton>
      )}
      {user && (
        <IconButton
          icon='logout'
          iconColor={navgate===2?'#efda7e':'#ffff'}
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
