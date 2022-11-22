import * as React from 'react';
import { View, Text } from 'react-native';
import {
  Modal,
  Portal,
  TextInput,
  Provider,
  IconButton,
  Button,
} from 'react-native-paper';
import UseUpdateImg from '../../hook/UseUpdateImg';
import DropDown from './DropDown';
import Apiservices from '../../servese/ApiServices';
const EditProduct = ({ newItem, setNewItem }) => {
  const { id } = newItem;
  const [newProduct, setNewProduct] = React.useState(newItem);

  const [visible, setVisible] = React.useState(false);
  const [imgFile, setImgFile] = React.useState('');
  const [isError, setError] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

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
      if (imgFile) {
        newData.append('file', imgFile);
      }
      newData.append('file', imgFile);
      newData.append('data', JSON.stringify(newProduct));
      setIsLoading(true);
      Apiservices({
        method: 'put',
        url: `/editproduct/${id}`,
        data: newData,
        headers: { 'Content-Type': 'multipart/form-data' },
      }).then((isExist) => {
        setIsLoading(false);

        console.log(2222);
        if (isExist.data.data) {
          setVisible(false);
          setNewItem(isExist.data.data);
          setOpen(false);
          setImgFile('');
        }
      });
    } else {
      setIsLoading(false);

      setError('please fill all fields');
    }
  };
  return (
    <Provider>
      <Portal>
        <Modal
          style={{
            width: 350,
            position: 'relative',
            right: 100,
            height: 500,
            top: 0,
          }}
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <View>
            <Text style={{ textAlign: 'center', color: 'red' }}>{isError}</Text>
            <TextInput
              outlineColor='#00000024'
              activeOutlineColor='#b97d3b'
              mode='outlined'
              label='Name Product'
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
              style={{ marginBottom: 5 }}
              value={`${newProduct.count}`}
              onChangeText={(text) => {
                console.log(newProduct.count);
                setNewProduct({ ...newProduct, count: text });
              }}
            />

            <TextInput
              outlineColor='#00000024'
              activeOutlineColor='#b97d3b'
              mode='outlined'
              label='Price'
              style={{ marginBottom: 5 }}
              value={`${newProduct.price}`}
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
                  width: 153,
                }}
                buttonColor='#f0e9dd'
                textColor='#b97d3b'
                loading={isLoading}
                mode='contained'
                onPress={handelAddProduct}
              >
                <Text style={{ fontWeight: '400' }}>Update</Text>
              </Button>
              <Button
                style={{
                  borderRadius: 7,
                  height: 45,
                  marginTop: 10,
                  width: 153,
                }}
                buttonColor='#f0e9dd'
                textColor='#b97d3b'
                mode='contained'
                onPress={() => {
                  setVisible(false);

                  setImgFile('');
                }}
              >
                <Text style={{ fontWeight: '400' }}>Cancel</Text>
              </Button>
            </View>
          </View>
        </Modal>
      </Portal>
      <IconButton
        style={{ margin: 0 }}
        icon='pencil'
        iconColor='#0000005e'
        textColor='#3d4526'
        onPress={showModal}
      ></IconButton>
    </Provider>
  );
};
export default EditProduct;
