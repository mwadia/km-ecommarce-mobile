import React from 'react';
import { View } from 'react-native';
import Product from '../home/Product';
import AddNewProduct from './AddNewProduct';

function UserProducts({ userProducts, setUserProducts }) {
  return (
    <View style={{ marginTop: 130 }}>
      {userProducts.map((e) => (
        <Product
          setUserProducts={setUserProducts}
          userProducts={userProducts}
          product={e}
          key={e.id}
        />
      ))}
    </View>
  );
}

export default UserProducts;
