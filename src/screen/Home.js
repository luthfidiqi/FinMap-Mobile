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

function ForgotPassword(props) {
  const navigation = useNavigation();

  const handleSend = () => {
    props.navigation.navigate('UpdatePassword');
  };

  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF', height: '100%'}}>
      <View style={{marginTop: 40, marginHorizontal: 24}}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '600',
            color: '#171328',
            marginBottom: 5,
          }}>
          Available Funds
        </Text>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: '#2C2646',
            marginBottom: 8,
          }}>
          Rp 5.000.000
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

export default ForgotPassword;
