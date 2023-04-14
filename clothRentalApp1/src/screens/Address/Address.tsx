import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Button,
  TextInput,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {CheckBox} from 'react-native-elements';

import Header from '../Home/Header';

class Address extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      isChecked: false,
    };
  }

  toggleCheckbox = () => {
    this.setState({isChecked: !this.state.isChecked});
  };

  render(): React.ReactNode {
    return (
      <View>
        <Header title={'Address'} />
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              color: '#3E54AC',
              marginLeft: 15,
              marginTop: 10,
            }}>
            + Add Address
          </Text>
          <Button
            title="Add Address"
            onPress={() => {
              this.setState({show: true});
            }}
          />

          <Modal transparent={true} visible={this.state.show}>
            <View style={{backgroundColor: '#000000aa', flex: 1}}>
              <View
                style={{
                  backgroundColor: '#ffffff',
                  margin: 25,
                  padding: 40,
                  borderRadius: 10,
                  flex: 1,
                }}>
                <Text
                  style={{
                    marginTop: 15,
                    fontSize: 18,
                    fontWeight: '600',
                    color: 'blue',
                  }}>
                  {' '}
                  Address
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  {/* <Text>Name</Text> */}
                  <TextInput
                    style={{
                      backgroundColor: '#ECF2FF',
                      marginTop: 20,
                      marginHorizontal: 10,
                      paddingHorizontal: 10,

                      width: '40%',
                      height: 50,
                      textAlign: 'center',
                      fontSize: 18,
                      color: '#3E54AC',
                      fontWeight: 'bold',
                      borderRadius: 5,

                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,
                      elevation: 5,
                    }}
                    placeholder="Pincode"
                    // value={name}shadowOffset: { width: 0, height: 2,
                    // onChangeText={text => setName(text)}
                  />
                  <TextInput
                    style={{
                      backgroundColor: '#ECF2FF',
                      marginTop: 20,
                      marginHorizontal: 10,
                      paddingHorizontal: 10,
                      width: '40%',
                      height: 50,
                      textAlign: 'center',
                      fontSize: 18,
                      color: '#3E54AC',
                      fontWeight: 'bold',
                      borderRadius: 5,

                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,
                      elevation: 5,
                    }}
                    // placeholder="City"
                  />
                </View>
                <View>
                  <Text
                    style={{
                      marginTop: 15,
                      fontSize: 18,
                      fontWeight: '600',
                      color: 'blue',
                    }}>
                    State
                  </Text>
                  <TextInput
                    style={{
                      backgroundColor: '#ECF2FF',
                      marginTop: 20,
                      marginHorizontal: 10,
                      paddingHorizontal: 10,
                      width: 250,
                      height: 50,
                      textAlign: 'center',
                      fontSize: 18,
                      color: '#3E54AC',
                      fontWeight: 'bold',
                      borderRadius: 5,

                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,
                      elevation: 5,
                    }}
                    // placeholder="City"
                  />
                </View>
                <View>
                  <Text
                    style={{
                      marginTop: 15,
                      fontSize: 18,
                      fontWeight: '600',
                      color: 'blue',
                    }}>
                    Street/Area/Locality
                  </Text>
                  <TextInput
                    style={{
                      backgroundColor: '#ECF2FF',
                      marginTop: 20,
                      marginHorizontal: 10,
                      paddingHorizontal: 10,
                      width: 250,
                      height: 50,
                      textAlign: 'center',
                      fontSize: 18,
                      color: '#3E54AC',
                      fontWeight: 'bold',
                      borderRadius: 5,

                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,
                      elevation: 5,
                    }}
                    // placeholder="City"
                  />
                </View>
                <View>
                  <Text
                    style={{
                      marginTop: 15,
                      fontSize: 18,
                      fontWeight: '600',
                      color: 'blue',
                    }}>
                    Flat no/ Building name
                  </Text>
                  <TextInput
                    style={{
                      backgroundColor: '#ECF2FF',
                      marginTop: 20,
                      marginHorizontal: 10,
                      paddingHorizontal: 10,
                      width: 250,
                      height: 50,
                      textAlign: 'center',
                      fontSize: 18,
                      color: '#3E54AC',
                      fontWeight: 'bold',
                      borderRadius: 5,

                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,
                      elevation: 5,
                    }}
                    // placeholder="City"
                  />
                </View>

                <View>
                  <Text
                    style={{
                      marginTop: 15,
                      fontSize: 18,
                      fontWeight: '600',
                      color: 'blue',
                    }}>
                    Type of Address
                  </Text>
                </View>
                {/* <TouchableOpacity onPress={this.toggleCheckbox}>
                  <CheckBox
                    checked={this.state.isChecked}
                    onPress={this.toggleCheckbox}
                  />
                </TouchableOpacity> */}

                <TouchableOpacity
                  style={styles.checkboxContainer}
                  onPress={this.toggleCheckbox}>
                  <CheckBox
                    size={30}
                    style={styles.checkbox}
                    checked={this.state.isChecked}
                    onPress={this.toggleCheckbox}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    marginTop: 80,
                    borderRadius: 18,
                    backgroundColor: '#3E54AC',
                  }}>
                  <Button
                    title="Save Address"
                    onPress={() => {
                      this.setState({show: false});
                    }}
                  />
                </View>
              </View>
            </View>
          </Modal>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
  },
  label: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 70,
    height: 70,
    marginRight: 10,
    borderWidth: 0,
    borderRadius: 5,
    borderColor: '#2f4f4f',
  },
});
export default Address;
