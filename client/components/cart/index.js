import React, { useContext, useEffect, useState } from 'react';
import { Text, View, Dimensions } from 'react-native';
import { Title } from 'react-native-paper';
import Apiservices from '../../servese/ApiServices';
import { Store } from '../Storage';
import ProductCart from './ProductCart';
import socket from '../../servese/Socket';
function Cart() {
  let ScreenHeight = Dimensions.get('window').height;

  const {
    cartProduct,
    openCart,
    setOpenCart,
    total,
    setTotal,
    setCartProduct,
    SetCountCart,
  } = useContext(Store);

  const handelDeletedAll = () => {
    Apiservices.delete('/destroyallproductcart');
    setTotal(0);
    SetCountCart(0);
    setCartProduct([]);
  };

  const handelBuy = () => {
    Apiservices.put('/buyproducts', { total: total }).then((res) => {
      console.log(res.data);
    });
    setTotal(0);
    setCartProduct([]);
    SetCountCart(0);
    socket.emit('notification', {
      data: cartProduct.map((e) => (e = e.Product.UserId)),
    });
  };

  return (
    <View style={{ minHeight: ScreenHeight, marginTop: 100 }}>
      <Title style={{ fontSize: 30, textAlign: 'center' }}>Cart</Title>
      <View
        style={{
          marginVertical: 20,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <Text>{total}$</Text>
        <Text onPress={handelBuy}>Buy</Text>
        <Text onPress={handelDeletedAll}>Delete All Products</Text>
      </View>
      <View>
        {cartProduct &&
          cartProduct.map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
      </View>
    </View>
  );
}

export default Cart;
