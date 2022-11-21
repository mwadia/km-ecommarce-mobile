import React, { useEffect, useState } from 'react';
import { View, Dimensions } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import Products from './Products';
import Apiservices from '../../servese/ApiServices';
function Home() {
  const [products, setProducts] = useState([]);
  const [text, setText] = React.useState('');
  let ScreenHeight = Dimensions.get('window').height;

  const [filter, setFilter] = useState({
    q: '',
    c: '',
  });
  useEffect(() => {
    async function fetchProducts() {
      const { q, c } = filter;
      const { data } = await Apiservices.get(`/allproduct?q=${q}&c=${c}`);
      setProducts(data);
    }

    fetchProducts();
  }, [filter]);
  return (
    <View style={{ paddingTop: 100, minHeight: ScreenHeight }}>
      <TextInput
        label='Search'
        value={filter.q}
        style={{ backgroundColor: '#ffffff', color: 'black' }}
        onChangeText={(e) => setFilter({ ...filter, q: e })}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Button
          onPress={() => {
            setFilter({ ...filter, c: '' });
          }}
        >
          All
        </Button>
        <Button
          onPress={() => {
            setFilter({ ...filter, c: 'zalma' });
          }}
        >
          Man
        </Button>
        <Button
          onPress={() => {
            setFilter({ ...filter, c: 'woman' });
          }}
        >
          Woman
        </Button>
        <Button
          onPress={() => {
            setFilter({ ...filter, c: 'chaild' });
          }}
        >
          Chaild
        </Button>
      </View>
      <Products products={products} />
    </View>
  );
}

export default Home;
