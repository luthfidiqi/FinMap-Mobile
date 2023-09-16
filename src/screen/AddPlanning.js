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
// import {CheckBox} from 'react-native-elements';
import CheckBox from 'react-native-check-box';

function AddPlanning() {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.navigate('Planning');
  };

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = text => {
    setInputValue(text);
  };

  const [isChecked, setIsChecked] = useState(false);

  const [isChecked2, setIsChecked2] = useState(false);

  const toggleCheckBox = () => {
    setIsChecked(!isChecked);
  };

  const toggleCheckBox2 = () => {
    setIsChecked2(!isChecked2);
  };

  const [isSelected, setSelection] = useState(false);

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
            Add Category
          </Text>
          <View
            style={{
              marginTop: 28,
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={{
                padding: 17,
                backgroundColor: '#F1F1F2',
                width: 60,
                height: 60,
                borderRadius: 16,
                marginRight: 15,
              }}>
              <Image
                source={require('../assets/icon_edit.png')}
                style={{width: 27, height: 27}}
              />
            </TouchableOpacity>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: 'Inter-Medium',
                  color: '#090A0A',
                  fontWeight: 'bold',
                }}>
                Category Name
              </Text>
              <TextInput
                style={{
                  marginTop: 2,
                  fontSize: 22,
                  fontFamily: 'Inter-Medium',
                  fontWeight: 'bold',
                  padding: 0,
                }}
                value={inputValue}
                onChangeText={handleInputChange}
                placeholder="Input Name Here..."
                placeholderTextColor="#72777A"
              />
            </View>
          </View>
          <View
            style={{
              width: '100%',
              height: 2,
              backgroundColor: '#E3E5E5',
              marginVertical: 20,
            }}></View>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'Inter-Medium',
              color: '#090A0A',
              fontWeight: 'bold',
            }}>
            Category Type
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 28,
            }}>
            <Text style={{fontSize: 18, color: '#090A0A'}}>Expense</Text>
            <CheckBox
              style={{}}
              onClick={toggleCheckBox}
              isChecked={isChecked}
              checkedImage={
                <Image
                  source={require('../assets/icons/checked.png')}
                  style={{width: 28, height: 28}}
                />
              }
              unCheckedImage={
                <Image
                  source={require('../assets/icons/unchecked.png')}
                  style={{width: 28, height: 28}}
                />
              }
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 28,
            }}>
            <Text style={{fontSize: 18, color: '#090A0A'}}>Income</Text>
            <CheckBox
              style={{}}
              onClick={toggleCheckBox2}
              isChecked={isChecked2}
              checkedImage={
                <Image
                  source={require('../assets/icons/checked.png')}
                  style={{width: 28, height: 28}}
                />
              }
              unCheckedImage={
                <Image
                  source={require('../assets/icons/unchecked.png')}
                  style={{width: 28, height: 28}}
                />
              }
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

export default AddPlanning;
