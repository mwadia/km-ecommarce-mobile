import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import Home from './components/home';
import LandingPage from './components/landingPage';
import Nav from './components/nav';
import Footer from './components/public/Footer';

function App() {
  const [navgate, setNavgate] = useState(0);
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ flex: 1, backgroundColor: '#f7f7f7' }}>
          {navgate === 0 && <LandingPage setNavgate={setNavgate} />}
          {navgate === 1 && <Home setNavgate={setNavgate} />}
          <Footer />
          <StatusBar style='auto' />
        </View>
      </ScrollView>
      <Nav setNavgate={setNavgate} />
    </SafeAreaView>
  );
}

export default App;
