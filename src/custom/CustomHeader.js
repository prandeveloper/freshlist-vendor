import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
// import {Icon} from 'react-native-vector-icons/Icon';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomHeader = () => {
  return (
    <View style={styles.HeaderViewMain}>
      <View style={styles.ViewMain1}>
        <View style={styles.iconView}>
          <Ionicons name="arrow-back" color={'#FFF'} size={32} />
        </View>
        <View style={styles.iconView}>
          <Ionicons name="home" color={'#FFF'} size={23} />
        </View>
      </View>
      <View style={styles.ViewMain2}>
        <Text></Text>
      </View>
      <View style={styles.ViewMain3}>
        <View style={styles.iconView}>
          <Ionicons name="search" color={'#FFF'} size={23} />
        </View>
        <View style={styles.iconView}>
          <Ionicons name="notifications" color={'#FFF'} size={23} />
        </View>
        <View style={styles.iconView}>
          <Ionicons name="cart" color={'#FFF'} size={23} />
        </View>
      </View>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  HeaderViewMain: {
    flexDirection: 'row',
    backgroundColor: '#5F0099',
  },
  ViewMain1: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewMain2: {
    flex: 1,
  },
  ViewMain3: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 30,
  },
  iconView: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});
