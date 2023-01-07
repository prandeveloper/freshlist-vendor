import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import user from '../assets/image63.png';
import styles from './LoginStyle';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUp = ({navigation}) => {
  const [text, setText] = useState('');
  const [mobile, setMobile] = useState('');
  const [code, setCode] = useState('');
  const [otp, setOtp] = useState(false);
  const [storeddata, setStoreddata] = useState('');

  // <========= Set And Get Value==========>

  const _storeData = async _id => {
    try {
      await AsyncStorage.setItem('vendorId', _id);
      console.log('Id Saved');
    } catch (error) {
      console.log('Some error in setting Id');
    }
  };

  const getData = async () => {
    try {
      const vendor = await AsyncStorage.getItem('vendorId');
      if (vendor !== null) {
        console.log('success');
        console.log(vendor);
        setStoreddata(vendor);
        navigation.replace('VendorRegister');
      }
    } catch (e) {
      console.log('no Value in login');
    }
  };
  useEffect(() => {
    getData();
  }, [storeddata]);

  // send OTP =======>
  const sendOtp = () => {
    console.log(text, mobile);
    {
      text !== '' || mobile !== ''
        ? axios
            .post(`http://3.6.37.16:8000/app/vender_sendotp`, {
              name: text,
              mobile: mobile,
            })
            .then(response => {
              console.log(response.data);
              {
                response.data.msg === 'otp send successfully' ||
                response.data.msg == 'otp send successfully'
                  ? setOtp(true)
                  : null;
              }
            })
            .catch(error => {
              console.log(error);
            })
        : Alert.alert('Field Not be Empty');
    }
  };

  // <======Verify OTP ========>
  const verifyOtp = () => {
    axios
      .post(`http://3.6.37.16:8000/app/vender_veryfyotp`, {
        mobile: mobile,
        otp: code,
      })
      .then(response => {
        console.log(response.data);
        console.log(response.data._id);
        if (response.data._id != null) {
          _storeData(response.data._id);
          navigation.replace('VendorRegister');
        } else {
          console.log('no token!');
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', backgroundColor: '#fff'}}>
      {otp === false ? (
        <LinearGradient
          start={{x: 1, y: 0}}
          end={{x: 0, y: 1}}
          colors={['#ffffcc', '#ccffff', '#ffffcc']}
          style={styles.mainGradient}>
          <View style={styles.container}>
            <View style={styles.mainView}>
              <Image source={user} style={styles.userImage} />
            </View>
            <View style={styles.mainView}>
              <Text style={styles.vendorText}>Vendor Registration</Text>
            </View>
            <View style={styles.mainView}>
              <TextInput
                style={styles.input}
                placeholder="Name"
                placeholderTextColor={'gray'}
                value={text}
                onChangeText={setText}
              />
            </View>
            <View style={styles.mainView}>
              <TextInput
                style={styles.input}
                placeholder="Phone Number"
                placeholderTextColor={'gray'}
                value={mobile}
                onChangeText={setMobile}
              />
            </View>

            <View style={styles.mainView2}>
              <TouchableOpacity style={styles.registerTouch} onPress={sendOtp}>
                <LinearGradient
                  start={{x: 1, y: 0}}
                  end={{x: 0, y: 1}}
                  colors={['#9F1692', '#F67062']}
                  style={styles.registerGradiant}>
                  <Text style={styles.registerText}>REGISTER</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <View style={styles.mainView2}>
              <View style={{flexDirection: 'row'}}>
                <Text style={[styles.vendorText, {fontSize: 15}]}>
                  Already Have An Account ?
                </Text>
                <TouchableOpacity style={styles.registerTouch}>
                  <Text style={[styles.vendorText, {color: '#A9198F'}]}>
                    {' '}
                    Login
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </LinearGradient>
      ) : (
        <LinearGradient
          start={{x: 1, y: 0}}
          end={{x: 0, y: 1}}
          colors={['#ffffcc', '#ccffff', '#ffffcc']}
          style={styles.mainGradient}>
          <View style={styles.container}>
            <View style={styles.mainView3}>
              <Text style={styles.vendorText}>Enter OTP</Text>
            </View>

            <View style={styles.mainView3}>
              <OTPInputView
                style={{width: 240, height: 200}}
                pinCount={6}
                code={code}
                onCodeChanged={setCode}
                autoFocusOnLoad
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                onCodeFilled={code => {
                  console.log(`Code is ${code}, you are good to go!`);
                }}
              />
            </View>

            <View style={styles.mainView2}>
              <TouchableOpacity
                style={styles.registerTouch}
                onPress={verifyOtp}>
                <LinearGradient
                  start={{x: 1, y: 0}}
                  end={{x: 0, y: 1}}
                  colors={['#9F1692', '#F67062']}
                  style={styles.registerGradiant}>
                  <Text style={styles.registerText}>CONTINUE</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      )}
    </SafeAreaView>
  );
};

export default SignUp;
