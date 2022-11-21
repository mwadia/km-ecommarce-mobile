import * as React from 'react';
import { useState, useContext, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { Avatar, Button, Card, Title, IconButton } from 'react-native-paper';
import { Store } from '../Storage';
import Apiservices from '../../servese/ApiServices';

const ProductCart = ({ product }) => {
  const [newItem, setNewItem] = useState(product);
  const { id, name, price, count, productImg } = product.Product;
  const { setTotal, total, cartProduct, setCartProduct } = useContext(Store);
  const [countCart, setCountCart] = useState(product.count);

  const handelAdd = () => {
    setCountCart(countCart + 1);
    Apiservices.put(`/putcountproduct/${product.id}`, {
      newCount: countCart + 1,
    });
    setTotal(total + price);
  };

  const handelRemove = () => {
    setCountCart(countCart - 1);
    setTotal(total - price);
    Apiservices.put(`/putcountproduct/${product.id}`, {
      newCount: countCart - 1,
    });
  };
  const removeFromCart = () => {
    Apiservices.delete(`/destroyoneproductcart/${id}`);
    setCartProduct(cartProduct.filter((e) => e.Product.id !== id));
    setTotal(total - price * countCart);
  };
  return (
    <Card
      style={{
        backgroundColor: '#fff',
        marginBottom: 50,
        paddingBottom: 20,
        position: 'relative',
      }}
    >
      <Card.Content></Card.Content>
      <Card.Cover
        style={{
          flex: 1,
          width: 250,
          height: 250,
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
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-start',
            height: 40,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              backgroundColor: count <= countCart ? '#e4e4e4' : '#f9e498',
              color: '#2d3024',
              paddingHorizontal: 7,
              paddingVertical: 2,
              borderRadius: 50,
            }}
            disabled={count <= countCart ? true : false}
            onPress={handelAdd}
          >
            +
          </Text>
          <Text
            style={{
              marginHorizontal: 30,
            }}
          >
            {countCart}
          </Text>
          <Text
            style={{
              backgroundColor: countCart < 2 ? '#e4e4e4' : '#f9e498',
              paddingHorizontal: 9,
              paddingVertical: 2,
              borderRadius: 50,
            }}
            disabled={countCart < 2 ? true : false}
            onPress={handelRemove}
          >
            -
          </Text>
        </View>

        <Button disabled={true} mode='contained'>
          {count}
        </Button>
      </View>
      <IconButton
        icon='delete'
        textColor='#3d4526'
        iconColor='red'
        onPress={removeFromCart}
        style={{ position: 'absolute', right: 0 }}
      ></IconButton>
    </Card>
  );
};

export default ProductCart;
