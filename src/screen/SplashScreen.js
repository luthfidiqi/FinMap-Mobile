import React, {useEffect} from 'react';
import {View, Text, ImageBackground, Image, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function SplashScreen(props) {
  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    const token = await AsyncStorage.getItem('token');

    setTimeout(() => {
      if (token) {
        props.navigation.navigate('AppScreen');
      } else {
        props.navigation.navigate('AuthScreen');
      }
    }, 1500);
  };

  return (
    <ImageBackground
      source={require('../assets/splash_screen_bg.png')} // Ganti dengan path gambar latar belakang Anda
      style={styles.background}>
      <View style={styles.container}>
        <Image
          source={require('../assets/splash_screen_logo.png')} // Ganti dengan path gambar Anda
          style={styles.image}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Atur bagaimana gambar latar belakang menyesuaikan ruang
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
