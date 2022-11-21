import React from 'react';
import { View } from 'react-native';
import Product from './Product';

function Products({ products }) {
  return (
    <View>
      {products.map((e) => (
        <Product product={e} key={e.id} />
      ))}
    </View>
  );
}

export default Products;
