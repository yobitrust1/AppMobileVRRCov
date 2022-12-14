import { 
  View, 
  Text, 
  ScrollView, 
  TextInput,
  Platform,
  StyleSheet ,
  StatusBar,
  Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useTheme } from 'react-native-paper';
import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../../Form/FormButton";
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import RadioGroup from 'react-native-radio-buttons-group';
import {LinearGradient} from 'expo-linear-gradient';


const AddAntecendentsMedicaux1 = (props) => {
  const { colors } = useTheme();

  const [nextPath, setNextPath] = useState("PathRespChronique1")

  var handleAntecedentChange = (data) => {
    if (data[0].selected) {
      setNextPath("PathRespChronique1")
    }
    else if (data[1].selected) {
      setNextPath("Cardiopathies1")

    }
    else if (data[2].selected) {
      setNextPath("TrRythCardiaque1")
    }
    else if (data[3].selected) {
      setNextPath("HTA1")
    }
    else if (data[4].selected) {
      setNextPath("Diabete1")
    }
    else if (data[5].selected) {
      setNextPath("InsRenaleChro1")
    }
    else if (data[6].selected) {
      setNextPath("AVC1")
    }
    else if (data[7].selected)
      setNextPath("Retinopathie1")
    else if (data[8].selected)
      setNextPath("ATCDchir1")
    else if (data[9].selected)
      setNextPath("Grossesse1")
    else if (data[10].selected)
      setNextPath("PriseAINS1")
    else if (data[11].selected)
      setNextPath("Immunosuppreseur1")
    else if (data[12].selected)
      setNextPath("AutresATCD1")




  }



  return (
<ScrollView  >
      <View style={styles.container}>
          <StatusBar backgroundColor='#4c1d95' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Antécédents medicaux</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={[styles.footer, {
                backgroundColor: colors.background
            }]}
        >


      <View style={tailwind(' items-center ')} >
        <Text style={tailwind('text-gray-700 font-bold py-2 text-xl text-center')}>Antécédents medicaux</Text>


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
          <FormButton title="Retour" onPress={() => { props.navigation.navigate("Exposition1") }} />
          <FormButton title="Suivant" onPress={() => { props.navigation.navigate(nextPath) }} />
        </View>
        <FormButton title="Pass" onPress={() => { props.navigation.navigate("HabitudesDeVie1") }} />
      </View>
      </Animatable.View>
      </View>
      </ScrollView>
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
    container: {
      flex: 1, 
      backgroundColor: '#4c1d95'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
      color: '#fff',
      fontWeight: 'bold',
      marginTop: Platform.OS === 'ios' ? 0 : 39,
      fontSize: 25
  },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });
const mapStateToProps = (state) => ({

  patientList: state.medicalService.patientList
});
const mapActionToProps = {

};

export default connect(mapStateToProps, mapActionToProps)(AddAntecendentsMedicaux1);
