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
import Svg, {Rect} from 'react-native-svg';
import {useNavigation} from '@react-navigation/native';

function Overview() {
  const navigation = useNavigation();

  const handleTransaction = () => {
    navigation.navigate('Transaction');
  };

  const handlePlanning = () => {
    navigation.navigate('Planning');
  };

  const handleSettings = () => {
    navigation.navigate('Settings');
  };

  const handleAI = () => {
    navigation.navigate('Overview');
  };

  // function getRandomColor() {
  //   const letters = '0123456789ABCDEF';
  //   let color = '#';
  //   for (let i = 0; i < 6; i++) {
  //     color += letters[Math.floor(Math.random() * 16)];
  //   }
  //   return color;
  // }

  const dataCategory = {
    available: {
      name: 'Available Funds',
      percentage: '50%',
      color: '#DDDDDD',
    },
    livingCost: {
      name: 'Living Cost',
      percentage: '25%',
      color: '#6347EB',
    },
    entertainment: {
      name: 'Entertainment',
      percentage: '15%',
      color: '#F46040',
    },
    gifts: {
      name: 'Gift & Donations',
      percentage: '10%',
      color: '#56BADA',
    },
  };

  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF', height: '100%'}}>
      <ScrollView>
        <View style={{marginTop: 40, marginHorizontal: 24, paddingBottom: 120}}>
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
          <View
            style={{
              width: '100%',
              padding: 20,
              backgroundColor: '#FCFCFD',
              borderWidth: 1,
              borderColor: '#EAE9F0',
              borderRadius: 18,
              marginTop: 15,
              marginBottom: 25,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: '#171328',
                marginBottom: 18,
              }}>
              August 2023
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 18,
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '500',
                    color: '#72777A',
                    marginBottom: 5,
                  }}>
                  Income
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#2C2646',
                  }}>
                  Rp 10.000.000
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '500',
                    color: '#72777A',
                    marginBottom: 5,
                  }}>
                  Expense
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#2C2646',
                  }}>
                  Rp 5.000.000
                </Text>
              </View>
            </View>
            {/* Bar Chart */}
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                borderRadius: 100,
                height: 15,
                overflow: 'hidden',
              }}>
              <View
                style={{
                  width: dataCategory.livingCost.percentage,
                  backgroundColor: dataCategory.livingCost.color,
                }}
              />
              <View
                style={{
                  width: dataCategory.entertainment.percentage,
                  backgroundColor: dataCategory.entertainment.color,
                }}
              />
              <View
                style={{
                  width: dataCategory.gifts.percentage,
                  backgroundColor: dataCategory.gifts.color,
                }}
              />
              <View
                style={{
                  width: dataCategory.available.percentage,
                  backgroundColor: dataCategory.available.color,
                }}
              />
            </View>
            {/* Indicators */}
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                marginTop: 18,
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: 10,
                  marginBottom: 10,
                }}>
                <View
                  style={{
                    borderRadius: 100,
                    height: 12,
                    width: 12,
                    marginRight: 5,
                    backgroundColor: dataCategory.available.color,
                  }}></View>
                <Text style={{fontSize: 14, color: '#090A0A', fontWeight: 500}}>
                  {dataCategory.available.name} (
                  {dataCategory.available.percentage})
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: 10,
                  marginBottom: 10,
                }}>
                <View
                  style={{
                    borderRadius: 100,
                    height: 12,
                    width: 12,
                    marginRight: 5,
                    backgroundColor: dataCategory.livingCost.color,
                  }}></View>
                <Text style={{fontSize: 14, color: '#090A0A', fontWeight: 500}}>
                  {dataCategory.livingCost.name} (
                  {dataCategory.livingCost.percentage})
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: 10,
                  marginBottom: 10,
                }}>
                <View
                  style={{
                    borderRadius: 100,
                    height: 12,
                    width: 12,
                    marginRight: 5,
                    backgroundColor: dataCategory.entertainment.color,
                  }}></View>
                <Text style={{fontSize: 13, color: '#090A0A', fontWeight: 500}}>
                  {dataCategory.entertainment.name} (
                  {dataCategory.entertainment.percentage})
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: 10,
                  marginBottom: 10,
                }}>
                <View
                  style={{
                    borderRadius: 100,
                    height: 12,
                    width: 12,
                    marginRight: 5,
                    backgroundColor: dataCategory.gifts.color,
                  }}></View>
                <Text style={{fontSize: 14, color: '#090A0A', fontWeight: 500}}>
                  {dataCategory.gifts.name} ({dataCategory.gifts.percentage})
                </Text>
              </View>
            </View>
          </View>
          {/* FinAI */}
          <TouchableOpacity
            onPress={handleAI}
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              width: '100%',
              backgroundColor: '#0161FD',
              borderRadius: 18,
              marginBottom: 20,
            }}>
            <Image
              source={require('../assets/finai.png')}
              style={{width: '100%', height: 100, borderRadius: 18}}
            />
          </TouchableOpacity>
          {/* Top Expense */}
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              color: '#2C2646',
            }}>
            Top Expenses
          </Text>
          <View
            style={{
              width: '100%',
              padding: 12,
              backgroundColor: '#FCFCFD',
              borderWidth: 1,
              borderColor: '#EAE9F0',
              borderRadius: 18,
              marginTop: 20,
              marginBottom: 25,
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
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#FF414C',
                }}>
                - Rp 2.500.000
              </Text>
            </View>
          </View>
          {/* Top Incomes */}
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              color: '#2C2646',
            }}>
            Top Incomes
          </Text>
          <View
            style={{
              width: '100%',
              padding: 12,
              backgroundColor: '#FCFCFD',
              borderWidth: 1,
              borderColor: '#EAE9F0',
              borderRadius: 18,
              marginTop: 20,
              marginBottom: 25,
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
                    backgroundColor: '#23C16B',
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
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#23C16B',
                }}>
                - Rp 2.500.000
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
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
        <View style={{display: 'flex', alignItems: 'center'}}>
          <Image
            source={require('../assets/icons/overview_active.png')}
            style={{width: 24, height: 24}}
          />
          <Text
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: '#0161FD',
            }}>
            Overview
          </Text>
        </View>
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

export default Overview;
