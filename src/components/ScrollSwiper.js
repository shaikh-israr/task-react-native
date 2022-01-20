import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';

const widthDimensions = Dimensions.get('screen').width;
const widthScroll = Dimensions.get('window').width;

const ScrollSwiper = page => {
  const scrollRef = React.useRef();

  const [swiperIndex, setSwiperIndex] = useState(0);

  const imageData = [
    'https://i0.wp.com/www.vismay.co.in/public/uploads/editor-images/new%20web%20banner%20dressmaterial.png',
    'https://i.pinimg.com/originals/1a/07/c7/1a07c73dfb7e396e1ee682701ef2b14c.jpg',
    'http://www.indiabazaaronline.com/fashion-juice/wp-content/uploads/2015/04/cotton-salwar-kameez-online.jpg',
    'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/45b59e52916609.5921c4e50a1ac.jpg',
    'https://lh3.googleusercontent.com/proxy/X07H57_UuMrSPcl6KL9uG32SWW0cNCMS9SQ9m3QN_hZ_AgCVZQWAvbwz76WsWpCEu_PFxgxhIdgsnIi4T-ZwDPDPfX4HwMXWdCoU9QH6NHV1Z5Cazn4DgmFUErJMZaQ',
  ];

  return (
    <View style={styles.carouseheight}>
      <Swiper
        showsButtons={false}
        index={swiperIndex}
        loop={true}
        paginationStyle={styles.pagination}
        autoplay={true}>
        {imageData.map((image, i) => {
          return (
            <TouchableOpacity
              key={i}
              activeOpacity={0.8}
              onPress={() => console.log(page.page.navigate('AllProducts'))}>
              <Image source={{uri: image}} style={styles.carouselimage} />
            </TouchableOpacity>
          );
        })}
      </Swiper>
    </View>
  );
};

export default ScrollSwiper;

const styles = StyleSheet.create({
  carouseheight: {height: 180},
  carouselimage: {
    height: 180,
    width: widthDimensions,
    marginTop: 10,
  },
});
