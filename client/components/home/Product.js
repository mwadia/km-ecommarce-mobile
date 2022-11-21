import * as React from 'react';
import { View } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const Product = ({ product }) => {
  const [newItem, setNewItem] = React.useState(product);
  const { id, name, price, count, productImg } = newItem;

  return (
    <Card style={{ backgroundColor: '#f7f7f7', marginBottom: 50, padding: 20 }}>
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
    </Card>
  );
};

export default Product;
