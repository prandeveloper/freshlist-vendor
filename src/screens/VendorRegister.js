import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styles from './LoginStyle';
import CustomHeader from '../custom/CustomHeader';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const VendorRegister = ({navigation}) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [door, setDoor] = useState('');
  const [street, setStret] = useState('');
  const [location, setLocation] = useState('');
  const [city, setCity] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [serviceLocation, setServiceLocation] = useState('');
  const [serviceCity, setServiceCity] = useState('');
  const [servicePincode, setServicePincode] = useState('');
  const [storeddata, setStoreddata] = useState('');

  const getData = async () => {
    try {
      const vendor = await AsyncStorage.getItem('vendorId');
      if (vendor !== null) {
        console.log('success');
        console.log(vendor);
        setStoreddata(vendor);
      }
    } catch (e) {
      console.log('no Value in login');
    }
  };
  useEffect(() => {
    getData();
  }, [storeddata]);

  const submit = () => {
    {
      name !== '' &&
      mobile !== '' &&
      email !== '' &&
      door !== '' &&
      street !== '' &&
      location !== '' &&
      city !== '' &&
      pinCode !== '' &&
      serviceLocation !== '' &&
      serviceCity !== '' &&
      servicePincode !== ''
        ? axios
            .post(`http://3.6.37.16:8000/app/vender_register/${storeddata}`, {
              name: name,
              mobile: mobile,
              email: email,
              door_number: door,
              street: street,
              location: location,
              city: city,
              pincode: pinCode,
              service_location: serviceLocation,
              service_city: serviceCity,
              service_pincode: servicePincode,
            })
            .then(response => {
              console.log(response.data);
              navigation.navigate('VendorRegisterPhoto');
            })
            .catch(error => {
              console.log(error);
            })
        : ToastAndroid.show('Complete All Fields', ToastAndroid.SHORT);
    }
  };

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
              <Text style={styles.vendorText}>Personal Information</Text>
            </View>
            <View style={myStyle.container}>
              <View style={styles.mainView}>
                <TextInput
                  style={styles.input}
                  placeholder="NAME"
                  placeholderTextColor={'gray'}
                  value={name}
                  onChangeText={setName}
                />
              </View>
              <View style={styles.mainView}>
                <TextInput
                  maxLength={10}
                  style={styles.input}
                  placeholder="Mobile Number"
                  placeholderTextColor={'gray'}
                  value={mobile}
                  onChangeText={setMobile}
                  keyboardType="number-pad"
                />
              </View>
              <View style={styles.mainView}>
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  placeholderTextColor={'gray'}
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="number-pad"
                />
              </View>
              <View style={styles.mainView}>
                <TextInput
                  style={styles.input}
                  placeholder="Door Number"
                  placeholderTextColor={'gray'}
                  value={door}
                  onChangeText={setDoor}
                />
              </View>
              <View style={styles.mainView}>
                <TextInput
                  style={styles.input}
                  placeholder="Street"
                  placeholderTextColor={'gray'}
                  value={street}
                  onChangeText={setStret}
                />
              </View>
              <View style={styles.mainView}>
                <TextInput
                  style={styles.input}
                  placeholder="Location"
                  placeholderTextColor={'gray'}
                  value={location}
                  onChangeText={setLocation}
                />
              </View>
              <View style={styles.mainView}>
                <TextInput
                  style={styles.input}
                  placeholder="City"
                  placeholderTextColor={'gray'}
                  value={city}
                  onChangeText={setCity}
                />
              </View>
              <View style={styles.mainView}>
                <TextInput
                  style={styles.input}
                  placeholder="PINCODE"
                  placeholderTextColor={'gray'}
                  value={pinCode}
                  onChangeText={setPinCode}
                  keyboardType="number-pad"
                />
              </View>
            </View>
          </View>
          <View>
            <View style={myStyle.vendorView}>
              <Text style={styles.vendorText}>Service Details</Text>
            </View>
            <View style={myStyle.container}>
              <View style={styles.mainView}>
                <TextInput
                  style={styles.input}
                  placeholder="Location"
                  placeholderTextColor={'gray'}
                  value={serviceLocation}
                  onChangeText={setServiceLocation}
                />
              </View>
              <View style={styles.mainView}>
                <TextInput
                  style={styles.input}
                  placeholder="City"
                  placeholderTextColor={'gray'}
                  value={serviceCity}
                  onChangeText={setServiceCity}
                />
              </View>
              <View style={styles.mainView}>
                <TextInput
                  style={styles.input}
                  placeholder="PINCODE"
                  placeholderTextColor={'gray'}
                  value={servicePincode}
                  onChangeText={setServicePincode}
                  keyboardType="number-pad"
                />
              </View>
            </View>
          </View>
          <View style={myStyle.container}>
            <View style={styles.mainView2}>
              <TouchableOpacity
                style={styles.registerTouch}
                onPress={() => navigation.navigate('VendorRegisterPhoto')}>
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

export default VendorRegister;

const myStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  vendorView: {
    marginVertical: 10,
    marginHorizontal: 30,
  },
});
