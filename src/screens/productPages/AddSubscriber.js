import {
    View,
    Text,
    SafeAreaView,
    StatusBar,
    ScrollView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
  } from 'react-native';
  import React, {useState} from 'react';
  import LinearGradient from 'react-native-linear-gradient';
  import styles from '../LoginStyle';
  import CustomHeader from '../../custom/CustomHeader';
  
  const AddSubscriber = ({navigation}) => {
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
                <Text style={styles.vendorText}>Add Subscriber</Text>
              </View>
            </View>
            <View>
              <View style={myStyle.vendorView}>
                <Text style={styles.vendorText}>Customer Details</Text>
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
  
  export default AddSubscriber;
  
  const myStyle = StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    vendorView: {
      marginVertical: 10,
      marginHorizontal: 30,
    },
  });
  