'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  NativeModules,
  TouchableHighlight
} from 'react-native';

class ReactNative4Days extends Component{
  _viewImage() {
    NativeModules.JTSImagePreview.showImage('http://wallpaperhd4k.com/wp-content/uploads/2015/10/Ferrari-and-Girl-1920x1200-005.jpg');
  }

  render() {
    return(
      <View style={styles.container}>
        <TouchableHighlight onPress={()=>this._viewImage()}>
          <Text style={styles.welcome}>
            Click here to view image!
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default class extends Component{
  constructor() {
    super();
    this.state = {
      show:false
    };
  }

  _onImgPress() {
    this.setState({
      show:false
    })
    this.setState({
      show:true
    })
  }

  render() {
    return(
      <View style={{marginTop:100, alignItems:"center"}}>
        <TouchableHighlight onPress={()=>this._onImgPress()}>
          <Image source={{uri:'http://wallpaperhd4k.com/wp-content/uploads/2015/10/Ferrari-and-Girl-1920x1200-005.jpg'}} style={styles.img}></Image>
        </TouchableHighlight>
        {this.state.show?<ShowImg></ShowImg>:<View></View>}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  img:{
    height: 200,
    width: 300
  },
});

AppRegistry.registerComponent('ReactNative4Days', () => ReactNative4Days);
