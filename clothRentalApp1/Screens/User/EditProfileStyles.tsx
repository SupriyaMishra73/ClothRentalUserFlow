import {StyleSheet} from 'react-native';
import React from 'react';
const style = StyleSheet.create({
  container: {
    width: 400,
    height: 800,
    backgroundColor: '#ECF2FF',
  },

  cardStyle: {
    // paddingBottom: 15,
    // marginTop: 0,
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 10,
    // margin: 20,
    // marginRight: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  text: {
    // padding: 5,
    marginLeft: 25,

    color: 'blue',
    fontSize: 20,
    fontFamily: 'poppins',
    fontWeight: '900',
  },

  input: {
    backgroundColor: '#ECF2FF',
    marginTop: 20,
    margin: 40,
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
  },
  btnfield: {
    alignItems: 'center',

    width: 160,
    height: 59,

    backgroundColor: '#3E54AC',
    borderRadius: 8,
  },
  btntext: {
    // position: 'absolute',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    top: 14,

    fontWeight: 'bold',
    fontFamily: 'Poppins',
    fontSize: 20,
    color: 'white',
  },
  buttons: {
    flexDirection: 'row',
    // justifyContent: 'space-around',
    // justifyContent: 'space-between',
    justifyContent: 'space-between',
    margin: 15,
  },

  whiteBtn: {
    alignItems: 'center',
    textAlign: 'center',
    width: 300,
    height: 59,
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  btnPText: {
    position: 'absolute',

    left: 120,
    top: 15,
    height: 29,
    width: 104,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    fontSize: 20,
    color: '#3E54AC',
  },
  radioChecked: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'black',
  },
  radioUnchecked: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'black',
  },

  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',

    justifyContent: 'space-around',

    marginHorizontal: 45,
  },
  containerRadio: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
    marginBottom: 10,
  },
  radioButtonText: {
    marginLeft: 8,
    marginRight: 30,
    color: 'blue',
    fontSize: 18,
    fontFamily: 'poppins',
    fontWeight: '900',
  },
  radioText2: {
    marginLeft: 8,
    color: 'blue',
    fontSize: 18,
    fontFamily: 'poppins',
    fontWeight: '900',
  },

  addAddressHeader: {flexDirection: 'row', marginBottom: 20},

  backBtn: {
    marginTop: 15,
    marginLeft: 15,

    flexDirection: 'row',
  },

  btnImage: {width: 24, height: 24, marginTop: 15},

  addAddressText: {
    marginTop: 28,
    marginLeft: 30,
    fontSize: 20,
    color: '#3E54AC',
    fontWeight: 'bold',
  },
});
export default style;
