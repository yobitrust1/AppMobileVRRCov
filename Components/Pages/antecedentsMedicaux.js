import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../Form/FormButton";
import * as actions from "../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
import 'localstorage-polyfill';
import { ScrollView } from 'react-native-gesture-handler';
import {LinearGradient} from 'expo-linear-gradient';
const AntecendentsMedicaux = (props) => {



  return (
    <LinearGradient style={styles.BigContainer} colors={['#d7dbdd', '#9035db','#d7dbdd']} >
    <View style={styles.ExtraSpaceUp}>
    </View>
    <View >


      <View style={tailwind(' items-center ')} >
        <Text style={styles.headerText}>Antécédents medicaux:{props.patientList["generalInformation"]["nom"] + " " + props.patientList["generalInformation"]["prenom"]}</Text>
        <View style={tailwind('py-24')}>
          <FormButton title="Ajouter un antécédent medical" onPress={() => { props.navigation.navigate("AddAntecendentsMedicaux") }} />
          <FormButton title="Liste des antécédents medicaux" onPress={() => props.navigation.navigate("AntecedentsList")} />
        </View>


        <FormButton title="Retour" onPress={() => { props.navigation.navigate("PatientDetails") }} />





      </View>
      </View>
      <View style={styles.ExtraSpaceDown}>
    </View>
      </LinearGradient>
  );
};

const styles = StyleSheet.create({
  BigContainer:{
      flex:1,
      backgroundColor:'#fff',
  },
  ExtraSpaceUp:{
    flex:1,
  },
  BoxLayout:{
    flex:3,
    flexDirection:'row',
    //justifyContent:'center',
    alignContent:'center',
    backgroundColor:'#9035db',
    //width:'95%',
    borderRadius:15,
    marginRight:'4%',
    marginLeft:'4%',
  },
  ExtraSpaceDown:{
    flex:1,
    
  },
  LeftBox:{
    flex:1,
    
    backgroundColor:'#9035db',
    marginRight:'2.5%',
    marginLeft:'10%',
    marginVertical:'5%',
},
headerText: {
  fontSize: 30,
  fontWeight: 'bold',
  color: '#f7faf9',
  textAlign: 'center',
  marginTop: 35
},
  RightBox:{
    flex:1,
    backgroundColor:'#9035db',
    marginLeft:'2.5%',
    marginRight:'7%',
    marginVertical:'5%',
  },
  LeftBox1:{
    flex:1,
    backgroundColor:'#fff',
    marginBottom:'15%',
    borderRadius:15,
    elevation:10,
    justifyContent:'center',
    alignItems:'center',
  },
  LeftBox2:{
    flex:1,
    backgroundColor:'#fff',
    borderRadius:15,
    elevation:10,
    justifyContent:'center',
    alignItems:'center',
  },
  RightBox1:{
    flex:3,
    backgroundColor:'#fff',
    marginBottom:'15%',
    borderRadius:15,
    elevation:10,
    justifyContent:'center',
    alignItems:'center',
  },
  RightBox2:{
    flex:1,
    backgroundColor:'#fff',
    borderRadius:15,
    elevation:10,
    justifyContent:'center',
    alignItems:'center',
  },
  title:{
    fontSize:18,
    color:"#696969"
  },
  row: {
    flex: 1,
    flexDirection: "row",
    padding: 10
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2193b0',
  },
});

const mapStateToProps = (state) => ({

  patientList: state.medicalService.patientList,
});
const mapActionToProps = {
  getAllAntecedentsMedicaux: actions.getAllAntecedentsMedicaux,
  removeAntecedentMedical: actions.removeAntecedentMedical
};

export default connect(mapStateToProps, mapActionToProps)(AntecendentsMedicaux);
