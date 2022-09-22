import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../Form/FormButton";
import * as actions from "../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
//import 'localstorage-polyfill';
import { ScrollView } from 'react-native-gesture-handler';
import RadioGroup from 'react-native-radio-buttons-group';
import {LinearGradient} from 'expo-linear-gradient';


const AddAntecendentsMedicaux = (props) => {
  const [nextPath, setNextPath] = useState("PathRespChronique")

  var handleAntecedentChange = (data) => {
    if (data[0].selected) {
      setNextPath("PathRespChronique")
    }
    else if (data[1].selected) {
      setNextPath("Cardiopathies")

    }
    else if (data[2].selected) {
      setNextPath("TrRythCardiaque")
    }
    else if (data[3].selected) {
      setNextPath("HTA")
    }
    else if (data[4].selected) {
      setNextPath("Diabete")
    }
    else if (data[5].selected) {
      setNextPath("InsRenaleChro")
    }
    else if (data[6].selected) {
      setNextPath("AVC")
    }
    else if (data[7].selected)
      setNextPath("Retinopathie")
    else if (data[8].selected)
      setNextPath("ATCDchir")
    else if (data[9].selected)
      setNextPath("Grossesse")
    else if (data[10].selected)
      setNextPath("PriseAINS")
    else if (data[11].selected)
      setNextPath("Immunosuppreseur")
    else if (data[12].selected)
      setNextPath("AutresATCD")




  }



  return (
<LinearGradient colors={['#d7dbdd', '#d7dbdd']} style={styles.body}>
    <ScrollView>


      <View style={tailwind(' items-center ')} >
        <Text style={tailwind('text-gray-700 font-bold py-2 text-xl text-center')}>Antécédents medicaux:{props.patientList["generalInformation"]["nom"] + " " + props.patientList["generalInformation"]["prenom"]}</Text>


        <View style={tailwind("py-8")} >
          <RadioGroup radioButtons={[
            {
              label: 'Pathologie respiratoire chronique ?',
              color: '#9035db',

            },
            {
              label: 'Cardiopathies ?',
              color: '#9035db',
            },
            {
              label: 'Trouble du rythme cardiaque ?',
              color: '#9035db',
            },
            {
              label: 'HTA ?',
              color: '#9035db',
            },
            {
              label: 'Diabète ?',
              color: '#9035db',
            },
            {
              label: 'Insuffisance rénale chronique ?',
              color: '#9035db',
            },
            {
              label: 'AVC ?',
              color: '#9035db',
            },
            {
              label: 'Rétinopathie ?',
              color: '#9035db',
            },
            {
              label: 'ATCD chirugicaux ?',
              color: '#9035db',
            },
            {
              label: 'Grossesse en cours ?',
              color: '#9035db',
            },
            {
              label: "Prise récente d'AINS ?",
              color: '#9035db',
            },
            {
              label: 'Traitement immunosuppresseur ?',
              color: '#9035db',
            },
            {
              label: 'Autres ATCD ?',
              color: '#9035db',
            },
          ]}
            //flexDirection='row'
            style={tailwind('')}
            onPress={handleAntecedentChange}

          />







        </View>


        <View style={styles.row}>
          <FormButton title="Retour" onPress={() => { props.navigation.navigate("AntecendentsMedicaux") }} />
          <FormButton title="Suivant" onPress={() => { props.navigation.navigate(nextPath) }} />


        </View>

      </View>
    </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
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

  patientList: state.medicalService.patientList
});
const mapActionToProps = {

};

export default connect(mapStateToProps, mapActionToProps)(AddAntecendentsMedicaux);
