import React, { useEffect, useState } from 'react';
import { Text, View, Dimensions } from 'react-native';

function Cart() {
  let ScreenHeight = Dimensions.get('window').height;

  return (
    <View style={{ height: ScreenHeight }}>
      <Text>Cart</Text>
    </View>
  );
}

export default Cart;
