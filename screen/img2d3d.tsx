import * as React from 'react';
import {useState} from 'react'
import { Image } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import { launchImageLibrary } from 'react-native-image-picker';
import { View, Text, Button, SafeAreaView, ImageBackground, StyleSheet, TouchableOpacity, PermissionsAndroid } from 'react-native';
function Tool1({props}:any) {
  const [img,setimg] = useState('')
  const [img2,setimg2] = useState('')
  var convert = false;
  
  const requestCameraPermission = async () =>
  {
    try{
      const checkpermission = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
      if(checkpermission === PermissionsAndroid.RESULTS.GRANTED)
      {
        const result:any = await launchImageLibrary({mediaType:'photo'})
        setimg(result.assets[0].uri);
        
        convert=true;
      }
      else console.log('false')
    } catch (error)
    {
      console.log(error)
    }
  }
  function convertimg()
  {
    setimg2(img);
  }

  
    return (
      <View >
        <ImageBackground source={require('../asset/background.jpeg')} style={{ width:'100%',
      height:'100%',}}>
        <View style={styles.container} >
        <View style={styles.box1}>
          <ImageBackground source={require('../asset/img.jpg') }style={{width:'70%',height:'70%'
        ,marginTop:'10%',marginLeft:'5%',position:'absolute'}} resizeMode='contain'>
          </ImageBackground>
          <Image source={{uri:img}}style={{width:'55%',height:'52%'
        ,marginTop:'10%',marginLeft:'3%'}}resizeMode='contain'>

          </Image>
          <View style={{width:'30%',height:'20%',borderColor:'white'
        ,borderWidth:1,borderRadius:10,marginLeft:'11%',bottom:'10%',position:'absolute'}}>
          <TouchableOpacity style={{width:'100%',height:'100%',alignItems:'center',justifyContent:'center' }} onPress={()=>requestCameraPermission()}>
      <Text style={styles.text}>Upload</Text>
</TouchableOpacity>
          </View>
          <View style={{right:'2%',top:'10%',position:'absolute',width:'40%',height:'40%',
        borderWidth:1,borderColor:'white',padding:'2%'}}>
            <Text style={styles.note}>Note:* it is recomended to choose photos with blue or white font </Text>
          </View>
          <View style={{position:'absolute',width:'40%',height:'26%',borderWidth:1,borderColor:'white',borderRadius:10,right:'2%',bottom:'10%'}} >
            <TouchableOpacity style={{width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}} onPress={()=>convertimg()}>
              <Text style={styles.text}>Convert</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* box2 -------------------------------------*/}
        
        </View>
        <View style ={styles.container}>
        <View style={styles.box2}>
        <ImageBackground source={require('../asset/img.jpg') }style={{width:'70%',height:'70%'
        ,marginTop:'10%',marginLeft:'5%',position:'absolute'}} resizeMode='contain'>
          </ImageBackground>
          <Image source={{uri:img2}}style={{width:'55%',height:'52%'
        ,marginTop:'10%',marginLeft:'3%'}}resizeMode='contain'>

          </Image>
          <View style={{width:'30%',height:'20%',borderColor:'white'
        ,borderWidth:1,borderRadius:10,marginLeft:'11%',bottom:'10%',position:'absolute'}}>
          <TouchableOpacity style={{width:'100%',height:'100%',alignItems:'center',justifyContent:'center' }}>
      <Text style={styles.text}>Dowload</Text>
</TouchableOpacity>
          </View>
          </View>

        </View>
        
      </ImageBackground>
      </View>
    );
  }
 const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    paddingTop:'2%',
    flex:1
  },
  box1:{
    width:'90%',
    height:'75%',
    borderWidth:1,
    borderColor:'white',
  },
  text:{
    color:'white',
    fontSize:20,
    
  },
  note:{
    color:'white',
    fontSize:18,
    fontStyle: 'italic'
  },
  box2:{
    width:'90%',
    height:'75%',
    borderWidth:1,
    borderColor:'white',
  },
 }) 
export default Tool1; 