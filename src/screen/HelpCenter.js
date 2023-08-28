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

function HelpCenter() {
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
            onPress={() => navigation.goBack()}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 40,
              marginBottom: 24,
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={require('../assets/back_icon.png')} // Ganti dengan path gambar Anda
                style={{
                  marginHorizontal: 24,
                  height: 30,
                  width: 30,
                }}
              />
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: 'Inter-Medium',
                  color: '#090A0A',
                }}>
                Help Center
              </Text>
            </TouchableOpacity>
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
                Hello!
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'Inter-Medium',
                  lineHeight: 24,
                  color: '#090A0A',
                  marginBottom: 24,
                }}>
                We are here to assist you! If you encounter any issues or have
                questions, please don't hesitate to reach out to us. We're ready
                to assist you with pleasure.
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Inter-Bold',
                  lineHeight: 24,
                  color: '#090A0A',
                  marginBottom: 10,
                }}>
                How to Contact Us?
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'Inter-Medium',
                  lineHeight: 24,
                  color: '#090A0A',
                  marginBottom: 24,
                }}>
                If you have questions or face technical problems, we recommend
                sending an email to our support team. We will respond promptly
                to ensure you get the help you need.
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Inter-Bold',
                  lineHeight: 24,
                  color: '#090A0A',
                  marginBottom: 10,
                }}>
                How to Send an Email:
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'Inter-Medium',
                  lineHeight: 24,
                  color: '#090A0A',
                  marginBottom: 24,
                }}>
                1. Click the "Send Email" button below. {'\n'} 2. Send email to
                (luthfidiqi.tech@gmail.com) {'\n'} 3. Fill out the email form
                with the following information: {'\n'} - Subject: [Enter your
                issue's subject here] {'\n'} - Message: [Explain your issue or
                question in detail] {'\n'} 4.Click the "Send" button to send the
                email.
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Inter-Bold',
                  lineHeight: 24,
                  color: '#090A0A',
                  marginBottom: 10,
                }}>
                When will we respond?
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'Inter-Medium',
                  lineHeight: 24,
                  color: '#090A0A',
                  marginBottom: 24,
                }}>
                Our support team will respond to your email as quickly as
                possible, typically within 24 hours on business days. We
                appreciate your patience as we work to provide the best
                solutions for your concerns.
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Inter-Bold',
                  lineHeight: 24,
                  color: '#090A0A',
                  marginBottom: 10,
                }}>
                Note:
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'Inter-Medium',
                  lineHeight: 24,
                  color: '#090A0A',
                  marginBottom: 24,
                }}>
                Technical issues or questions submitted via email will remain
                our top priority. We are committed to delivering quick and
                efficient assistance. Thank you for using our application. We
                hope you have a satisfying experience, and we're always here to
                help if needed. Warm regards, FinMap Developer Team Please make
                sure to replace the email address (luthfidiqi.tech@gmail.com)
                with the actual support email address and tailor the text to
                your specific situation and service.
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
    </View>
  );
}

const styles = StyleSheet.create({});

export default HelpCenter;
