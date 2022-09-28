import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
import FormInput from "../../Form/FormInput";
import FormInput4 from "../../Form/FormInput4";
import FormButton from "../../Form/FormButton";
import 'localstorage-polyfill';
import { ScrollView } from 'react-native-gesture-handler';
import {LinearGradient} from 'expo-linear-gradient';

const SearchPatient = (props) => {
 
  return (
<LinearGradient colors={['#d7dbdd', '#9035db','#d7dbdd']} style={styles.body}>
    <ScrollView>
      <View style={styles.card}>
      <View style={tailwind(' items-center ')} >
        <Text style={tailwind('text-gray-700 font-bold py-2 text-xl')}>Examen radiologique et para-clinique:</Text>
      

        <View style={styles.row}>
        <FormButton title="Ajouter un Examen radiologique et para-clinique" onPress={() => { props.navigation.navigate("ExamenRadioParaCli") }} />
          <FormButton title="Liste des Examens radiologiques et para-cliniques" onPress={() => props.navigation.navigate("examenRadioParaCliList")} />

        </View>
        <FormButton title="Retour" onPress={() => { props.navigation.navigate("DiagnosticDetails") }} />
        </View>
      </View>
    </ScrollView>
    </LinearGradient>
  );
};

const mapStateToProps = (state) => ({
});
const mapActionToProps = {

};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    padding: 10
  },
  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginLeft: 10,
    marginRight: 10,
    marginTop:70,
    backgroundColor:"white",
    padding: 10,
    flexDirection:'row',
    borderRadius:30,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2193b0',
  },
  
});

export default connect(mapStateToProps, mapActionToProps)(SearchPatient);
