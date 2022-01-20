import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Men',
    image:
      'https://image.made-in-china.com/2f0j00gSYtCKIdgbrT/Men-Dress-Cotton-Latest-Shirt-Designs-for-Men-Hot-Sale-Men-Clothing.jpg',
  },
  {
    id: '2',
    title: 'Women',
    image:
      'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/12894708/2020/12/3/15de92f0-3a4c-470c-9e1d-b5526f4335171606978803351anaynaWomenNavyBlueWhitePrintedStraightKurta1.jpg',
  },
  {
    id: '3',
    title: 'kids',
    image:
      'https://s3.ap-south-1.amazonaws.com/tcsonline-live/catalog/category/land-boys_2.jpg',
  },
  {
    id: '4',
    title: 'Beauty',
    image:
      'https://img.ti-media.net/wp/uploads/sites/46/2021/06/GettyImages-1249466095-1-920x518.jpg',
  },
  {
    id: '5',
    title: 'Winter Wear',
    image:
      'https://5.imimg.com/data5/DE/XV/MY-41207706/ladies-winter-wear-jacket-500x500.jpg',
  },
  {
    id: '6',
    title: 'Home',
    image:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/home-decor-ideas-sfshowcaselivingroom-03-1585257771.jpg',
  },
];

const Item = ({value, passvalue}) => (
  <TouchableOpacity onPress={() => passvalue.page.navigate('AllProducts')}>
    <View style={styles.item}>
      <Image source={{uri: value.image}} style={styles.imgestyl} />
      <Text style={styles.title}>{value.title}</Text>
    </View>
  </TouchableOpacity>
);

const CatProduct = page => {
  const renderItem = ({item}) => <Item value={item} passvalue={page} />;
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default CatProduct;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  item: {
    margin: 10,
    alignItems: 'center',
  },
  imgestyl: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
});
