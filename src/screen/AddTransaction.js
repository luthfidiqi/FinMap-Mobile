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

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = text => {
    setInputValue(text);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
        height: '100%',
        justifyContent: 'space-between',
      }}>
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
          <TextInput
            style={{
              marginTop: 12,
              fontSize: 28,
              fontFamily: 'Inter-Medium',
              fontWeight: 'bold',
              padding: 0,
            }}
            value={inputValue}
            onChangeText={handleInputChange}
            placeholder="Rp 0"
            placeholderTextColor="#72777A"
            keyboardType="numeric"
          />
          <View
            style={{
              width: '100%',
              height: 2,
              backgroundColor: '#E3E5E5',
              marginVertical: 20,
            }}></View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 25,
            }}>
            <View>
              <Text
                style={{fontSize: 17, color: '#090A0A', fontWeight: 'bold'}}>
                Category
              </Text>
              <Text style={{fontSize: 15, color: '#72777A', marginTop: 5}}>
                Select Category
              </Text>
            </View>
            <Image
              source={require('../assets/icons/arrow_right.png')}
              style={{width: 24, height: 24}}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 25,
            }}>
            <View>
              <Text
                style={{fontSize: 17, color: '#090A0A', fontWeight: 'bold'}}>
                Notes
              </Text>
              <Text style={{fontSize: 15, color: '#72777A', marginTop: 5}}>
                Input your notes
              </Text>
            </View>
            <Image
              source={require('../assets/icons/arrow_right.png')}
              style={{width: 24, height: 24}}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 25,
            }}>
            <View>
              <Text
                style={{fontSize: 17, color: '#090A0A', fontWeight: 'bold'}}>
                Set Date
              </Text>
              <Text style={{fontSize: 15, color: '#72777A', marginTop: 5}}>
                Today
              </Text>
            </View>
            <Image
              source={require('../assets/icons/calendar.png')}
              style={{width: 24, height: 24}}
            />
          </View>
        </View>
      </View>
      <View style={{marginBottom: 70}}>
        <TouchableOpacity
          title="send"
          style={{
            height: 54,
            backgroundColor: '#0161FD',
            borderRadius: 48,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 24,
          }}
          onPress={handleBack}>
          <Text style={{color: 'white', fontSize: 16}}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

export default AddTransaction;
