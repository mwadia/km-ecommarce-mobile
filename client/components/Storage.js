import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { View } from 'react-native';
import Apiservices from '../servese/ApiServices';
export const Store = createContext(0);

function Storage(props) {
  const [user, setUser] = useState(null);
  const [cartProduct, setCartProduct] = useState([]);
  const [countCart, SetCountCart] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    Apiservices.get('/user').then((res) => {
      if (res.data.data) {
        setUser(res.data.data);
      }
    });
  }, []);
  useEffect(() => {
    if (user) {
      Apiservices.get('/getcartproduct').then((res) => {
        if (res.data.data) {
          SetCountCart(res.data.data.length);
        }
      });
    }
  }, [user]);
  return (
    <View>
      <Store.Provider
        value={{
          setUser,
          user,
          countCart,
          SetCountCart,
          cartProduct,
          setCartProduct,
          total,
          setTotal,
        }}
      >
        {props.children}
      </Store.Provider>
    </View>
  );
}

export default Storage;
