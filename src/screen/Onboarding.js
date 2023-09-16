import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  Image,
  TextInput,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

import {useNavigation} from '@react-navigation/native';

function LoginScreen() {
  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  const handleInputChange = text => {
    setInputValue(text);
  };

  const carouselItems = [
    {
      image: require('../assets/carousel_1.png'),
      text: 'Empower Your Financial Future',
    },
    {
      image: require('../assets/carousel_2.png'),
      text: 'Personal Financial Monitoring',
    },
    {
      image: require('../assets/carousel_3.png'),
      text: 'Tracking Your Income & Expense',
    },
  ];

  const [activeSlide, setActiveSlide] = React.useState(0);

  const {width: screenWidth} = Dimensions.get('window');

  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <View style={{alignItems: 'center', height: '100%'}}>
        <Image
          source={require('../assets/logo_onboard.png')}
          style={styles.image}
        />
        <Carousel
          data={carouselItems}
          renderItem={({item}) => (
            <View
              style={{
                display: 'flex',
                alignItems: 'center',
              }}>
              <Image
                source={item.image}
                style={{width: 240, height: 240, marginBottom: 40}}
              />
              <Text
                style={{
                  width: 320,
                  textAlign: 'center',
                  lineHeight: 35,
                  marginBottom: 30,
                  fontSize: 24,
                  color: '#090A0A',
                  fontFamily: 'Inter-Bold',
                }}>
                {item.text}
              </Text>
            </View>
          )}
          sliderWidth={screenWidth}
          itemWidth={screenWidth}
          loop={true}
          autoplay={true}
          autoplayDelay={1000}
          autoplayInterval={3000}
          onSnapToItem={index => setActiveSlide(index)}
        />
        <Pagination
          dotsLength={carouselItems.length}
          activeDotIndex={activeSlide}
          containerStyle={{marginTop: -15}}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            backgroundColor: '#0161FD',
          }}
        />
        <View style={{marginBottom: 70}}>
          <TouchableOpacity
            title="Register"
            style={styles.button}
            onPress={handleRegister}>
            <Text style={styles.buttonText}>Create Account</Text>
          </TouchableOpacity>
          <View style={styles.login}>
            <Text style={{color: '#202325', fontSize: 16, fontWeight: '500'}}>
              Have an account?{' '}
            </Text>
            <TouchableOpacity title="Login" onPress={handleLogin}>
              <Text style={{color: '#0161FD', fontSize: 16, fontWeight: '500'}}>
                Log In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    marginTop: 50,
    marginBottom: 120,
  },
  container: {
    marginBottom: 40,
  },
  carousel: {
    flex: 1,
  },
  button: {
    height: 48,
    width: 184,
    backgroundColor: '#0161FD',
    borderRadius: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
    marginBottom: 24,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  login: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default LoginScreen;
