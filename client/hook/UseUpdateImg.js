import React, { useState, useEffect } from 'react';
import { Image, View, Platform, Text } from 'react-native';
import { Button } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';

export default function UseUpdateImg({ setImgFile }) {
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    let localUri = result.assets[0].uri;
    let filename = localUri.split('/').pop();
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;
    let imgInfo = { uri: localUri, name: filename, type };

    if (!result.canceled) {
      setImgFile(imgInfo);
    }
  };

  return (
    <View>
      <Button
        style={{
          borderRadius: 7,
          borderWidth: 1,
          borderColor: '#e4e4e4',
          height: 45,
          // alignItems: 'flex-start',
          marginStart: 0,
        }}
        buttonColor='#fffcfc'
        textColor='black'
        mode='contained'
        onPress={pickImage}
      >
        <Text style={{ fontWeight: '400' }}>Pick an image</Text>
      </Button>
      {/* <Button color='#fff' title='Pick an image' onPress={pickImage} /> */}
    </View>
  );
}
