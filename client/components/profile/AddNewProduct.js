import * as React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Modal, Portal, TextInput, Button, Provider } from 'react-native-paper';
import UseUpdateImg from '../../hook/UseUpdateImg';
import DropDown from './DropDown';
import Apiservices from '../../servese/ApiServices';
import UserProducts from './UserProducts';
let ScreenHeight = Dimensions.get('window').height;

const AddNewProduct = ({ userProducts, setUserProducts }) => {
  const [visible, setVisible] = React.useState(false);
  const [imgFile, setImgFile] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setError] = React.useState('');
  const [newProduct, setNewProduct] = React.useState({
    id: 0,
    name: '',
    price: '',
    count: '',
    category: '',
  });
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: 'white', padding: 20 };
  const handelAddProduct = () => {
    if (
      newProduct.name &&
      newProduct.price &&
      newProduct.count &&
      newProduct.category
    ) {
      setError('');

      const newData = new FormData();
      newData.append('file', imgFile);
      newData.append('data', JSON.stringify(newProduct));
      setIsLoading(true);
      Apiservices({
        method: 'post',
        url: '/addnewproduct',
        data: newData,
        headers: { 'Content-Type': 'multipart/form-data' },
      })
        .then((isExist) => {
          setIsLoading(false);

          if (isExist.data.data) {
            setUserProducts([isExist.data.data, ...userProducts]);
            setVisible(false);

            setNewProduct({
              id: 0,
              name: '',
              price: '',
              count: '',
              category: '',
            });
            setImgFile('');
          } else {
            setError(res.data.msg);
          }
        })
        .catch(() => {
          setIsLoading(false);
          // code to run if there are any problems
        });
    } else {
      setError('please fill all fields');
    }
  };
  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
          style={{ height: ScreenHeight }}
        >
          <View>
            <Text style={{ textAlign: 'center', color: 'red' }}>{isError}</Text>
            <TextInput
              outlineColor='#00000024'
              activeOutlineColor='#b97d3b'
              mode='outlined'
              label="Product's Name"
              value={newProduct.name}
              onChangeText={(text) =>
                setNewProduct({ ...newProduct, name: text })
              }
              style={{ marginBottom: 5 }}
            />
            <TextInput
              outlineColor='#00000024'
              activeOutlineColor='#b97d3b'
              mode='outlined'
              label='Count'
              keyboardType='numeric'
              style={{ marginBottom: 5 }}
              value={newProduct.count}
              onChangeText={(text) =>
                setNewProduct({ ...newProduct, count: text })
              }
            />

            <TextInput
              outlineColor='#00000024'
              activeOutlineColor='#b97d3b'
              mode='outlined'
              label='Price'
              keyboardType='numeric'
              style={{ marginBottom: 5 }}
              value={newProduct.price}
              onChangeText={(text) =>
                setNewProduct({ ...newProduct, price: text })
              }
            />

            <DropDown newProduct={newProduct} setNewProduct={setNewProduct} />
            <UseUpdateImg setImgFile={setImgFile} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Button
                style={{
                  borderRadius: 7,
                  height: 45,
                  marginTop: 10,
                  width: 173,
                }}
                buttonColor='#f0e9dd'
                textColor='#b97d3b'
                loading={isLoading}
                mode='contained'
                onPress={handelAddProduct}
              >
                <Text style={{ fontWeight: '400' }}>Add</Text>
              </Button>
              <Button
                style={{
                  borderRadius: 7,
                  height: 45,
                  marginTop: 10,
                  width: 173,
                }}
                buttonColor='#f0e9dd'
                textColor='#b97d3b'
                mode='contained'
                onPress={() => {
                  setVisible(false);
                  setNewProduct({
                    id: 0,
                    name: '',
                    price: '',
                    count: '',
                    category: '',
                  });
                  setImgFile('');
                }}
              >
                <Text style={{ fontWeight: '400' }}>Cancel</Text>
              </Button>
            </View>
          </View>
        </Modal>
      </Portal>
      <Button
        textColor='#b97d3b'
        style={{
          backgroundColor: '#f0e9dd',
          width: 200,
          alignSelf: 'center',
          borderRadius: 5,
          height: 45,
          marginTop: 20,
          marginBottom: 7,
        }}
        onPress={showModal}
      >
        Add New Product
      </Button>
    </Provider>
  );
};
export default AddNewProduct;
