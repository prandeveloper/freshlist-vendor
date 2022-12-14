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
import styles from '../LoginStyle';
import CustomHeader from '../../custom/CustomHeader';
import product from '../../assets/imageProduct.png';

const ProductList = ({navigation}) => {
  const [data, setData] = useState([
    {
      id: 1,
      name: 'Mark Doe',
      status: 'active',
      image: 'https://bootdey.com/img/Content/avatar/avatar7.png',
    },
    {
      id: 2,
      name: 'Clark Man',
      status: 'active',
      image: 'https://bootdey.com/img/Content/avatar/avatar6.png',
    },
    {
      id: 3,
      name: 'Jaden Boor',
      status: 'active',
      image: 'https://bootdey.com/img/Content/avatar/avatar5.png',
    },
    {
      id: 3,
      name: 'Jaden Boor',
      status: 'active',
      image: 'https://bootdey.com/img/Content/avatar/avatar5.png',
    },
  ]);
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <StatusBar backgroundColor={'#5F0099'} />

      <CustomHeader />

      <LinearGradient
        start={{x: 1, y: 0}}
        end={{x: 0, y: 1}}
        colors={['#ffffcc', '#ccffff', '#ffffcc']}
        style={styles.mainGradient}>
        <ScrollView>
          <View style={myStyle.container}>
            <View style={myStyle.vendorView}>
              <Text style={styles.vendorText}>Product List</Text>
            </View>
          </View>
          <View>
            {data.map(item => (
              <TouchableOpacity key={item.id}>
                <View style={myStyle.row}>
                  <View style={myStyle.mainViewOne}>
                    <Image source={product} style={myStyle.image} />
                  </View>
                  <View style={myStyle.mainViewTwo}>
                    <View style={myStyle.rightLeftView}>
                      <View style={myStyle.topNameLeft}>
                        <Text style={myStyle.leftText}>{item.name}</Text>
                      </View>
                      <View style={myStyle.topNameRight}>
                        <Text style={myStyle.rightText}>Edit</Text>
                      </View>
                    </View>
                    <View style={myStyle.rightLeftView}>
                      <View style={myStyle.topNameLeft}>
                        <Text style={myStyle.qtyText}>500ml</Text>
                      </View>
                    </View>
                    <View style={myStyle.rightLeftView}>
                      <View style={myStyle.topNameRight}>
                        <Text style={[myStyle.unitText, {color: '#333333'}]}>
                          Rs.{' '}
                        </Text>
                        <Text style={myStyle.unitText}>50</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.mainView2}>
            <TouchableOpacity
              style={myStyle.registerTouch}
              onPress={() => navigation.navigate('StockList')}>
              <LinearGradient
                start={{x: 1, y: 0}}
                end={{x: 0, y: 1}}
                colors={['#9F1692', '#F67062']}
                style={styles.registerGradiant}>
                <Text style={styles.registerText}>SAVE</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default ProductList;

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
  //sdsdsdsdsdsdsd
  row: {
    flexDirection: 'row',
    marginVertical: 8,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#FFF',
  },
  mainViewOne: {
    flex: 1,
  },
  mainViewTwo: {
    flex: 3,
  },
  image: {
    width: '100%',
    height: 100,
    margin: 5,
  },
  rightLeftView: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  topNameLeft: {
    flex: 1,
    justifyContent: 'center',
  },
  topNameRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  leftText: {
    color: '#333333',
    fontWeight: '600',
    fontFamily: 'Poppins',
  },
  rightText: {
    color: '#333333',
    fontWeight: '400',
  },
  qtyText: {
    color: '#333333',
    fontWeight: '400',
  },
  unitText: {
    color: '#9700CC',
    fontWeight: '700',
    fontSize: 18,
  },
  registerTouch: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
