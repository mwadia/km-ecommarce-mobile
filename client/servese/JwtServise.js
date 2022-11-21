import { AsyncStorage } from 'react-native';
let tokenName = 'token';
const JwtServise = {
  setToken: async (value) => {
    try {
      const jsonValue = JSON.stringify(value);

      await AsyncStorage.setItem(tokenName, jsonValue);
    } catch (e) {
      // save error
    }

    console.log('Done.');
  },

  getToken: async () => {
    try {
      let value = await AsyncStorage.getItem(tokenName);
      if (value !== null) {
        return value;
      }
    } catch (e) {}
  },

  destroyToken: () => {
    return AsyncStorage.removeItem(tokenName);
  },
};

export default JwtServise;
