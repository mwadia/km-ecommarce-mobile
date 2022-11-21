import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function UseUpdateImage({ setImgFile, imgFile }) {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result, 1111);

    if (!result.canceled) {
      setImgFile(result.assets[0].uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {imgFile && (
        <Image source={{ uri: imgFile }} style={{ width: 200, height: 200 }} />
      )}
      <Button title='Pick an image from camera roll' onPress={pickImage} />
    </View>
  );
}
