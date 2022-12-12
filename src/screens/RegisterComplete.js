import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styles from './LoginStyle';
import CustomHeader from '../custom/CustomHeader';
import complete from '../assets/complete.png';

const RegisterComplete = ({navigation}) => {
  const [text, setText] = useState('');
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={'#5F0099'} />
      <CustomHeader />
      <LinearGradient
        start={{x: 1, y: 0}}
        end={{x: 0, y: 1}}
        colors={['#ffffcc', '#ccffff', '#ffffcc']}
        style={styles.mainGradient}>
        <View style={myStyle.container}>
          <View style={myStyle.vendorView}>
            <Text style={styles.vendorText}>Vendor Registration</Text>
          </View>
        </View>
        <View>
          <View style={myStyle.container}>
            <View style={myStyle.completeView1}>
              <Image source={complete} />
            </View>
            <View style={myStyle.completeView}>
              <Text style={myStyle.completeText}>
                Your Vendor Registration has been Sucessfully Completed
              </Text>
            </View>
            <View style={[myStyle.completeView, {marginBottom: 30}]}>
              <Text style={myStyle.completeText}>
                We will Notify you Once Approved!
              </Text>
            </View>

            <View style={styles.mainView2}>
              <TouchableOpacity
                style={styles.registerTouch}
                onPress={() => navigation.navigate('ProductList')}>
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
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default RegisterComplete;

const myStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  vendorView: {
    marginVertical: 10,
    marginHorizontal: 30,
  },
  completeView: {
    marginVertical: 10,
  },
  completeText: {
    color: '#3F007E',
    fontSize: 22,
    fontWeight: '600',
    paddingHorizontal: 50,
    textAlign: 'center',
  },
});
