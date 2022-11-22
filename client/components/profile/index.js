import React, { useContext, useState, useEffect } from 'react';
import { View, Dimensions, Text } from 'react-native';
import Apiservices from '../../servese/ApiServices';
import { Store } from '../Storage';
import UserInfo from './UserInfo';
import DropDownPicker from 'react-native-dropdown-picker';
import UserProducts from './UserProducts';
import AddNewProduct from './AddNewProduct';

function index({ setNavgate, navgate }) {
  const { user } = useContext(Store);
  let ScreenHeight = Dimensions.get('window').height;

  const [userProducts, setUserProducts] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    Apiservices.get(`/getuser/${user.id}`).then((res) =>
      setUserInfo(res.data.data)
    );
  }, []);
  useEffect(() => {
    Apiservices.get(`/allproducts/${user.id}`).then((res) => {
      setUserProducts(res.data);
    });
  }, [navgate]);
  return (
    <View style={{ minHeight: ScreenHeight }}>
      <UserInfo
        style={{ position: 'relative', zIndex: 15 }}
        userProducts={userProducts}
        setUserProducts={setUserProducts}
        user={userInfo}
      />
      <AddNewProduct
        userProducts={userProducts}
        setUserProducts={setUserProducts}
      />
      <UserProducts
        setUserProducts={setUserProducts}
        userProducts={userProducts}
      />
    </View>
  );
}

export default index;
