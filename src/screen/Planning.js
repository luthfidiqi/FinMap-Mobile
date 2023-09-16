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

function Planning() {
  const navigation = useNavigation();

  const handleOverview = () => {
    navigation.navigate('Overview');
  };

  const handleTransaction = () => {
    navigation.navigate('Transaction');
  };

  const handleSettings = () => {
    navigation.navigate('Settings');
  };

  const handleIncome = () => {
    navigation.navigate('PlanningIncome');
  };

  const handleAdd = () => {
    navigation.navigate('AddPlanning');
  };

  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF', height: '100%'}}>
      <View style={{marginTop: 40, marginHorizontal: 24}}>
        <Text
          style={{
            color: '#090A0A',
            fontWeight: 'bold',
            fontSize: 26,
            marginBottom: 30,
          }}>
          Planning Category
        </Text>
        <View
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 30,
            borderBottomWidth: 2,
            borderBottomColor: '#EAE9F0',
          }}>
          <TouchableOpacity
            onPress={handleOverview}
            style={{
              width: '50%',
              padding: 10,
              display: 'flex',
              alignItems: 'center',
              borderBottomWidth: 3,
              borderBottomColor: '#0161FD',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: '#0161FD',
              }}>
              Expense
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleIncome}
            style={{
              width: '50%',
              padding: 10,
              display: 'flex',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: '#2C283E',
              }}>
              Income
            </Text>
          </TouchableOpacity>
        </View>
        {/* Content Box */}
        <View
          style={{
            width: '100%',
            padding: 12,
            backgroundColor: '#FCFCFD',
            borderWidth: 1,
            borderColor: '#EAE9F0',
            borderRadius: 18,
            marginBottom: 15,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 45,
                  height: 45,
                  borderRadius: 14,
                  backgroundColor: '#FF414C',
                  marginRight: 10,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../assets/icon_livingCost.png')}
                  style={{width: 24, height: 24}}
                />
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  color: '#2C2646',
                }}>
                Living Cost
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            padding: 12,
            backgroundColor: '#FCFCFD',
            borderWidth: 1,
            borderColor: '#EAE9F0',
            borderRadius: 18,
            marginBottom: 15,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 45,
                  height: 45,
                  borderRadius: 14,
                  backgroundColor: '#FF414C',
                  marginRight: 10,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../assets/icons/expense/entertain.png')}
                  style={{width: 24, height: 24}}
                />
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  color: '#2C2646',
                }}>
                Entertainment
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            padding: 12,
            backgroundColor: '#FCFCFD',
            borderWidth: 1,
            borderColor: '#EAE9F0',
            borderRadius: 18,
            marginBottom: 15,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 45,
                  height: 45,
                  borderRadius: 14,
                  backgroundColor: '#FF414C',
                  marginRight: 10,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../assets/icons/expense/gift.png')}
                  style={{width: 24, height: 24}}
                />
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  color: '#2C2646',
                }}>
                Gifts & Donations
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            padding: 12,
            backgroundColor: '#FCFCFD',
            borderWidth: 1,
            borderColor: '#EAE9F0',
            borderRadius: 18,
            marginBottom: 15,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 45,
                  height: 45,
                  borderRadius: 14,
                  backgroundColor: '#FF414C',
                  marginRight: 10,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../assets/icons/expense/education.png')}
                  style={{width: 24, height: 24}}
                />
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  color: '#2C2646',
                }}>
                Education
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            padding: 12,
            backgroundColor: '#FCFCFD',
            borderWidth: 1,
            borderColor: '#EAE9F0',
            borderRadius: 18,
            marginBottom: 15,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 45,
                  height: 45,
                  borderRadius: 14,
                  backgroundColor: '#FF414C',
                  marginRight: 10,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../assets/icons/expense/investment.png')}
                  style={{width: 24, height: 24}}
                />
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  color: '#2C2646',
                }}>
                Investment
              </Text>
            </View>
          </View>
        </View>
      </View>
      {/* Button Add */}
      <View>
        <TouchableOpacity
          onPress={handleAdd}
          style={{
            width: 52,
            height: 52,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0161FD',
            borderRadius: 28,
            position: 'fixed',
            bottom: '200%',
            left: '82%',
            zIndex: 2,
          }}>
          <Image
            source={require('../assets/icon_add.png')}
            style={{width: 20, height: 20}}
          />
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
        <View style={{display: 'flex', alignItems: 'center'}}>
          <Image
            source={require('../assets/icons/planning_active.png')}
            style={{width: 24, height: 24}}
          />
          <Text
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: '#0161FD',
            }}>
            Planning
          </Text>
        </View>
        <TouchableOpacity
          onPress={handleSettings}
          style={{display: 'flex', alignItems: 'center'}}>
          <Image
            source={require('../assets/icons/settings.png')}
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

export default Planning;
