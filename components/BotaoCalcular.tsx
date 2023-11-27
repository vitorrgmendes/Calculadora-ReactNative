import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

interface Props {
    texto:string;
    cor?: string;
    largura?: boolean;
    operacao: ( numeroTexto: string ) => void;
}

export const Botao = ({ texto, cor = '#2D2D2D', largura = false, operacao }: Props) => {
    return (
        <TouchableOpacity
            onPress={ () => operacao( texto ) }
        >
            <View style={{ 
                ...styles.botao ,
                backgroundColor: cor,
                width: ( largura ) ? 180 : 80
            }}>
                <Text style={{ 
                    ...styles.textoBotao,
                    color: ( cor === '#9B9B9B' ) ? 'black' : 'white'
                }}>{ texto }</Text>
            </View>
        </TouchableOpacity>
    )
}