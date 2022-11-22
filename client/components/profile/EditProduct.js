import * as React from 'react';
import { View ,Text} from 'react-native';
import { Modal, Portal, TextInput, Provider, IconButton } from 'react-native-paper';
import UseUpdateImg from '../../hook/UseUpdateImg';
import DropDown from './DropDown';
import Apiservices from '../../servese/ApiServices';
const EditProduct = ({ newItem, setNewItem }) => {
  const { id } = newItem;
  const [newProduct, setNewProduct] = React.useState(newItem);

  const [visible, setVisible] = React.useState(false);
  const [imgFile, setImgFile] = React.useState('');
 
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};
const handelAddProduct=()=>{
  console.log(newProduct);

  const newData = new FormData();
  if (imgFile) {
    newData.append('file', imgFile);
  }
  newData.append('file', imgFile);
  newData.append('data', JSON.stringify(newProduct));
  Apiservices({
    method: 'put',
    url: `/editproduct/${id}`,
    data: newData,
    headers: { 'Content-Type': 'multipart/form-data' },
  }).then((isExist) => {
    console.log(2222);
    if (isExist.data.data) {
      setNewItem(isExist.data.data);
      setOpen(false);
      setImgFile('');
    }
    });

}
  return (
    <Provider>
      <Portal >
        <Modal style={{width: 400,position:'relative',right:100,height:500}} visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
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
      value={`${newProduct.count}`}
      onChangeText={(text) =>{ 
        console.log(newProduct.count);
        setNewProduct({...newProduct,count:text})}}
    />
 
        <TextInput
      outlineColor='#00000024'
      activeOutlineColor='#b97d3b'
      mode='outlined'
      label='Price'
      style={{ marginBottom: 5 }}
      value={ `${newProduct.price}`}
      onChangeText={(text) => setNewProduct({...newProduct,price:text})}
    />

<DropDown newProduct={newProduct} setNewProduct={setNewProduct}/>
<UseUpdateImg setImgFile={setImgFile}/>
<Text style={{margin:30}} onPress={handelAddProduct}>Update</Text>
          </View>
        </Modal>
      </Portal>
      <IconButton
          icon='pencil'
          iconColor='#ffff'
          textColor='#3d4526'
          onPress={showModal}
        ></IconButton>
    </Provider>
  );
};
export default EditProduct