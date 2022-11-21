import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, Text } from 'react-native';
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
      <Button title='Pick an image from camera roll' onPress={pickImage} />
    </View>
  );
}
