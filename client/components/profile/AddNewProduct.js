import * as React from 'react';
import { View ,Text} from 'react-native';
import { Modal, Portal, TextInput, Button, Provider } from 'react-native-paper';
import UseUpdateImg from '../../hook/UseUpdateImg';
import DropDown from './DropDown';
import Apiservices from '../../servese/ApiServices';
const AddNewProduct = ({ userProducts, setUserProducts }) => {
  const [visible, setVisible] = React.useState(false);
  const [imgFile, setImgFile] = React.useState('');
  const [newProduct, setNewProduct] = React.useState({
    id: 0,
    name: '',
    price: '',
    count: '',
    category: '',
  });
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};
const handelAddProduct=()=>{
  const newData = new FormData();
  newData.append('file', imgFile);
  newData.append('data', JSON.stringify(newProduct));
  Apiservices({
    method: 'post',
    url: '/addnewproduct',
    data: newData,
    headers: { 'Content-Type': 'multipart/form-data' },
  }).then((isExist) => {
    if (isExist.data.data) {
      setUserProducts([isExist.data.data, ...userProducts]);
      setNewProduct({
        id: 0,
        name: '',
        price: '',
        count: '',
        category: '',
      });
      setImgFile('');
      console.log(userProducts);
  }
    });

}
  return (
    <Provider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <View>
          <TextInput
      outlineColor='#00000024'
      activeOutlineColor='#b97d3b'
      mode='outlined'
      label='Name Product'
      value={newProduct.name}
      onChangeText={(text) => setNewProduct({...newProduct,name:text})}

      style={{ marginBottom: 5 }}
    />
      <TextInput
      outlineColor='#00000024'
      activeOutlineColor='#b97d3b'
      mode='outlined'
      label='Count'
      style={{ marginBottom: 5 }}
      value={newProduct.count}
      onChangeText={(text) => setNewProduct({...newProduct,count:text})}
    />
 
        <TextInput
      outlineColor='#00000024'
      activeOutlineColor='#b97d3b'
      mode='outlined'
      label='Price'
      style={{ marginBottom: 5 }}
      value={newProduct.price}
      onChangeText={(text) => setNewProduct({...newProduct,price:text})}
    />

<DropDown newProduct={newProduct} setNewProduct={setNewProduct}/>
<UseUpdateImg setImgFile={setImgFile}/>
<Text onPress={handelAddProduct}>Add New Product</Text>
          </View>
        </Modal>
      </Portal>
      <Button style={{marginTop: 30}} onPress={showModal}>
        Add New Product
      </Button>
    </Provider>
  );
};
export default AddNewProduct