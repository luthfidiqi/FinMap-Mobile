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
import Pie from 'react-native-pie';

function AddTransaction() {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.navigate('Transaction');
  };

  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF', height: '100%'}}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: 40,
            paddingBottom: 20,
            justifyContent: 'space-between',
            backgroundColor: '#FFFFFF',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../assets/back_icon.png')}
              style={{
                marginHorizontal: 16,
                height: 30,
                width: 30,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{marginHorizontal: 24}}>
          <Text
            style={{
              fontSize: 26,
              fontFamily: 'Inter-Medium',
              color: '#090A0A',
              fontWeight: 'bold',
            }}>
            Add Transaction
          </Text>
          <Text
            style={{
              marginTop: 28,
              fontSize: 18,
              fontFamily: 'Inter-Medium',
              color: '#090A0A',
              fontWeight: 'bold',
            }}>
            Transaction Amount
          </Text>
          <Text
            style={{
              marginTop: 12,
              fontSize: 28,
              fontFamily: 'Inter-Medium',
              color: '#72777A',
              fontWeight: 'bold',
            }}>
            Rp 0
          </Text>
          <View
            style={{
              width: '100%',
              height: 2,
              backgroundColor: '#E3E5E5',
              marginVertical: 20,
            }}></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

export default AddTransaction;
