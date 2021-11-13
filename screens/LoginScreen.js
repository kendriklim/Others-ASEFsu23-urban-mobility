import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  ScrollView
} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import { ScreenHeight } from 'react-native-elements/dist/helpers';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  return (
    <ScrollView contentContainerStyle={styles.container}>
      

      <Image 
      source={require('../assets/woman_loginn.png')}
        style={styles.logo}
      />

<Image 
      source={require('../assets/logo.png')}
        style={styles.logo1}
      />
      {/* <Text style={styles.text}>Walk Saath</Text> */}
      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle="Sign In"
        onPress={() => navigation.navigate("HomeScreen")}
      />

      <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>
{/* 
      {Platform.OS === 'android' ? (
        <View>
          <SocialButton
            buttonTitle="Sign In with Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            onPress={() => fbLogin()}
          />

          <SocialButton
            buttonTitle="Sign In with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => googleLogin()}
          />
        </View>
      ) : null} */}

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.navButtonText}>
          Don't have an account? Create here
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft:20,
    paddingRight:20,
    backgroundColor:"#fceb93",
    height:ScreenHeight,
  },
  logo: {
 
    height: 200,
    width: 390,
    marginBottom:2,
    marginTop:15,
    resizeMode: 'cover',
  },
  logo1: {
 
    height: 100,
    width: 350,
    marginBottom:35,
    marginTop:5,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 28,
    marginBottom:15,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 15,
  },
  navButtonText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#2e64e5',
    marginBottom:2
  },
});