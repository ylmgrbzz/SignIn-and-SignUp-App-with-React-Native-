import {StyleSheet} from 'react-native';
import COLORS from '../consts/color'
import color from "../consts/color";

const STYLES = StyleSheet.create({
  container: {
    flex:1,
    paddingHorizontal:20,
    backgroundColor:COLORS.pink,
    alignSelf:'stretch',
  },
  topContainer:{
    flexDirection:'column',
    marginTop:50,
    marginBottom:70,
    paddingHorizontal:30,
    justifyContent:'center',
    alignItems: 'center'
  },
  textOne:{
    fontWeight:'bold',
    fontSize:22,
    color:COLORS.light,
    shadowOpacity:0.2
  },
  textTwo:{
    fontWeight:'bold',
    fontSize:17,
    color:COLORS.primary,
    shadowOpacity:0.2
  },
  inputContainer:{
    flexDirection:'row',
    borderWidth:0.5,
    borderColor:COLORS.pink,
    shadowColor:COLORS.primary,
    shadowOpacity:10,
    shadowRadius:5,
    borderRadius:30,
    marginTop:20,
    height:50,
    alignItems:'center'
  },
  inputIcon: {
    paddingLeft:10,
    color:COLORS.primary
  },
  input:{
    color:COLORS.light,
    paddingLeft:20,
    flex:1,
    fontSize:16
  },
  btnPrimary:{
    backgroundColor:COLORS.primary,
    shadowColor:COLORS.secondary,
    shadowOpacity:10,
    height:40,
    width:170,
    marginTop:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:30
  },
  btnPrimaryText: {
    color:COLORS.pink,
    fontWeight:'bold',
    fontSize:15
  },
  OrInput:{
    marginTop:40,
    marginVertical:20,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  line:{
    height:1,
    width:30,
    backgroundColor:COLORS.light
  },
  OrText:{
    fontWeight:'bold',
    marginHorizontal:5,
    shadowOpacity:0.2,
    color:COLORS.light
  },
  bottomContainer:{
    marginTop:30,
    paddingHorizontal:30,
    flexDirection:'row',
    shadowOpacity:0.2,
  },
  btnSecondary:{
    height:50,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5,
    flexDirection:'row'
  },
  btnImg:{
    width:20,
    height:20,
    marginLeft:5
  },
  endContainer:{
    flexDirection:'row',
    alignItems:'flex-end',
    justifyContent:'center',
    marginTop:60,
    marginBottom:20,
  }
})

export default STYLES
