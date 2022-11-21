import React, { useEffect, useState } from 'react';
import { Text, View, Dimensions } from 'react-native';

import Apiservices from '../../servese/ApiServices';
import AllProductsCart from './AllProductsCart';
import ProductCart from './ProductCart';

function Cart() {
  let ScreenHeight = Dimensions.get('window').height;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await Apiservices.get(`/allproduct`);
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <View style={{ height: ScreenHeight }}>
      <Text>Cart</Text>
      <AllProductsCart products={products} />
    </View>
  );
}

export default Cart;
