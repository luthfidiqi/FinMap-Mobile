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

function Settings() {
  const navigation = useNavigation();

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
    <View style={{flex: 1, backgroundColor: '#FFFFFF', height: '100%'}}>
      <View style={{marginTop: 40, marginHorizontal: 24}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../assets/icons/user_photo_default.png')} // Ganti dengan path gambar Anda
            style={{width: 64, height: 64, borderRadius: 99, marginRight: 16}}
          />
          <View>
            <Text
              style={{
                fontSize: 24,
                color: '#090A0A',
                fontFamily: 'Inter-Bold',
              }}>
              User Name
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: '#090A0A',
                fontFamily: 'Inter-Regular',
              }}>
              user@gmail.com
            </Text>
          </View>
        </View>
        <TouchableOpacity
          // onPress={handle}
          style={{
            paddingVertical: 16,
            backgroundColor: '#E6EFFF',
            alignItems: 'center',
            borderRadius: 99,
            marginTop: 24,
            marginBottom: 16,
          }}>
          <Text
            style={{
              fontSize: 16,
              color: '#0161FD',
              fontFamily: 'Inter-Medium',
            }}>
            View Profile
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={handle}
          style={{
            paddingVertical: 18,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/icons/user_pass.png')} // Ganti dengan path gambar Anda
            style={{width: 24, height: 24, marginRight: 12}}
          />
          <Text
            style={{
              fontSize: 16,
              color: '#090A0A',
              fontFamily: 'Inter-Medium',
            }}>
            Password
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={handle}
          style={{
            paddingVertical: 18,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/icons/user_help.png')} // Ganti dengan path gambar Anda
            style={{width: 24, height: 24, marginRight: 12}}
          />
          <Text
            style={{
              fontSize: 16,
              color: '#090A0A',
              fontFamily: 'Inter-Medium',
            }}>
            Help
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={handle}
          style={{
            paddingVertical: 18,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/icons/user_notif.png')} // Ganti dengan path gambar Anda
            style={{width: 24, height: 24, marginRight: 12}}
          />
          <Text
            style={{
              fontSize: 16,
              color: '#090A0A',
              fontFamily: 'Inter-Medium',
            }}>
            Notifications
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={handle}
          style={{
            paddingVertical: 18,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/icons/user_rate.png')} // Ganti dengan path gambar Anda
            style={{width: 24, height: 24, marginRight: 12}}
          />
          <Text
            style={{
              fontSize: 16,
              color: '#090A0A',
              fontFamily: 'Inter-Medium',
            }}>
            Rate & Review
          </Text>
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: '#E3E5E5',
            height: 1,
            width: '100%',
            marginVertical: 18,
          }}></View>
        <TouchableOpacity
          // onPress={handle}
          style={{
            paddingVertical: 18,
          }}>
          <Text
            style={{
              fontSize: 16,
              color: '#090A0A',
              fontFamily: 'Inter-Medium',
            }}>
            About
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={handle}
          style={{
            paddingVertical: 18,
          }}>
          <Text
            style={{
              fontSize: 16,
              color: '#090A0A',
              fontFamily: 'Inter-Medium',
            }}>
            Log Out
          </Text>
        </TouchableOpacity>
      </View>
      {/* Bottom NAV */}
      <View
        style={{
          width: '100%',
          height: 80,
          backgroundColor: '#FCFCFD',
          borderWidth: 1,
          borderColor: '#EAE9F0',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 24,
        }}>
        <TouchableOpacity
          onPress={handleOverview}
          style={{display: 'flex', alignItems: 'center'}}>
          <Image
            source={require('../assets/icons/overview.png')} // Ganti dengan path gambar Anda
            style={{width: 24, height: 24}}
          />
          <Text
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: '#AEABC2',
            }}>
            Overview
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleTransaction}
          style={{display: 'flex', alignItems: 'center'}}>
          <Image
            source={require('../assets/icons/transaction.png')} // Ganti dengan path gambar Anda
            style={{width: 24, height: 24}}
          />
          <Text
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: '#AEABC2',
            }}>
            Transaction
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handlePlanning}
          style={{display: 'flex', alignItems: 'center'}}>
          <Image
            source={require('../assets/icons/planning.png')} // Ganti dengan path gambar Anda
            style={{width: 24, height: 24}}
          />
          <Text
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: '#AEABC2',
            }}>
            Planning
          </Text>
        </TouchableOpacity>
        <View style={{display: 'flex', alignItems: 'center'}}>
          <Image
            source={require('../assets/icons/settings_active.png')} // Ganti dengan path gambar Anda
            style={{width: 24, height: 24}}
          />
          <Text
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: '#0161FD',
            }}>
            Settings
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

export default Settings;
