import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';

export default function App(){

  const [estado, setarEstado] = useState('leitura');
  const [anotacao, setarAnotacao] = useState('');
  function atualizarTexto(){
    setarEstado('leitura');
  }

  if(estado == 'leitura'){

    return(
      <View style={{flex: 1}}>
        <StatusBar style="light"/>
        <View style={style.header}><Text style={{textAlign: 'center', color: 'white', marginTop: 15, fontSize:20, fontStyle: 'italic',}}>Anotações</Text></View>
        {
          (anotacao != '')?
            <View style={{padding: 20}}><Text style={style.anotacao}>{anotacao}</Text></View>
          :
            <View style={{padding: 20}}><Text style={{opacity: 0.3}}>nenhuma Anotação :( </Text></View>
        }

        <TouchableOpacity onPress={() => setarEstado('atualizando')} style={style.btnAnotacao}> 
        {
          (anotacao == '')?
            <Text style={style.btnAnotacaoTexto}>+</Text>
          :
            <Text style={{fontSize:12, textAlign:'center',color:'white',marginTop:16}}>Editar</Text>
        }
        </TouchableOpacity>
        
      </View>
    );
  }else if(estado == 'atualizando'){
    return(
      <View style={{flex: 1}}>
        <StatusBar style="light"/>
        <View style={style.header}><Text style={{textAlign: 'center', color: 'white', marginTop: 15, fontSize:20, fontStyle: 'italic',}}>Anotações</Text></View>

        <TextInput onChangeText={(text) => setarAnotacao(text)} style={{padding: 20, height: 300, textAlignVertical:'top'}} multiline={true} numberOfLines={5} value={anotacao}></TextInput>
        

        <TouchableOpacity onPress={() => atualizarTexto()} style={style.btnSalvar}><Text style={style.btnSalvarTexto}>salvar</Text></TouchableOpacity>
      </View>
      );
  }

  
}

const style = StyleSheet.create({
  header:{
    width: '100%',
    padding: 10,
    backgroundColor: '#069'
  },
  anotacao:{
    fontSize: 15,

  },
  btnAnotacao:{
    position: 'absolute',
    right: 20,
    bottom: 20,
    width:50,
    height: 50,
    backgroundColor: '#069',
    borderRadius:25,
  },
  btnSalvarTexto:{
    color:'white',
    position:'relative',
    textAlign: 'center',
    top: 7,
    fontSize: 20   

  },
  
  btnSalvar:{
    position: 'absolute',
    right: 20,
    bottom: 20,
    width:100,
    height: 50,
    backgroundColor: '#069',
    borderRadius:25,
  
  },
  btnAnotacaoTexto:{
    color:'white',
    position:'relative',
    textAlign: 'center',
    top: 3,
    fontSize: 30   

  },
});