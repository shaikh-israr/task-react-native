import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
} from 'react-native';
import Header from '../components/Header';

const screenWidth = Dimensions.get('screen').width;
const AllProducts = ({navigation}) => {
  const [datalist, setDataList] = useState([
    {
      id: '1',
      image: 'https://4.imimg.com/data4/CA/YT/MY-4818930/ladies-dresses.jpg',
    },
    {
      id: '2',
      image:
        'https://img3.exportersindia.com/product_images/bc-full/2020/4/6882978/ladies-dress-1587529771-5384216.jpeg',
    },

    {
      id: '4',
      image:
        'https://sointheknow.com/wp-content/uploads/2019/04/20-best-mens-clothing-stores-online-featuredimage.jpg',
    },
    {
      id: '5',
      image:
        'https://www.fashionbeans.com/wp-content/uploads/2020/03/hunters-race-MYbhN8KaaEc-unsplash.jpg',
    },
  ]);
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Products For You</Text>
      <View style={styles.productContainer}>
        {datalist.map(n => {
          return (
            <TouchableOpacity
              key={n.id}
              style={styles.boxContainer}
              onPress={() => navigation.navigate('SingleProduct')}>
              <Image
                source={{uri: n.image}}
                style={styles.productImage}
                key={Math.random().toString(36).substr(2, 6)}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default AllProducts;

const styles = StyleSheet.create({
  title: {
    margin: 10,
    fontSize: 19,
    fontWeight: '700',
    color: '#000',
  },
  productContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: screenWidth,
  },
  boxContainer: {
    width: '47%',
    height: 200,
    padding: 5,
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 5,
  },
  productImage: {
    width: '100%',
    height: '80%',
    borderRadius: 8,
  },
});
