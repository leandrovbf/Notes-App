import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const body = (props) => {

        return(
            <View>
                <Text>{props.texto}</Text>
                <Button title={props.titulo}></Button>
            </View>
        );
}
export default Body;
