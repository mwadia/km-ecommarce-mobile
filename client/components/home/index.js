import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
function Home({ setNavgate }) {
  useEffect(() => {}, []);
  return (
    <View>
      <Text style={{ margin: 50 }} onPress={() => setNavgate(0)}>
        go to landing page
      </Text>
    </View>
  );
}

export default Home;
