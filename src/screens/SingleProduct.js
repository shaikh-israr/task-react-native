import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../components/Header';

const imageData =
  'https://www.fashionbeans.com/wp-content/uploads/2020/03/hunters-race-MYbhN8KaaEc-unsplash.jpg';
const SingleProduct = () => {
  return (
    <View>
      <Header />
      <ScrollView>
        <Image source={{uri: imageData}} style={{height: 270}} />
        <View style={{margin: 10}}>
          <Text style={{fontSize: 18, fontWeight: '600', color: '#000'}}>
            Nostrud
          </Text>
          <Text>
            Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </Text>
          <Text style={{color: 'red', fontSize: 16, marginTop: 10}}>
            Rs. 2000
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '600',
              color: '#000',
              marginTop: 10,
            }}>
            Return not available
          </Text>
          <Text>
            Item like innerwear, socs, certain accresoories and some high-value
            fragile items do not come under our return policy.
          </Text>
          <View
            style={{
              marginTop: 15,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                width: 150,
                alignItems: 'center',
                justifyContent: 'center',
                height: 40,
                borderColor: '#d3d3d3',
                borderRadius: 4,
              }}>
              <Text style={{fontWeight: '500'}}>WISHLIST</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                width: 150,
                alignItems: 'center',
                justifyContent: 'center',
                height: 40,
                backgroundColor: 'red',
                borderColor: 'red',
                borderRadius: 4,
              }}>
              <Text style={{fontWeight: '500', color: '#fff'}}>ADD TO BAG</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SingleProduct;

const styles = StyleSheet.create({});
