import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect} from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App(){

  const [estado, setarEstado] = useState('leitura');
  const [anotacao, setarAnotacao] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum commodo lorem id feugiat. Pellentesque vehicula eros urna. Ut erat nunc, mattis eu ultrices ut, mattis quis augue. Integer a placerat ante. Nunc in neque libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas leo risus, accumsan eu dui in, semper commodo neque. Mauris viverra arcu a rhoncus luctus. Fusce porta consequat neque sit amet pulvinar. Maecenas ut risus ligula. Aliquam non viverra arcu. Sed enim magna, vestibulum quis consectetur bibendum, fringilla a massa. Morbi non leo luctus, fringilla mauris vitae, facilisis nulla. Nunc varius tellus a nulla volutpat, non vehicula enim posuere. Cras vel ligula at dui tincidunt aliquam. Vestibulum at lorem commodo, tincidunt neque sed, eleifend urna.');

  if(estado == 'leitura'){

    return(
      <View style={{flex: 1}}>
        <StatusBar style="light"/>
        <View style={style.header}><Text style={{textAlign: 'center', color: 'white', marginTop: 15, fontSize:20, fontStyle: 'italic',}}>Anotações</Text></View>

        <View style={{padding: 20}}><Text style={style.anotacao}>{anotacao}</Text></View>

        <TouchableOpacity onPress={() => setarEstado('atualizando')} style={style.btnAnotacao}><Text style={style.btnAnotacaoTexto}>+</Text></TouchableOpacity>
      </View>
    );
  }else if(estado == 'atualizando'){
    return(
    <View style={{flex: 1}}>
        <StatusBar style="light"/>
        <View style={style.header}><Text style={{textAlign: 'center', color: 'white', marginTop: 15, fontSize:20, fontStyle: 'italic',}}>Anotações</Text></View>

        

        <TouchableOpacity onPress={() => setarEstado('leitura')} style={style.btnSalvar}><Text style={style.btnSalvarTexto}>salvar</Text></TouchableOpacity>
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