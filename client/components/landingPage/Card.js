import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = (props) => <Avatar.Icon {...props} icon='folder' />;

const CardServies = ({ service, index }) => {
  const { img, description, title } = service;

  return (
    <Card style={{ backgroundColor: '#f7f7f7', marginBottom: 50, padding: 20 }}>
      <Card.Content></Card.Content>
      <Card.Cover
        style={{ flex: 1, width: 300, height: 350, resizeMode: 'contain' }}
        source={{ uri: img }}
      />
      <Title
        style={{ textAlign: 'center', marginVertical: 10, color: '#3d4526' }}
      >
        {title}
      </Title>
      <Paragraph
        style={{ textAlign: 'center', marginBottom: 10, color: '#3d4526' }}
      >
        {description}
      </Paragraph>
    </Card>
  );
};

export default CardServies;
