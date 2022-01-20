import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity>
          <Feather name="menu" size={20} color="#000" />
        </TouchableOpacity>
        <View style={styles.barIcons}>
          <TouchableOpacity>
            <AntDesign name="search1" size={20} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="bells" size={20} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="hearto" size={20} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity>
            <SimpleLineIcons name="handbag" size={20} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 55,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  innerContainer: {
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userIcon: {
    height: 35,
    width: 30,
  },
  barIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 150,
  },
});
