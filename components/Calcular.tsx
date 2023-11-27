import { useRef, useState } from 'react';

enum Operadores {
    somar, resetar, multiplicar, dividir 
}

export const useCalculadora = () => {
    
    const [ numeroAnterior, setNumeroAnterior ] = useState('0');
    const [ numero, setNumero ] = useState('0');

    const ultimaOperacao = useRef<Operadores>()


    const limpar = () => {
        setNumero('0');
        setNumeroAnterior('0');
    }

    const apresentarNumero = ( numeroTexto: string ) => {

        // Não repetir o ponto
        if( numero.includes('.') && numeroTexto === '.' ) return;

        if ( numero.startsWith('0') || numero.startsWith('-0') ) {

            // Ponto decimal
            if ( numeroTexto === '.' ) {
                setNumero( numero + numeroTexto );
                
            // Verificar se é outro zero e tem um ponto
            } else if( numeroTexto === '0' && numero.includes('.')  ) {
                setNumero( numero + numeroTexto );

                // Verificar se é diferente de zero e não tem ponto
            } else if( numeroTexto !== '0' && !numero.includes('.') ) {
                setNumero( numeroTexto );

                // Evitar 0000.0
            } else if( numeroTexto === '0' && !numero.includes('.') ) {
                setNumero( numero );
            } else {
                setNumero( numero + numeroTexto ); 
            }

        } else {
            setNumero( numero + numeroTexto );
        }
    }

    const positivoNegativo = () => {
        if ( numero.includes('-') ) {
            setNumero( numero.replace('-', '') );
        } else {
            setNumero( '-' + numero );
        }
    }

    const btnDelete = () => {
        
        let negativo = '';
        let numeroTemp = numero;
        if ( numero.includes('-') ) {
            negativo = '-';
            numeroTemp = numero.substr(1);
        }

        if ( numeroTemp.length > 1 ) {
            setNumero( negativo + numeroTemp.slice(0,-1) );
        } else {
            setNumero('0');
        }
    }

    const trocarNumPeloAnterior = () => {
        if( numero.endsWith('.') ) {
            setNumeroAnterior( numero.slice(0,-1) );
        } else {
            setNumeroAnterior( numero );
        }
        setNumero('0');
    }


    const btnDividir = () => {
        trocarNumPeloAnterior();
        ultimaOperacao.current = Operadores.dividir;
    }

    const btnMultiplicar = () => {
        trocarNumPeloAnterior();
        ultimaOperacao.current = Operadores.multiplicar;
    }

    const btnReset = () => {
        trocarNumPeloAnterior();
        ultimaOperacao.current = Operadores.resetar;
    }

    const btnSomar = () => {
        trocarNumPeloAnterior();
        ultimaOperacao.current = Operadores.somar;
    }

    const calcular = () => {

        const num1 = Number( numero );
        const num2 = Number( numeroAnterior );

        switch ( ultimaOperacao.current ) {
            case Operadores.somar:
                setNumero( `${ num1 + num2 }` );
                break;

            case Operadores.resetar:
                setNumero( `${ num2 - num1 }` );
                break;

            case Operadores.multiplicar:
                setNumero( `${ num1 * num2 }` );
                break;

            case Operadores.dividir:
                setNumero( `${ num2 / num1 }` );
                break;

        }

        setNumeroAnterior( '0' );
    }


    return {
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
    }

}