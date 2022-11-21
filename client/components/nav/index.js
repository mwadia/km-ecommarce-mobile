import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { IconButton } from 'react-native-paper';
import { Store } from '../Storage';
import { Badge } from 'react-native-paper';

function Nav({ setNavgate }) {
  const user = false;
  const { countCart } = useContext(Store);
  console.log(countCart);
  return (
    <View
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor: 'red',
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
      {/* <IconButton
        icon='camera'
        textColor='#3d4526'
        onPress={() => setNavgate(3)}
      ></IconButton> */}
      <View style={{ position: 'relative' }}>
        <IconButton
          icon='cart'
          textColor='#3d4526'
          onPress={() => setNavgate(3)}
        ></IconButton>
        <Badge style={{ position: 'absolute', right: 5, top: 5 }}>
          {countCart}
        </Badge>
      </View>
    </View>
  );
}

export default Nav;
