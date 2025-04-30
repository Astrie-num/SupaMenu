import { Image, StyleSheet, TextInput, TouchableOpacity, View, Text } from 'react-native';
import { useState, useEffect } from 'react';
import {FontAwesome} from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
const  logo =  require( '../../assets/images/logo2.png');


export default function SignIn() {

  const navigation = useNavigation();
  return (
  
    <View>

      <View style={styles.headerContainer}>
      </View>

      <View style={styles.stepContainer}>
        <View style = {styles.titleContainer}>

        <Image style ={styles.logo} source={logo} />
        <Text style={{color:'#666666', fontSize:20}}>Welcome...</Text>
        <Text style={{color:'gray'}}>Please fill in the information</Text>
        </View>
        <View style={{marginVertical:10}} />
      
        <View style={styles.inputWrapper} >
        <FontAwesome name="user" size={15} color="#999" style={styles.icon} />
        <TextInput style={styles.textInput} placeholder='Full Name' placeholderTextColor="#999">  
        </TextInput>
        </View>
        
        <View style={styles.inputWrapper} >
        <FontAwesome name="phone" size={15} color="#999" style={styles.icon} />
        <TextInput style={styles.textInput} placeholder='Phone Number' placeholderTextColor="#999">
        </TextInput>
        </View>
        
        <View style={styles.inputWrapper} >
        <FontAwesome name="envelope" size={15} color="#999" style={styles.icon}/> 
        <TextInput style={styles.textInput} placeholder='Your Email' placeholderTextColor="#999">
        </TextInput>
        </View>

        <View style={{marginVertical:2}} />

        <TouchableOpacity >
          <Text  style={styles.proceed}>Proceed</Text>
        </TouchableOpacity>

        <View style={{marginVertical:3 }} />

        <Text style={{marginLeft:134, color:'#666666', fontSize:15}}>OR</Text>

        <View style={{marginVertical:2}} />

        <Text style={{marginLeft:70, color:'#666666'}}>If you have a PMG account</Text>
        {/* <View style={{marginVertical:2}} /> */}
        <TouchableOpacity>
          <Text style={styles.signIn} >
            Sign In
          </Text>
        </TouchableOpacity>


    <View style={{marginLeft:60, }} >
        <Text>Don't have an account?{''}
           <Text
            style={styles.register} 
              // onPress= {() => navigation.navigate('TabTwoScreen')}
              >
                Register
           </Text>
        </Text>
        </View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor:'#FFA500',
    height:110,
    zIndex:0
  },

  titleContainer: {
    paddingTop:20,
    display:'flex',
    flexDirection:'column',
    alignItems:'center'

  },

  stepContainer: {
    gap: 8,
    marginBottom: 8,
    backgroundColor:'#fff',
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    marginTop: -20,
    position: 'relative',
    display:'flex',
    flexDirection:'column',
    paddingLeft:30,
    height:700,
    fontFamily:'Poppins-Regular'

  },

  logo:{
    width:450,
    height:50,
    resizeMode:'contain',
    marginRight:10,
  },

  proceed:{
    color: '#fff', 
    backgroundColor: '#FFA500',
    width:300,
    height:40,
    borderRadius:4,
    paddingLeft:120,
    paddingTop:10

  },

  signIn:{
    color: '#fff', 
    backgroundColor: '#FFA500',
    width:300,
    height:40,
    borderRadius:4,
    paddingLeft:120,
    paddingTop:10
  },

  inputWrapper:{
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    // backgroundColor: '#000',
    width:300,
    height: 45,
  },

  icon: {
    marginRight: 8,
  },
  textInput: {
    flex: 1,
    fontSize: 13,
    color: '#999',
  },

  register:{
    color:'#FFA500', 
    // textDecorationLine:'none',
    // marginLeft:200
  }
});
