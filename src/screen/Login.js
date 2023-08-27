import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function Login() {
  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate('AppScreen', {
      screen: 'Home',
    });
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  const handleForgot = () => {
    navigation.navigate('ForgotPassword');
  };

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = text => {
    setInputValue(text);
  };

  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF', height: '100%'}}>
      <View
        style={{
          marginHorizontal: 24,
          display: 'flex',
          height: '100%',
          justifyContent: 'space-between',
        }}>
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../assets/back_icon.png')} // Ganti dengan path gambar Anda
              style={{
                height: 30,
                width: 30,
                marginTop: 40,
                marginBottom: 24,
              }}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 32,
              fontWeight: 'bold',
              color: '#090A0A',
              marginBottom: 8,
            }}>
            Welcome back
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'normal',
              color: '#090A0A',
              marginBottom: 32,
            }}>
            Log in to your account
          </Text>
          <View style={styles.container}>
            <View style={{marginBottom: 24}}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#090A0A',
                  marginBottom: 10,
                }}>
                Email Address
              </Text>
              <TextInput
                style={styles.input}
                value={inputValue}
                onChangeText={handleInputChange}
                placeholder="Enter your email"
                placeholderTextColor="#72777A"
              />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#090A0A',
                  marginBottom: 10,
                }}>
                Password
              </Text>
              <TextInput
                style={styles.input}
                value={inputValue}
                onChangeText={handleInputChange}
                placeholder="Enter your password"
                placeholderTextColor="#72777A"
              />
            </View>
            <TouchableOpacity onPress={handleForgot}>
              <Text
                style={{
                  color: '#0161FD',
                  fontSize: 14,
                  fontWeight: '500',
                  marginTop: 20,
                }}>
                Forgot password?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginBottom: 70}}>
          <TouchableOpacity
            title="login"
            style={styles.button}
            onPress={handleLogin}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
          <View style={styles.signup}>
            <Text style={{color: '#202325', fontSize: 16, fontWeight: '500'}}>
              Don’t have an account?{' '}
            </Text>
            <TouchableOpacity onPress={handleRegister}>
              <Text style={{color: '#0161FD', fontSize: 16, fontWeight: '500'}}>
                Create Account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 40,
  },
  input: {
    height: 54,
    backgroundColor: '#FCFDFE',
    borderWidth: 1,
    borderColor: '#E3E5E5',
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
  },
  button: {
    height: 54,
    backgroundColor: '#0161FD',
    borderRadius: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  signup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 24,
  },
});

export default Login;
