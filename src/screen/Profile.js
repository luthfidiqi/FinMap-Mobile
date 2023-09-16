import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function Profile() {
  const navigation = useNavigation();

  const handleSubmit = () => {
    navigation.navigate('Settings');
  };

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = text => {
    setInputValue(text);
  };

  const handleOverview = () => {
    navigation.navigate('Overview');
  };

  const handleTransaction = () => {
    navigation.navigate('Transaction');
  };

  const handlePlanning = () => {
    navigation.navigate('Planning');
  };

  return (
    <View style={{flex: 1, backgroundColor: '#F7F9FA', height: '100%'}}>
      <View
        style={{
          display: 'flex',
          height: '100%',
          justifyContent: 'space-between',
        }}>
        <View style={{height: '100%'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingTop: 40,
              paddingBottom: 32,
              justifyContent: 'space-between',
              backgroundColor: '#FFFFFF',
            }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={require('../assets/back_icon.png')}
                style={{
                  marginHorizontal: 24,
                  height: 30,
                  width: 30,
                }}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'Inter-Medium',
                color: '#090A0A',
              }}>
              My Profile
            </Text>
            <View
              style={{
                marginHorizontal: 24,
                height: 30,
                width: 30,
              }}></View>
          </View>
          <View style={{alignItems: 'center', backgroundColor: '#FFFFFF'}}>
            <Image
              source={require('../assets/icons/user_photo_default.png')}
              style={{
                width: 64,
                height: 64,
                borderRadius: 99,
              }}
            />
            <TouchableOpacity
              // onPress={handleProfile}
              style={{
                paddingVertical: 10,
                width: 140,
                backgroundColor: '#E6EFFF',
                alignItems: 'center',
                borderRadius: 99,
                marginTop: 24,
                marginBottom: 30,
                fontFamily: 'Inter-Medium',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: '#0161FD',
                  fontFamily: 'Inter-Medium',
                }}>
                Change Photo
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: '100%',
              marginTop: 5,
              backgroundColor: '#FFFFFF',
              paddingHorizontal: 24,
              paddingVertical: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                width: '50%',
                fontSize: 16,
                color: '#090A0A',
                fontFamily: 'Inter-Medium',
              }}>
              Name
            </Text>
            <TextInput
              style={{
                width: '50%',
                fontSize: 16,
                color: '#090A0A',
                fontFamily: 'Inter-Medium',
                textAlign: 'right',
              }}
              value={inputValue}
              onChangeText={handleInputChange}
              placeholder="User Name"
              placeholderTextColor="#72777A"
            />
          </View>
          <View
            style={{
              width: '100%',
              marginTop: 5,
              backgroundColor: '#FFFFFF',
              paddingHorizontal: 24,
              paddingVertical: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                width: '50%',
                fontSize: 16,
                color: '#090A0A',
                fontFamily: 'Inter-Medium',
              }}>
              Email
            </Text>
            <TextInput
              style={{
                width: '50%',
                fontSize: 16,
                color: '#090A0A',
                fontFamily: 'Inter-Medium',
                textAlign: 'right',
              }}
              value={inputValue}
              onChangeText={handleInputChange}
              placeholder="user@gmail.com"
              placeholderTextColor="#72777A"
            />
          </View>
          <View
            style={{
              width: '100%',
              marginTop: 5,
              backgroundColor: '#FFFFFF',
              paddingHorizontal: 24,
              paddingVertical: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                width: '50%',
                fontSize: 16,
                color: '#090A0A',
                fontFamily: 'Inter-Medium',
              }}>
              Phone Number
            </Text>
            <TextInput
              style={{
                width: '50%',
                fontSize: 16,
                color: '#090A0A',
                fontFamily: 'Inter-Medium',
                textAlign: 'right',
              }}
              value={inputValue}
              onChangeText={handleInputChange}
              placeholder="User Phone Number"
              placeholderTextColor="#72777A"
            />
          </View>
          <View
            style={{
              width: '100%',
              marginTop: 5,
              backgroundColor: '#FFFFFF',
              paddingHorizontal: 24,
              paddingVertical: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                width: '50%',
                fontSize: 16,
                color: '#090A0A',
                fontFamily: 'Inter-Medium',
              }}>
              Location
            </Text>
            <TextInput
              style={{
                width: '50%',
                fontSize: 16,
                color: '#090A0A',
                fontFamily: 'Inter-Medium',
                textAlign: 'right',
              }}
              value={inputValue}
              onChangeText={handleInputChange}
              placeholder="Enter Location"
              placeholderTextColor="#72777A"
            />
          </View>
          <View
            style={{
              marginBottom: 55,
              position: 'absolute',
              bottom: 0,
              width: '100%',
              paddingHorizontal: 24,
            }}>
            <TouchableOpacity
              title="send"
              style={{
                height: 54,
                backgroundColor: '#0161FD',
                borderRadius: 48,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={handleSubmit}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  fontFamily: 'Inter-Medium',
                }}>
                Save Change
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

export default Profile;
