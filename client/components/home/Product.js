import * as React from 'react';
import { useState, useContext, useEffect } from 'react';
import { View } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Store } from '../Storage';
import { IconButton } from 'react-native-paper';
import Apiservices from '../../servese/ApiServices';

const Product = ({ product }) => {
  const [newItem, setNewItem] = useState(product);
  const { id, name, price, count, productImg } = newItem;
  const { user, cartProduct, SetCountCart, countCart } = useContext(Store);
  const [isCart, SetIsCart] = useState(false);

  useEffect(() => {
    if (cartProduct.some((e) => e.ProductId === id)) {
      SetIsCart(true);
    } else {
      SetIsCart(false);
    }
  }, [cartProduct]);
  const handelAddtoCart = () => {
    if (isCart) {
      Apiservices.delete(`/destroyoneproductcart/${id}`).then((res) =>
        toast.success(res.data.msg)
      );
      SetCountCart(countCart - 1);
    } else {
      Apiservices.post('/addproducttocart', { ProductId: id }).then((res) =>
        toast.success(res.data.msg)
      );
      SetCountCart(countCart + 1);
    }
    SetIsCart(!isCart);
  };
  return (
    <Card
      style={{
        backgroundColor: '#f7f7f7',
        marginBottom: 50,
        padding: 20,
        position: 'relative',
      }}
    >
      <Card.Content></Card.Content>
      <Card.Cover
        style={{
          flex: 1,
          width: 320,
          height: 350,
          resizeMode: 'contain',
          alignSelf: 'center',
        }}
        source={{ uri: productImg }}
      />
      <Title
        style={{
          textAlign: 'center',
          marginVertical: 10,
          color: '#3d4526',
          fontSize: 25,
          fontWeight: 'light',
          textTransform: 'uppercase',
        }}
      >
        {name}
      </Title>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <Button disabled={true} mode='contained'>
          {price} $
        </Button>
        <Button disabled={true} mode='contained'>
          {count}
        </Button>
      </View>
      {user && (
        <IconButton
          style={{ position: 'absolute', top: 20, right: 20 }}
          icon='cart'
          iconColor={isCart ? 'red' : 'black'}
          textColor='#3d4526'
          onPress={handelAddtoCart}
        ></IconButton>
      )}
    </Card>
  );
};

export default Product;
