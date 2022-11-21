import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import StartButton from './Button';
import Serviese from './Serviese';

export default function LandingPage({ setNavgate }) {
  let ScreenHeight = Dimensions.get('window').height;

  return (
    <View>
      <View style={{ height: ScreenHeight }}>
        <ImageBackground
          source={require('../../assets/landingPageBG-mobile.jpeg')}
          style={styles.container}
        >
          <Text>linaaaa</Text>
          <StartButton setNavgate={setNavgate} />
        </ImageBackground>
      </View>
      <Serviese />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    height: '100%',
  },
});
