import React from 'react';
import { View } from 'react-native';
import Product from './Product';

function Products({ products,setProducts }) {
  return (
    <View>
      {products.map((e) => (
        <Product  setUserProducts={setProducts} userProducts={products} product={e} key={e.id} />
      ))}
    </View>
  );
}

export default Products;
