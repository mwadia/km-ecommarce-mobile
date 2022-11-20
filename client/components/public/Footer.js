import React from 'react';
import { Text, View, OpenURLButton } from 'react-native';
import { Button } from 'react-native-paper';

function Footer() {
  return (
    <View style={{ backgroundColor: '#f0e9dd', paddingBottom: 50 }}>
      <Button icon='github' textColor='#3d4526'>
        Mohammed AlWadia
      </Button>
      <Button icon='gmail' textColor='#3d4526'>
        mohammadalwadia@gmail.com
      </Button>
      <Button icon='github' textColor='#3d4526'>
        Mohammed Alshorafa
      </Button>
      <Button icon='gmail' textColor='#3d4526'>
        mohmmedalshorafa1996@gmail.com
      </Button>
    </View>
  );
}

export default Footer;
