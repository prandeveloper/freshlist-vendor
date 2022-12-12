import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import user from '../assets/image63.png';
import styles from './LoginStyle';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const LoginScreen = ({navigation}) => {
  const [text, setText] = useState('');
  const [mobile, setMobile] = useState('');
  const [code, setCode] = useState('');
  const [otp, setOtp] = useState(true);

  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', backgroundColor: '#fff'}}>
      {mobile === '' ? (
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
              <TouchableOpacity style={styles.registerTouch}>
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
                pinCount={4}
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
                onPress={() => navigation.navigate('VendorRegister')}>
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

export default LoginScreen;
