import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { Botao } from './BotaoCalcular';

import { useCalculadora } from './Calcular';


export const CalculadoraTela = () => {

    const {
        numeroAnterior,
        numero,
        limpar,
        positivoNegativo,
        btnDelete,
        btnDividir,
        apresentarNumero,
        btnMultiplicar,
        btnReset,
        btnSomar,
        calcular,
    } = useCalculadora();


    return (
        <View style={ styles.calculadoraContainer }>
            {
                ( numeroAnterior !== '0') && (
                    <Text style={ styles.resultadoPequeno }>{ numeroAnterior }</Text>
                )
            }
            
            <Text 
                style={ styles.resultado }
                numberOfLines={ 1 }
                adjustsFontSizeToFit
            >
                { numero }
            </Text>


            {/* Linha de botões */}
            <View style={ styles.linha }>
                <Botao texto="C" cor="#9B9B9B" operacao={ limpar } />
                <Botao texto="+/-" cor="#9B9B9B" operacao={ positivoNegativo } />
                <Botao texto="del" cor="#9B9B9B" operacao={ btnDelete } />
                <Botao texto="/" cor="#FF9427" operacao={ btnDividir } />
            </View>

            {/* Linha de botões */}
            <View style={ styles.linha }>
                <Botao texto="7" operacao={ apresentarNumero } />
                <Botao texto="8" operacao={ apresentarNumero } />
                <Botao texto="9" operacao={ apresentarNumero } />
                <Botao texto="X" cor="#FF9427" operacao={ btnMultiplicar } />
            </View>

            {/* Linha de botões */}
            <View style={ styles.linha }>
                <Botao texto="4" operacao={ apresentarNumero } />
                <Botao texto="5" operacao={ apresentarNumero } />
                <Botao texto="6" operacao={ apresentarNumero } />
                <Botao texto="-" cor="#FF9427" operacao={ btnReset } />
            </View>

            {/* Linha de botões */}
            <View style={ styles.linha }>
                <Botao texto="1" operacao={ apresentarNumero } />
                <Botao texto="2" operacao={ apresentarNumero } />
                <Botao texto="3" operacao={ apresentarNumero } />
                <Botao texto="+" cor="#FF9427" operacao={ btnSomar } />
            </View>

            {/* Linha de botões */}
            <View style={ styles.linha }>
                <Botao texto="0" operacao={ apresentarNumero } largura />
                <Botao texto="." operacao={ apresentarNumero } />
                <Botao texto="=" cor="#FF9427" operacao={ calcular } />
            </View>

        </View>
    )
}