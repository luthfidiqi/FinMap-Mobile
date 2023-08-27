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
      <View style={{marginTop: 40, marginHorizontal: 24}}></View>
      <Text>Settings</Text>
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
