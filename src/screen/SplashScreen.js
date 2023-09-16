import React, {useEffect} from 'react';
import {View, Text, ImageBackground, Image, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

function SplashScreen() {
  const navigation = useNavigation();
  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    const token = await AsyncStorage.getItem('token');

    setTimeout(() => {
      if (token) {
        navigation.navigate('AppScreen');
      } else {
        navigation.navigate('AuthScreen');
      }
    }, 1500);
  };

  return (
    <ImageBackground
      source={require('../assets/splash_screen_bg.png')}
      style={styles.background}>
      <View style={styles.container}>
        <Image
          source={require('../assets/splash_screen_logo.png')}
          style={styles.image}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    // color: 'white',
    fontSize: 20,
  },
});

export default SplashScreen;
