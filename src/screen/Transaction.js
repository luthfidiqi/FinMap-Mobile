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

function Transaction() {
  const navigation = useNavigation();

  const handleOverview = () => {
    navigation.navigate('Overview');
  };

  const handlePlanning = () => {
    navigation.navigate('Planning');
  };

  const handleSettings = () => {
    navigation.navigate('Settings');
  };

  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF', height: '100%'}}>
      <View style={{marginTop: 40, marginHorizontal: 24}}></View>
      <Text>Transaction</Text>
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
        <View style={{display: 'flex', alignItems: 'center'}}>
          <Image
            source={require('../assets/icons/transaction_active.png')} // Ganti dengan path gambar Anda
            style={{width: 24, height: 24}}
          />
          <Text
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: '#0161FD',
            }}>
            Transaction
          </Text>
        </View>
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
        <TouchableOpacity
          onPress={handleSettings}
          style={{display: 'flex', alignItems: 'center'}}>
          <Image
            source={require('../assets/icons/settings.png')} // Ganti dengan path gambar Anda
            style={{width: 24, height: 24}}
          />
          <Text
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: '#AEABC2',
            }}>
            Settings
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

export default Transaction;
