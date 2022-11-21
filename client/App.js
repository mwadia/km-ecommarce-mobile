import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import Cart from './components/cart';
import Home from './components/home';
import LandingPage from './components/landingPage';
import Nav from './components/nav';
import Footer from './components/public/Footer';
import SignIn from './components/signs/SignIn';
import SignUp from './components/signs/SignUp';
import Storage from './components/Storage';
function App() {
  const [navgate, setNavgate] = useState(3);
  return (
    <SafeAreaView>
      <ScrollView>
        <Storage>
          <View style={{ flex: 1, backgroundColor: '#f7f7f7' }}>
            {navgate === 0 && <LandingPage setNavgate={setNavgate} />}
            {navgate === 1 && <Home setNavgate={setNavgate} />}
            {navgate === 2 && <SignIn setNavgate={setNavgate} />}
            {navgate === 3 && <Cart setNavgate={setNavgate} />}
            {/* {!navgate === 2 && <Footer />} */}
            {navgate === 4 && <SignUp setNavgate={setNavgate} />}
            <Footer />
            <StatusBar style='auto' />
          </View>
        </Storage>
      </ScrollView>
      <Nav setNavgate={setNavgate} />
    </SafeAreaView>
  );
}

export default App;
