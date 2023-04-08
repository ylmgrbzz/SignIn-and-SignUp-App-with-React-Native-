import React from 'react'
import { Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import STYLES from "../../src/styles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import COLORS from "../../src/consts/color";


const SignUpScreen = ({navigation}) => {
  return(
    <SafeAreaView style={STYLES.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={STYLES.topContainer}>
          <Text style={STYLES.textOne}>Merhaba!</Text>
          <Text style={STYLES.textTwo}>Kayıt Olun</Text>
        </View>

        <View style={{marginTop:30, paddingHorizontal:30, alignItems: 'center'}}>
          <View style={STYLES.inputContainer}>
            <MaterialCommunityIcons
              name='account-circle-outline'
              size={30}
              style={STYLES.inputIcon}
            />
            <TextInput
              placeholder='name'
              style={STYLES.input}
            />
          </View>
          <View style={STYLES.inputContainer}>
            <MaterialCommunityIcons
              name='email-outline'
              size={30}
              style={STYLES.inputIcon}
            />
            <TextInput
              placeholder='e-mail'
              style={STYLES.input}
            />
          </View>
          <View style={STYLES.inputContainer}>
            <MaterialCommunityIcons
              name='lock-outline'
              size={30}
              style={STYLES.inputIcon}
            />
            <TextInput
              placeholder='password'
              style={STYLES.input}
            />
          </View>

          <View style={STYLES.btnPrimary}>
            <Text style={STYLES.btnPrimaryText}>KAYIT OLUN</Text>
          </View>

          <View style={STYLES.OrInput}>
            <View style={STYLES.line}></View>
            <Text style={STYLES.OrText}>OR</Text>
            <View style={STYLES.line}></View>
          </View>

          <View style={STYLES.bottomContainer}>
            <View style={STYLES.btnSecondary}>
              <Image style={STYLES.btnImg} source={require("../../src/assets/a.png")}/>
            </View>
            <View style={STYLES.btnSecondary}>
              <Image style={STYLES.btnImg} source={require("../../src/assets/f.png")}/>
            </View>
            <View style={STYLES.btnSecondary}>
              <Image style={STYLES.btnImg} source={require("../../src/assets/g.png")}/>
            </View>
          </View>

          <View style={STYLES.endContainer}>
            <Text style={{color:COLORS.light,fontWeight:'bold'}}>Hesabınız var mı? </Text>
            <TouchableOpacity onPress={()=>navigation.navigate('SignIn')}>
              <Text style={{color:COLORS.primary,fontWeight:'bold'}}>Giriş yapın </Text>
            </TouchableOpacity>
          </View>

        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUpScreen
