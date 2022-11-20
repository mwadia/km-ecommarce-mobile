import React from 'react';
import { View, Text } from 'react-native';
import CardServies from './Card';
const serviesData = [
  {
    title: 'Select Product',
    img: 'http://res.cloudinary.com/dhqwirard/image/upload/v1668956515/qr237vioqi760wsizxgc.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. A odit similique eum debitis, mollitia voluptate quae laborum nam perspiciatis excepturi magnam ex repudiandae id numquam, optio, aut corrupti iusto quam tempora ut inventore accusamus? Odit quibusdam culpa aut ratione laboriosam!',
  },
  {
    title: 'Make Payment',
    img: 'https://res.cloudinary.com/dhqwirard/image/upload/v1668956589/dgzbwwyrrppajo88yk3w.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. A odit similique eum debitis, mollitia voluptate quae laborum nam perspiciatis excepturi magnam ex repudiandae id numquam, optio, aut corrupti iusto quam tempora ut inventore accusamus? Odit quibusdam culpa aut ratione laboriosam!',
  },
  {
    title: 'Fast Delivery',
    img: 'https://res.cloudinary.com/dhqwirard/image/upload/v1668956636/hatsa7gnor4nx68hkbli.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. A odit similique eum debitis, mollitia voluptate quae laborum nam perspiciatis excepturi magnam ex repudiandae id numquam, optio, aut corrupti iusto quam tempora ut inventore accusamus? Odit quibusdam culpa aut ratione laboriosam!',
  },
];
function Serviese() {
  return (
    <View>
      <Text
        style={{
          textAlign: 'center',
          color: '#576238',
          marginBottom: 20,
          marginTop: 20,
          fontWeight: '600',
          fontSize: 25,
        }}
      >
        Servies
      </Text>
      {serviesData.map((e, i) => (
        <CardServies key={i} service={e} index={i} />
      ))}
    </View>
  );
}

export default Serviese;
