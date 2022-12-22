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
import {Searchbar} from 'react-native-paper';

const ProductGroup = ({navigation}) => {
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
      id: 4,
      name: 'Srick Tree',
      status: 'active',
      image: 'https://bootdey.com/img/Content/avatar/avatar4.png',
    },
    {
      id: 4,
      name: 'Srick Tree',
      status: 'active',
      image: 'https://bootdey.com/img/Content/avatar/avatar4.png',
    },
    {
      id: 4,
      name: 'Srick Tree',
      status: 'active',
      image: 'https://bootdey.com/img/Content/avatar/avatar4.png',
    },
  ]);
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <StatusBar backgroundColor={'#5F0099'} />

      <CustomHeader />

      <ScrollView>
        <LinearGradient
          start={{x: 1, y: 0}}
          end={{x: 0, y: 1}}
          colors={['#ffffcc', '#ccffff', '#ffffcc']}
          style={styles.mainGradient}>
          <View style={myStyle.container}>
            <View style={myStyle.vendorView}>
              <Text style={styles.vendorText}>GROUP</Text>
            </View>
          </View>

          {/* SearchBar */}

          <View style={myStyle.searchView}>
            <Searchbar
              placeholder="Search"
              onChangeText={onChangeSearch}
              value={searchQuery}
            />
          </View>

          {/* Total Quantity No */}

          <View>
            {data.map(item => (
              <TouchableOpacity key={item.id}>
                <View style={myStyle.row}>
                  <View style={myStyle.mainViewOne}>
                    <Text style={myStyle.unitText}>Saravana 1st Street</Text>
                  </View>
                  <View style={myStyle.mainViewTwo}>
                    <Text style={[myStyle.unitText, {color: '#ED0000'}]}>
                      25
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.mainView2}>
            <TouchableOpacity style={myStyle.registerTouch}>
              <LinearGradient
                start={{x: 1, y: 0}}
                end={{x: 0, y: 1}}
                colors={['#9F1692', '#F67062']}
                style={styles.registerGradiant}>
                <Text style={styles.registerText}>SAVE</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductGroup;

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
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#FFF',
    paddingVertical: 30,
  },
  mainViewOne: {
    flex: 5,
  },
  mainViewTwo: {
    flex: 1,
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