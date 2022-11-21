import { AsyncStorage } from 'react-native';
let tokenName = 'token';
const JwtServise = {
  setToken: async (value) => {
    try {
      await AsyncStorage.setItem(tokenName, value);
    } catch (e) {
      // save error
    }

    console.log('Done.');
  },

  getToken: async () => {
    let result = await AsyncStorage.getItem(tokenName);
    console.log(typeof result);
    return result;
  },

  destroyToken: () => {
    return AsyncStorage.removeItem(tokenName);
  },
};

export default JwtServise;
