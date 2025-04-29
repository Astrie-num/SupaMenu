import { Image, StyleSheet, Platform, TextInput, TouchableOpacity, View, Text } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {FontAwesome} from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import logo from '../../assets/images/logo2.png';

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FFA500', dark: '#1D3D47' }}
    >

    <View style = {styles.container} >
      <View style={{marginVertical:10}} />
      <ThemedView style={styles.titleContainer}>
        <Image style ={styles.logo} source={logo} />
        <ThemedText type="default">Welcome...</ThemedText>
        <Text>Please fill in the information</Text>

      <View style={{marginVertical:10}}/>

      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <TextInput> 
          <FontAwesome name="user" size={15} color="#000" />Full Name
        </TextInput>

        <TextInput>
          <FontAwesome name="phone" size={15} color="#000" />Phone Number
        </TextInput>

        <TextInput>
          <FontAwesome name="envelope" size={15} color="#000" />Your Email
        </TextInput>

        <TouchableOpacity >
          <Text  style={{color: '#fff', backgroundColor: '#FFA500'}}>Proceed</Text>
        </TouchableOpacity>

        <View style={{marginVertical:10}} />

        <Text>OR</Text>

        <View style={{marginVertical:10}} />

        <ThemedText>If you have a PMG account</ThemedText>
        <TouchableOpacity>
          <Text style={{color: '#fff', backgroundColor: '#FFA500'}} >
            Sign In
          </Text>
        </TouchableOpacity>

        <ThemedText>Don't have an account?{''}
           <Text
            style={{color:'#FFA500', textDecorationLine:'none'}} 
              // onPress= {() => navigation.navigate('TabTwoScreen')}
              >
                Register
           </Text>
        </ThemedText>
        
      </ThemedView>
    </View>
   </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    // padding:0,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor:'blue',
    // height:70,
    // justifyContent:'flex-start',
    // gap: -20,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    backgroundColor:'red'

  },
  container: {
    padding:0,
    backgroundColor:'black',

  },
  logo:{
    width:450,
    height:50,
    resizeMode:'contain',
    marginRight:10,

  }
});
