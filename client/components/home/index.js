import React, { useEffect, useState } from 'react';
import { View, Dimensions } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import Products from './Products';
import Apiservices from '../../servese/ApiServices';
function Home() {
  const [isActive, setIsActive] = useState(0);
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
          textColor={isActive === 0 ? '#b97d3b' : '#445740'}
          onPress={() => {
            setFilter({ ...filter, c: '' });
            setIsActive(0);
          }}
        >
          All
        </Button>
        <Button
          textColor={isActive === 1 ? '#b97d3b' : '#445740'}
          onPress={() => {
            setFilter({ ...filter, c: 'zalma' });
            setIsActive(1);
          }}
        >
          Man
        </Button>
        <Button
          textColor={isActive === 2 ? '#b97d3b' : '#445740'}
          onPress={() => {
            setFilter({ ...filter, c: 'woman' });
            setIsActive(2);
          }}
        >
          Woman
        </Button>
        <Button
          textColor={isActive === 3 ? '#b97d3b' : '#445740'}
          onPress={() => {
            setFilter({ ...filter, c: 'chaild' });
            setIsActive(3);
          }}
        >
          Child
        </Button>
      </View>
      <Products setProducts={setProducts} products={products} />
    </View>
  );
}

export default Home;
