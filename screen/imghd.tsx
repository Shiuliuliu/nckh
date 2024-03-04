import * as React from 'react';
import { View, Text, Button, SafeAreaView, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
function Tool2({props}:any) {
    return (
      <View >
        <ImageBackground source={require('../asset/background.jpeg')} style={{ width:'100%',
      height:'100%',}}>
        <View style={styles.container} >
        <View style={styles.box1}>
          <ImageBackground source={require('../asset/img.jpg') }style={{width:'70%',height:'70%'
        ,marginTop:'10%',marginLeft:'5%',position:'absolute'}} resizeMode='contain'>
          </ImageBackground>
          <View style={{width:'30%',height:'20%',borderColor:'white'
        ,borderWidth:1,borderRadius:10,marginLeft:'11%',bottom:'10%',position:'absolute'}}>
          <TouchableOpacity style={{width:'100%',height:'100%',alignItems:'center',justifyContent:'center' }}>
      <Text style={styles.text}>Upload</Text>
</TouchableOpacity>
          </View>
          <View style={{right:'2%',top:'10%',position:'absolute',width:'40%',height:'70%',
        borderWidth:1,borderColor:'white',padding:'2%'}}>
            <Text style={styles.text}>Click "Upload" to select an image</Text>
          </View>
          
        </View>
        {/* box2 -------------------------------------*/}
        
        </View>
        <View style ={styles.container}>
        <View style={styles.box2}>
        <ImageBackground source={require('../asset/img.jpg') }style={{width:'70%',height:'70%'
        ,marginTop:'10%',marginLeft:'5%',position:'absolute'}} resizeMode='contain'>
          </ImageBackground>
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

  box2:{
    width:'90%',
    height:'75%',
    borderWidth:1,
    borderColor:'white',
  },
 }) 
export default Tool2; 