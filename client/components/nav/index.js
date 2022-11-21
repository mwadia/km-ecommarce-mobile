import React from 'react';
import { View, Text } from 'react-native';
import { IconButton } from 'react-native-paper';
import SignsForm from '../signs';
function Nav({ setNavgate }) {
  const user = false;
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
        icon='account-circle'
        textColor='#3d4526'
        onPress={() => setNavgate(2)}
      ></IconButton>
      {!user && <SignsForm />}
      {user && (
        <IconButton
          icon='cart'
          textColor='#3d4526'
          onPress={() => setNavgate(3)}
        ></IconButton>
      )}
    </View>
  );
}

export default Nav;
