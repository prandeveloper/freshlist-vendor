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
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import Feather from 'react-native-vector-icons/Feather';
  import FontAwesome from 'react-native-vector-icons/FontAwesome';
  import Entypo from 'react-native-vector-icons/Entypo';
  
  const DeliveryDetail = ({navigation}) => {
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
      
      
    ]);
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
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
                <Text style={styles.vendorText}>DELIVERY DETAILS</Text>
              </View>
            </View>
  
            {/* SearchBar */}
  
            <View style={myStyle.searchView}>
            <View style={myStyle.searchViewOne}> 
            <Searchbar
                placeholder="Search"
                placeholderTextColor={'gray'}
                onChangeText={onChangeSearch}
                value={searchQuery}
                style={{height:40,backgroundColor:'#fff'}}
              />
              </View>
            <View style={myStyle.searchViewTwo}>
            <TouchableOpacity style={myStyle.serachTouch}>
              <Ionicons name='filter-outline' color={"gray"} size={25}/>
              </TouchableOpacity>
            </View>
             
            </View>
  
  
            {/* Total Subscribers */}
  
            {/* <View style={myStyle.SubscribeView}>
            <View style={myStyle.subsViewOne}> 
            <Text style={myStyle.subsText}>Saravana 2nd Street</Text>
              </View>
            <View style={myStyle.subsViewTwo}>
            
            <TouchableOpacity style={myStyle.subsTouch}>
            <LinearGradient
                  start={{x: 1, y: 0}}
                  end={{x: 1, y: 1}}
                  colors={['#9F1692', '#F67062']}
                  style={myStyle.registerGradiant}>
              <Feather name='plus' color={"#FFF"} size={30}/>
              </LinearGradient>
              </TouchableOpacity>
              
            </View>
            <View style={myStyle.subsViewTwo}>
            <TouchableOpacity style={myStyle.subsTouch1}>
              <FontAwesome name='sliders' color={"#000"} size={30}/>
              </TouchableOpacity>
            </View>
             
            </View> */}
  
            {/* Total Quantity No */}
  
            <View>
              {data.map(item => (
                <TouchableOpacity key={item.id}>
                  <View style={myStyle.row}>
                    <View style={myStyle.mainViewOne}>
                      <Text style={myStyle.unitText}>Aavin Green, 500ml, 1 Noss</Text>
                      <Text style={myStyle.unitText1}>Abishek</Text>
                      <Text style={myStyle.unitText}>Flat No: 1040, 2nd Floor,</Text>
                    </View>
                    {/* <View style={myStyle.mainViewTwo}>
                      <Entypo name='dots-three-horizontal' color={'#6B656B'} size={30}/>
                      <Text style={[myStyle.unitText, {color: '#ED0000'}]}></Text>
                      <Text style={myStyle.unitText1}>
                        ACTIVE
                      </Text>
                    </View> */}
                  </View>
                  
                 
                </TouchableOpacity>
              ))}
            </View>
  
            {/* <View style={styles.mainView2}>
              <TouchableOpacity style={myStyle.registerTouch} onPress={() => navigation.navigate('AddSubscriber')}>
                <LinearGradient
                  start={{x: 1, y: 0}}
                  end={{x: 0, y: 1}}
                  colors={['#9F1692', '#F67062']}
                  style={styles.registerGradiant}>
              <Feather name='plus' color={"#FFF"} size={35}/>
                </LinearGradient>
                <Text style={myStyle.AddText}>Add Subscriber</Text>
              </TouchableOpacity>
            </View> */}
            </ScrollView>
          </LinearGradient>
        
      </SafeAreaView>
    );
  };
  
  export default DeliveryDetail;
  
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
    //SearchBar
    searchView:{
      flex:1,
      flexDirection:'row',
      marginHorizontal:10,
      marginVertical:10,
      borderRadius:20
    },
    searchViewOne:{
      flex:6,
      justifyContent:'center',
      alignItems:'center',
      
    },
    searchViewTwo:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#fff'
    },
    serachTouch:{
      borderColor:'gray',
      borderWidth:1,
      borderRadius:30,
      padding:2,
      alignItems:'center',
      justifyContent:'center',
    },
    //Subuscribe
    SubscribeView:{
      flex:1,
      flexDirection:'row',
      marginHorizontal:10,
      marginVertical:5
    },
    subsViewOne:{
      flex:6,
      justifyContent:'center'
    },
    subsViewTwo:{
       flex:1,
      justifyContent:'center',
      marginHorizontal:5
    },
    subsText:{
      color:'#8000AD',
    fontSize:18,
  fontWeight:'700'
  },
  subsTouch:{
    borderRadius:0,
    alignItems:'center',
      justifyContent:'center',
      
  },
  subsTouch1:{
    borderColor:'#000',
      borderWidth:2,
      borderRadius:5,
      padding:2,
      alignItems:'center',
      justifyContent:'center',
  },
    //sdsdsdsdsdsdsd
    row: {
      flexDirection: 'row',
      marginVertical: 5,
      marginHorizontal: 10,
      borderRadius: 10,
      backgroundColor: '#FFF',
      paddingVertical: 10,
    },
    mainViewOne: {
      flex: 3,
    },
    mainViewTwo: {
      flex: 1,
      alignItems:'flex-end'
    },
  
    unitText: {
      color: '#999999',
      fontWeight: '300',
      fontSize: 18,
      marginVertical:3
    },
    unitText1: {
      color: '#8000AD',
      fontWeight: '600',
      fontSize: 18,
      marginVertical:3
    },
    registerTouch: {
      justifyContent: 'center',
      alignItems: 'center',
      padding:5
    },
    AddText:{
      color:'#000',
      marginVertical:5,
      fontSize:18,
      color:'#666666'
    }
  });
  