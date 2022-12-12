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
import camera from '../assets/image59.png';

const VendorRegisterPhoto = ({navigation}) => {
  const [text, setText] = useState('');
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
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
            <View style={myStyle.vendorView}>
              <Text style={styles.vendorText}>VENDOR PHOTO</Text>
            </View>
            <View style={myStyle.container}>
              <View style={styles.mainView}>
                <View style={myStyle.cameraView1}>
                  <Image source={camera} style={myStyle.camera1} />
                </View>
              </View>
            </View>
          </View>
          <View>
            <View style={myStyle.vendorView}>
              <Text style={styles.vendorText}>ID PROOF</Text>
            </View>
            <View style={myStyle.container}>
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
                  placeholder="Name"
                  placeholderTextColor={'gray'}
                  value={text}
                  onChangeText={setText}
                />
              </View>

              <View style={styles.mainView}>
                <View style={{flexDirection: 'row'}}>
                  <View style={myStyle.cameraView2}>
                    <Image source={camera} style={myStyle.camera2} />
                    <View style={myStyle.frontView}>
                      <Text style={myStyle.frontText}>FRONT</Text>
                    </View>
                  </View>

                  <View style={myStyle.cameraView2}>
                    <Image source={camera} style={myStyle.camera2} />
                    <View style={myStyle.frontView}>
                      <Text style={myStyle.frontText}>BACK</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View>
            <View style={myStyle.vendorView}>
              <Text style={styles.vendorText}>PAN CARD</Text>
            </View>
            <View style={myStyle.container}>
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
                <View style={{flexDirection: 'row'}}>
                  <View style={myStyle.cameraView2}>
                    <Image source={camera} style={myStyle.camera2} />
                    <View style={myStyle.frontView}>
                      <Text style={myStyle.frontText}>FRONT</Text>
                    </View>
                  </View>

                  <View style={myStyle.cameraView2}>
                    <Image source={camera} style={myStyle.camera2} />
                    <View style={myStyle.frontView}>
                      <Text style={myStyle.frontText}>BACK</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View>
            <View style={myStyle.vendorView}>
              <Text style={styles.vendorText}>BANK DETAILS</Text>
            </View>
            <View style={myStyle.container}>
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
                  placeholder="Name"
                  placeholderTextColor={'gray'}
                  value={text}
                  onChangeText={setText}
                />
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
                  placeholder="Name"
                  placeholderTextColor={'gray'}
                  value={text}
                  onChangeText={setText}
                />
              </View>
              <View style={styles.mainView}>
                <View style={myStyle.cameraView1}>
                  <Image source={camera} style={myStyle.camera1} />
                </View>
              </View>
            </View>
          </View>

          <View style={myStyle.container}>
            <View style={styles.mainView2}>
              <TouchableOpacity
                style={styles.registerTouch}
                onPress={() => navigation.navigate('RegisterComplete')}>
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default VendorRegisterPhoto;

const myStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  vendorView: {
    marginVertical: 10,
    marginHorizontal: 30,
  },
  camera1: {},
  cameraView1: {
    borderColor: '#428BC1',
    borderWidth: 2,
    paddingHorizontal: 100,
    paddingVertical: 50,
    borderStyle: 'dotted',
  },
  camera2: {
    height: 60,
    width: 60,
  },
  cameraView2: {
    borderColor: '#428BC1',
    borderWidth: 2,
    paddingHorizontal: 35,
    paddingVertical: 50,
    borderStyle: 'dotted',
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  frontView: {
    top: 30,
  },
  frontText: {
    color: '#333333',
    fontSize: 18,
  },
});
