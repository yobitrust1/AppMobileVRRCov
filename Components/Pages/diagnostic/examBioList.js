import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../../Form/FormButton";
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import { ScrollView,View, Text, StyleSheet } from 'react-native';
import 'localstorage-polyfill';
import {  TouchableOpacity } from 'react-native-gesture-handler';
import {LinearGradient} from 'expo-linear-gradient';


const AntecedentsList = (props) => {
  const [display, setDiplay] = useState(false);
  useEffect(() => {
    const test =props.patientList.examBio;
  })
    const test =props.patientList.examBio;
    console.log(test)
    var handleModifier = (item,date) => {
     
      localStorage.setItem("type", item)
      localStorage.setItem("datePr",date)
      props.navigation.navigate("examBioModif")

    }
  
    var handleRemove = (item,date) => {
      var values = {
        "type": item,
        "datePr":date
      }
      props.delOneExamenBio(props.patientList["cin"], values)
    }

  return (
<LinearGradient style={styles.BigContainer} colors={['#d7dbdd', '#9035db','#d7dbdd']} >

    <ScrollView>
      <View style={styles.card }>
      <View style={styles.card1 }> 
       </View>
      <View style={styles.card1 } >
       <View><Text style={tailwind('text-gray-700 font-bold py-2 text-xl text-center')}>Examen biologique:
       </Text>
        <View>
          
    {test!=null&& Object.keys(test).map((setNom, key) => (<View> 
      <Text style={tailwind('text-center')}>{setNom}</Text>
    <View >
      {test[setNom]!=null&& Object.keys(test[setNom]).map((key1, key2) => (<View> 
       


        <View>{key1=="gbs" &&test[setNom][key1]!=null&& 
          <View>{Object.keys(test[setNom][key1]).map((key2, key3) => (
          <View> 
            <View><Text style={tailwind('text-center')}>{test[setNom][key1][key2]["datePr"]}</Text></View>   
            <TouchableOpacity onPress={() => handleModifier("NFS",test[setNom][key1][key2]["datePr"])}>
            <View><Text style={tailwind('text-teal-600 text-center  px-8')}>Modifier ?</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { handleRemove("NFS",test[setNom][key1][key2]["datePr"]) }}>
            <View><Text style={tailwind('text-teal-600 text-center  px-8')}>Supprimer ?</Text></View>
            </TouchableOpacity>
          </View>))}
        </View>   
      }</View>
      <View>{key1=="creats" &&test[setNom][key1]!=null&& 
          <View>{Object.keys(test[setNom][key1]).map((key2, key3) => (
          <View> 
            <View><Text style={tailwind('text-center')}>{test[setNom][key1][key2]["datePr"]}</Text></View>   
            <TouchableOpacity onPress={() => handleModifier("BilanRenal",test[setNom][key1][key2]["datePr"])}>
            <View><Text style={tailwind('text-teal-600 text-center  px-8')}>Modifier ?</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { handleRemove("BilanRenal",test[setNom][key1][key2]["datePr"]) }}>
            <View><Text style={tailwind('text-teal-600 text-center  px-8')}>Supprimer ?</Text></View>
            </TouchableOpacity>
          </View>))}
        </View>  
      }</View> 
      <View>{key1=="bilirus" &&test[setNom][key1]!=null&& 
          <View>{Object.keys(test[setNom][key1]).map((key2, key3) => (
          <View> 
            <View><Text style={tailwind('text-center')}>{test[setNom][key1][key2]["datePr"]}</Text></View>   
            <TouchableOpacity onPress={() => handleModifier("BilanHepa",test[setNom][key1][key2]["datePr"])}>
            <View><Text style={tailwind('text-teal-600 text-center  px-8')}>Modifier ?</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { handleRemove("BilanHepa",test[setNom][key1][key2]["datePr"]) }}>
            <View><Text style={tailwind('text-teal-600 text-center  px-8')}>Supprimer ?</Text></View>
            </TouchableOpacity>
          </View>))}
        </View>  
      }</View> 
        <View>{key1=="phs" &&test[setNom][key1]!=null&& 
          <View>{Object.keys(test[setNom][key1]).map((key2, key3) => (
          <View> 
            <View><Text style={tailwind('text-center')}>{test[setNom][key1][key2]["datePr"]}</Text></View>   
            <TouchableOpacity onPress={() => handleModifier("GDSA",test[setNom][key1][key2]["datePr"])}>
            <View><Text style={tailwind('text-teal-600 text-center  px-8')}>Modifier ?</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { handleRemove("GDSA",test[setNom][key1][key2]["datePr"]) }}>
            <View><Text style={tailwind('text-teal-600 text-center  px-8')}>Supprimer ?</Text></View>
            </TouchableOpacity>
          </View>))}
        </View>  
      }</View> 
      <View>{key1=="naks" &&test[setNom][key1]!=null&& 
          <View>{Object.keys(test[setNom][key1]).map((key2, key3) => (
          <View> 
            <View><Text style={tailwind('text-center')}>{test[setNom][key1][key2]["datePr"]}</Text></View>   
            <TouchableOpacity onPress={() => handleModifier("Ionogra",test[setNom][key1][key2]["datePr"])}>
            <View><Text style={tailwind('text-teal-600 text-center  px-8')}>Modifier ?</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { handleRemove("Ionogra",test[setNom][key1][key2]["datePr"]) }}>
            <View><Text style={tailwind('text-teal-600 text-center  px-8')}>Supprimer ?</Text></View>
            </TouchableOpacity>
          </View>))}
        </View>  
      }</View> 
      <View>{key1=="pathss" &&test[setNom][key1]!=null&& 
          <View>{Object.keys(test[setNom][key1]).map((key2, key3) => (
          <View> 
            <View><Text style={tailwind('text-center')}>{test[setNom][key1][key2]["datePr"]}</Text></View>   
            <TouchableOpacity onPress={() => handleModifier("AutreBilan",test[setNom][key1][key2]["datePr"])}>
            <View><Text style={tailwind('text-teal-600 text-center  px-8')}>Modifier ?</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { handleRemove("AutreBilan",test[setNom][key1][key2]["datePr"]) }}>
            <View><Text style={tailwind('text-teal-600 text-center  px-8')}>Supprimer ?</Text></View>
            </TouchableOpacity>
          </View>))}
        </View>  
      }</View> 
      



      </View>))}
    </View> 
  </View>
    
        ))
}
  </View>
        <View style={styles.row}>
          <FormButton title="Retour" onPress={() => props.navigation.navigate("DiagnosticDetails")} />

        </View>

        </View>
      </View>
      <View style={styles.ExtraSpaceDown}>
      </View></View>
    </ScrollView>
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
    backgroundColor:'#fff',
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
    
    backgroundColor:'#fff',
    marginRight:'2.5%',
    marginLeft:'10%',
    marginVertical:'5%',
},
  RightBox:{
    flex:1,
    backgroundColor:'#fff',
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
  card:{
    justifyContent:'center',
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
    alignItems: 'center'

  },
  card1:{marginRight: 100,
    justifyContent: 'center', alignItems: 'center',
  },
});
const mapStateToProps = (state) => ({
  patientList: state.medicalService.patientList,
});
const mapActionToProps = {
  delOneExamenBio: actions.delOneExamenBio
};


export default connect(mapStateToProps, mapActionToProps)(AntecedentsList);
