import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { View } from 'react-native';
import Apiservices from '../servese/ApiServices';
export const Store = createContext(0);

function Storage(props) {
  const [user, setUser] = useState(null);
  const [cartProduct, setCartProduct] = useState([]);
  const [countCart, SetCountCart] = useState(0);

  useEffect(() => {
    Apiservices.get('/user').then((res) => {
      console.log(res.data);

      if (res.data.data) {
        setUser(res.data.data);
      }
    });
  }, []);
  useEffect(() => {
    if (user) {
      Apiservices.get('/getcartproduct').then((res) => {
        if (res.data.data) {
          console.log(11);
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
        }}
      >
        {props.children}
      </Store.Provider>
    </View>
  );
}

export default Storage;
