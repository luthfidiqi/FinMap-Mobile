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

function TransactionIncome() {
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

  const handleAdd = () => {
    navigation.navigate('AddTransaction');
  };

  const handleExpense = () => {
    navigation.navigate('Transaction');
  };

  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF', height: '100%'}}>
      <ScrollView>
        <View style={{paddingBottom: 120, marginHorizontal: 24, marginTop: 40}}>
          <Text
            style={{
              color: '#090A0A',
              fontWeight: 'bold',
              fontSize: 26,
              marginBottom: 20,
            }}>
            Transaction
          </Text>
          <View
            style={{
              width: '100%',
              padding: 20,
              backgroundColor: '#FCFCFD',
              borderWidth: 1,
              borderColor: '#EAE9F0',
              borderRadius: 18,
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
              }}>
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
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#2C2646',
                  }}>
                  Rp 5.000.000
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
                  Income
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#2C2646',
                  }}>
                  Rp 10.000.000
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              width: '100%',
              padding: 20,
              backgroundColor: '#FCFCFD',
              borderWidth: 1,
              borderColor: '#EAE9F0',
              borderRadius: 18,
              marginBottom: 25,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: '#171328',
                marginBottom: 18,
              }}>
              Funds Allocation
            </Text>
            <View
              style={{
                width: '100%',
                backgroundColor: '#E3ECFD',
                borderRadius: 99,
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                onPress={handleExpense}
                style={{
                  width: '50%',
                  backgroundColor: '#E3ECFD',
                  borderRadius: 99,
                  paddingVertical: 8,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: '#0161FD',
                    textAlign: 'center',
                  }}>
                  Expense
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  width: '50%',
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#FFFFFF',
                  textAlign: 'center',
                  backgroundColor: '#0161FD',
                  borderRadius: 99,
                  paddingVertical: 8,
                }}>
                Income
              </Text>
            </View>
            {/* Donnut Chart */}
            <View style={{marginVertical: 25, alignItems: 'center'}}>
              <View style={{width: 175, alignItems: 'center'}}>
                <Pie
                  radius={80}
                  innerRadius={65}
                  sections={[
                    {
                      percentage: 85,
                      color: '#6347EB',
                    },
                    {
                      percentage: 15,
                      color: '#F46040',
                    },
                  ]}
                  dividerSize={6}
                  strokeCap={'butt'}
                />
                <View style={styles.gauge}>
                  <Text
                    style={{
                      backgroundColor: 'transparent',
                      color: '#2C2646',
                      fontSize: 14.5,
                      fontWeight: 'bold',
                      marginTop: 10,
                    }}>
                    Rp 10.000.000
                  </Text>
                  <Text
                    style={{
                      backgroundColor: 'transparent',
                      color: '#72777A',
                      fontSize: 14,
                      fontWeight: 'bold',
                    }}>
                    Income
                  </Text>
                </View>
              </View>
            </View>
            {/* Bar Chart */}
            <View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: '#090A0A', fontSize: 14, fontWeight: 500}}>
                  Salary (85%)
                </Text>
                <Text style={{color: '#090A0A', fontSize: 14, fontWeight: 500}}>
                  Rp 8.500.000
                </Text>
              </View>
              <View
                style={{
                  marginTop: 10,
                  marginBottom: 24,
                  backgroundColor: '#E8EAED',
                  width: '100%',
                  height: 7,
                  borderRadius: 99,
                }}>
                <View
                  style={{
                    backgroundColor: '#6347EB',
                    width: '85%',
                    height: 7,
                    borderRadius: 99,
                  }}></View>
              </View>
            </View>
            <View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: '#090A0A', fontSize: 14, fontWeight: 500}}>
                  Interest Money (15%)
                </Text>
                <Text style={{color: '#090A0A', fontSize: 14, fontWeight: 500}}>
                  Rp 1.500.000
                </Text>
              </View>
              <View
                style={{
                  marginTop: 10,
                  marginBottom: 14,
                  backgroundColor: '#E8EAED',
                  width: '100%',
                  height: 7,
                  borderRadius: 99,
                }}>
                <View
                  style={{
                    backgroundColor: '#F46040',
                    width: '15%',
                    height: 7,
                    borderRadius: 99,
                  }}></View>
              </View>
            </View>
          </View>

          {/* Transaction History */}
          <Text
            style={{
              color: '#090A0A',
              fontWeight: 'bold',
              fontSize: 18,
              marginTop: 5,
              marginBottom: 20,
            }}>
            Transaction History
          </Text>
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
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 3,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 'bold',
                  color: '#2C2646',
                }}>
                17 Agustus 2023
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 'bold',
                  color: '#FF414C',
                }}>
                - Rp 50.000
              </Text>
            </View>
            <View
              style={{
                width: '100%',
                height: 2,
                backgroundColor: '#E3E5E5',
                marginVertical: 12,
              }}></View>
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
                <View>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 500,
                      color: '#2C2646',
                    }}>
                    Entertainment
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 400,
                      color: '#2C2646',
                    }}>
                    Watch movie at cinema
                  </Text>
                </View>
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#FF414C',
                }}>
                - Rp 50.000
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 10,
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
                <View>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 500,
                      color: '#2C2646',
                    }}>
                    Living Cost
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 400,
                      color: '#2C2646',
                    }}>
                    Electricity bills
                  </Text>
                </View>
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#FF414C',
                }}>
                - Rp 150.000
              </Text>
            </View>
          </View>
          {/* Income */}
          <View
            style={{
              width: '100%',
              padding: 12,
              backgroundColor: '#FCFCFD',
              borderWidth: 1,
              borderColor: '#EAE9F0',
              borderRadius: 18,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 3,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 'bold',
                  color: '#2C2646',
                }}>
                2 Agustus 2023
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 'bold',
                  color: '#23C16B',
                }}>
                + Rp 8.500.000
              </Text>
            </View>
            <View
              style={{
                width: '100%',
                height: 2,
                backgroundColor: '#E3E5E5',
                marginVertical: 12,
              }}></View>
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
                    source={require('../assets/icons/income/salary.png')}
                    style={{width: 24, height: 24}}
                  />
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 500,
                      color: '#2C2646',
                    }}>
                    Salary
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 400,
                      color: '#2C2646',
                    }}>
                    Main Income
                  </Text>
                </View>
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#23C16B',
                }}>
                + Rp 8.500.000
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
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
          zIndex: 3,
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
        <View style={{display: 'flex', alignItems: 'center'}}>
          <Image
            source={require('../assets/icons/transaction_active.png')}
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

const styles = StyleSheet.create({
  container: {alignItems: 'center', justifyContent: 'center', height: 1050},
  gauge: {
    position: 'absolute',
    width: 100,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TransactionIncome;
