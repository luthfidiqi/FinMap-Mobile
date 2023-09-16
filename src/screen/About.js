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

function About() {
  const navigation = useNavigation();

  const handleSubmit = () => {
    navigation.navigate('Login');
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
    <View style={{flex: 1, backgroundColor: '#FFFFFF', height: '100%'}}>
      <View
        style={{
          display: 'flex',
          height: '100%',
          justifyContent: 'space-between',
        }}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 40,
              marginBottom: 24,
              justifyContent: 'space-between',
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
              About
            </Text>
            <View
              style={{
                marginHorizontal: 24,
                height: 30,
                width: 30,
              }}></View>
          </View>
          <ScrollView styles={{paddingBottom: 50}}>
            <View style={{marginHorizontal: 24, marginBottom: 200}}>
              <Text
                style={{
                  fontSize: 26,
                  fontFamily: 'Inter-Bold',
                  color: '#090A0A',
                  marginBottom: 8,
                }}>
                About FinMap
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'Inter-Medium',
                  lineHeight: 24,
                  color: '#090A0A',
                  marginBottom: 24,
                }}>
                FinMap created by small team indie developer that believes
                everyone without exception, has the potential to manage their
                finances better. {'\n'}
                {'\n'}FinMap is our commitment to providing a simple yet
                powerful tool to help you planning personal finance. {'\n'}
                {'\n'}FinMap comes from our idea to provide a simple, effective,
                and affordable financial tracking, monitoring, and planning for
                everyone.
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Inter-Bold',
                  lineHeight: 24,
                  color: '#090A0A',
                  marginBottom: 10,
                }}>
                Our Developer Team
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'Inter-Medium',
                  lineHeight: 24,
                  color: '#090A0A',
                  marginBottom: 24,
                }}>
                We are a small team with a passion for software development. We
                believe that a great application can help people to solve a lot
                of problems.
                {'\n'} {'\n'}
                FinMap is the result of our hard work and dedication as indie
                developers. We are enthusiastic about improving it continually,
                listening to feedback from community, and delivering ever better
                solutions.
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Inter-Bold',
                  lineHeight: 24,
                  color: '#090A0A',
                  marginBottom: 10,
                }}>
                Connect with Us:
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'Inter-Medium',
                  lineHeight: 24,
                  color: '#090A0A',
                  marginBottom: 24,
                }}>
                If you have questions, feedback, or just want to say hello,
                please don't hesitate to contact us, {'\n'} {'\n'}Luthfi Thufail
                Asiddiqi {'\n'}(luthfidiqi.tech@gmail.com) {'\n'} {'\n'}M. Aqmal
                Khafidz Pratama {'\n'}(aqmal.pratama81@gmail.com) {'\n'} {'\n'}
                We love hearing from you and are committed to providing the
                best. {'\n'} {'\n'}Thank you for using FinMap. Together, we can
                empower financial future!
              </Text>
            </View>
          </ScrollView>
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
              source={require('../assets/icons/overview.png')}
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
              source={require('../assets/icons/transaction.png')}
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
              source={require('../assets/icons/planning.png')}
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
              source={require('../assets/icons/settings_active.png')}
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
    </View>
  );
}

const styles = StyleSheet.create({});

export default About;
