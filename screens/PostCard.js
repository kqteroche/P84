import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';

export default class PostCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() =>
          this.props.navigation.navigate('PostScreen', (post = this.props.post))
        }>
        <View style={styles.cardContainer}>
          <View style={styles.authorContainer}>
            <View style={styles.authorImageContainer}>
              <Image
                source={require('../assets/profile_img.png')}
                style={styles.profileImage}></Image>
            </View>
            <View style={styles.authorNameContainer}>
              <Text style={styles.authorNameText}>
                {this.props.post.author}
              </Text>
            </View>
          </View>
          <Image
            source={require('../assets/image_1.jpg')}
            style={styles.postImage}
          />
          <View style={styles.captionContainer}>
            <Text style={styles.captionText}>{this.props.post.caption}</Text>
          </View>
          <View style={styles.actionContainer}>
            <View style={styles.likeButton}>
              <Ionicons name={'heart'} size={RFValue(30)} color={'white'} />
              <Text style={styles.likeText}>12k</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  cardContainer: {
    margin: RFValue(22),
    backgroundColor: 'grey',
    borderRadius: RFValue(20),
    padding: RFValue(20),
  },
  authorContainer: { flex: 3, flexDirection: 'row' },
  authorImageContainer: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: RFValue(100),
  },
  authorNameContainer: { flex: 0.5, justifyContent: 'center' },
  authorNameText: { color: 'black', fontSize: RFValue(30) },
  postImage: {
    marginTop: RFValue(35),
    resizeMode: 'contain',
    width: '100%',
    alignSelf: 'center',
    height: RFValue(300),
  },
  captionContainer: {},
  captionText: { fontSize: 20, color: 'white', paddingTop: RFValue(30) },
  actionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: RFValue(20),
  },
  likeButton: {
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#eb3948',
    borderRadius: RFValue(30),
  },
  likeText: { color: 'white', fontSize: RFValue(25), marginLeft: RFValue(5) },
});
