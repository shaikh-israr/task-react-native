import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import CatProduct from '../components/CatProduct';
import Header from '../components/Header';
import ScrollSwiper from '../components/ScrollSwiper';

const imagedata =
  'https://i.pinimg.com/originals/0c/8b/e6/0c8be6d9cccb866dbfed7b87bfdb038b.jpg';

const Home = ({navigation}) => {
  return (
    <View style={styles.contianer}>
      <StatusBar backgroundColor="#00000aaa" />
      <Header />
      <ScrollView>
        <CatProduct page={navigation} />
        <View style={styles.body}>
          <ScrollSwiper page={navigation} />
          <View style={{marginTop: 10}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('AllProducts')}>
              <Image
                source={{uri: imagedata}}
                style={{height: 300, width: '100%'}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    backgroundColor: '#D3D3D3',
  },
  body: {
    marginTop: 10,
    backgroundColor: '#fff',
  },
});
