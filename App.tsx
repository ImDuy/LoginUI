/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={style.full_background}>
        <View style={style.login_container}>
          <Text style={style.title}>Đăng Nhập</Text>
          <TextInput placeholder="Tên Đăng nhập" style={style.input_field} />
          <TextInput placeholder="Mật khẩu" style={style.input_field} />
          <TouchableOpacity style={style.login_btn}>
            <Text style={style.btn_text}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  full_background: {
    backgroundColor: '#3498da',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  login_container: {
    backgroundColor: '#d8eaf8',
    borderRadius: 10,
    paddingVertical: 30,
    paddingHorizontal: 25,
    width: 300,
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  input_field: {
    fontSize: 16,
    marginTop: 10,
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#3498da',
    borderRadius: 7,
  },

  login_btn: {
    backgroundColor: '#2096f3',
    width: '100%',
    marginTop: 20,
    paddingVertical: 8,
  },

  btn_text: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
});

export default App;
