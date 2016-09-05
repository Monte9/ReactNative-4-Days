'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  NativeModules,
  TouchableHighlight,
  Navigator,
  Platform
} from 'react-native';

class ReactNative4Days extends Component{
  _viewImage() {
    if(Platform.OS === 'ios') {
      NativeModules.JTSImagePreview.showImage('http://wallpaperhd4k.com/wp-content/uploads/2015/10/Ferrari-and-Girl-1920x1200-005.jpg');
    } else {
      return <View>This module is only available on iOS</View>
    }
  }

  render() {
    return(
      <Navigator
        initialRoute={{ title: 'Awesome Scene', index: 0 }}
        renderScene={(route, navigator) =>
          <View style={styles.container}>
            <TouchableHighlight onPress={()=>this._viewImage()} underlayColor='white'>
              <Text style={styles.welcome}>
                Click here to view image! (iOS Only)
              </Text>
            </TouchableHighlight>
          </View>
        }
        navigationBar={
           <Navigator.NavigationBar
             routeMapper={{
               LeftButton: (route, navigator, index, navState) =>
                { return (<Text style={{padding: 15}}>Cancel </Text>); },
               RightButton: (route, navigator, index, navState) =>
                 { return (<Text style={{padding: 15}}>Done </Text>); },
               Title: (route, navigator, index, navState) =>
                 { return (<Text style={{padding: 10, fontSize: 17}}>Awesome Nav Bar </Text>); },
             }}
             style={{backgroundColor: 'grey'}}
           />
        }
      />
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
    backgroundColor: 'white',
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
