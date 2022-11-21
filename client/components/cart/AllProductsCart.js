import React from 'react';
import { View } from 'react-native';
import ProductCart from './ProductCart';

function AllProductsCart({ products }) {
  return (
    <View>
      {products.map((e) => (
        <ProductCart product={e} key={e.id} />
      ))}
    </View>
  );
}

export default AllProductsCart;
