window.addEventListener('load', initial);

function initial(){

    let input = document.querySelector('.container input');
    input.addEventListener('input', captureEvent);
} 

function captureEvent(event){
    let input = event.target.value;

    addnumeric(input);
    extenso(input);
}

function addnumeric(input){
    let numeric = document.querySelector('#numeric');
    numeric.value = input;
}

function extenso(input){
    let inputValue = input.toString();
    let resultado = null;

    if(inputValue > 100){
        resultado = calculo(inputValue);
    }else{
        resultado = calculoMenor(inputValue)
    }

    let extenso = document.querySelector("#extenso")
    extenso.value = resultado;

}

function dezen (inputValue, resultado){
    let cent = inputValue.slice(1, -1);

    if(cent == 9) resultado = resultado + 'noventa';  
    if(cent == 8) resultado = resultado + 'oitenta'; 
    if(cent == 7) resultado = resultado + 'setenta';
    if(cent == 6) resultado = resultado + 'sessenta';    
    if(cent == 5) resultado = resultado + 'cinquenta';    
    if(cent == 4) resultado = resultado + 'quarenta';    
    if(cent == 3) resultado = resultado + 'trinta';    
    if(cent == 2) resultado = resultado + 'vinte';    
    return resultado;
}

function unidade(inputValue, resultado){   
    let un = inputValue.slice(2);

    if(un == 9) resultado = resultado + ' e nove';
    if(un == 8) resultado = resultado + ' e oito';
    if(un == 7) resultado = resultado + ' e sete';
    if(un == 6) resultado = resultado + ' e seis';  
    if(un == 5) resultado = resultado + ' e cinco'; 
    if(un == 4) resultado = resultado + ' e quatro';
    if(un == 3) resultado = resultado + ' e trez';   
    if(un == 2) resultado = resultado + ' e dois';
    if(un == 1) resultado = resultado + ' e um'; 
    return resultado;
}

function unidadeMenor(inputValue, resultado){   
    let un = inputValue.slice(1);

    if(un == 9) resultado = resultado + ' e nove';
    if(un == 8) resultado = resultado + ' e oito';
    if(un == 7) resultado = resultado + ' e sete';
    if(un == 6) resultado = resultado + ' e seis';  
    if(un == 5) resultado = resultado + ' e cinco'; 
    if(un == 4) resultado = resultado + ' e quatro';
    if(un == 3) resultado = resultado + ' e trez';   
    if(un == 2) resultado = resultado + ' e dois';
    if(un == 1) resultado = resultado + ' e um'; 
    return resultado;
}

function espeCif(inputValue, resultado){   
    let especif = inputValue.slice(1);

    if(especif == 19) resultado = resultado + ' desenove';
    if(especif == 18) resultado = resultado + ' dessoito';
    if(especif == 17) resultado = resultado + ' desessete';
    if(especif == 16) resultado = resultado + ' desesseis';  
    if(especif == 15) resultado = resultado + ' quinze'; 
    if(especif == 14) resultado = resultado + ' quatorze';
    if(especif == 13) resultado = resultado + ' treze';   
    if(especif == 12) resultado = resultado + ' doze';
    if(especif == 11) resultado = resultado + ' onze';
    if(especif == 10) resultado = resultado + ' dez';
    if(especif == 9) resultado = resultado + ' nove';
    if(especif == 8) resultado = resultado + ' oito';
    if(especif == 7) resultado = resultado + ' sete';
    if(especif == 6) resultado = resultado + ' seis';  
    if(especif == 5) resultado = resultado + ' cinco'; 
    if(especif == 4) resultado = resultado + ' quatro';
    if(especif == 3) resultado = resultado + ' trez';   
    if(especif == 2) resultado = resultado + ' dois';
    if(especif == 1) resultado = resultado + ' um'; 
    return resultado;
}

function dezenMenor (inputValue, resultado){
    let cent = inputValue.slice(0, 1);

    if(cent == 9) resultado = resultado + 'noventa';  
    if(cent == 8) resultado = resultado + 'oitenta'; 
    if(cent == 7) resultado = resultado + 'setenta';
    if(cent == 6) resultado = resultado + 'sessenta';    
    if(cent == 5) resultado = resultado + 'cinquenta';    
    if(cent == 4) resultado = resultado + 'quarenta';    
    if(cent == 3) resultado = resultado + 'trinta';    
    if(cent == 2) resultado = resultado + 'vinte';
    if(cent == 1) resultado = resultado + 'dez';    
    return resultado;
}

function menorVinte(inputValue){
    if(inputValue.slice(1) < 20){

        let final = espeCif(inputValue, resultado);
        resultado = final
        return resultado
    }else{
        let resultUni = unidade(inputValue, resulDeze)
        resultado = resultUni 
        return resultado
    }
}

function espeCifTeste(inputValue){   
    let especif = inputValue;
    let resultado = " ";
    if(especif == 19) resultado = ' desenove';
    if(especif == 18) resultado = ' dessoito';
    if(especif == 17) resultado = ' desessete';
    if(especif == 16) resultado = ' desesseis';  
    if(especif == 15) resultado = ' quinze'; 
    if(especif == 14) resultado = ' quatorze';
    if(especif == 13) resultado = ' treze';   
    if(especif == 12) resultado = ' doze';
    if(especif == 11) resultado = ' onze';
    if(especif == 10) resultado = ' dez';
    if(especif == 9) resultado = ' nove';
    if(especif == 8) resultado =  'oito';
    if(especif == 7) resultado = ' sete';
    if(especif == 6) resultado = ' seis';  
    if(especif == 5) resultado = ' cinco'; 
    if(especif == 4) resultado = ' quatro';
    if(especif == 3) resultado = ' trez';   
    if(especif == 2) resultado = ' dois';
    if(especif == 1) resultado = ' um'; 
    return resultado;
}

function menorVinteTeste(inputValue){
    let final = espeCifTeste(inputValue, resultado);
    resultado = final
    return resultado  
}

function calculoMenor(inputValue){
    let dez = inputValue.slice(0)
    let resultado = '';
    if(dez >= 20){
        resultado = dezenMenor(inputValue, resultado);
        numeric = unidadeMenor(inputValue, resultado)
        return numeric

    }else{
        resutado = menorVinteTeste(inputValue);
        return resutado
    }  
}

function calculo (inputValue){
    if(inputValue.slice(0, 1) == 9){
        resultado = "Novecentos e ";
        let resulDeze = dezen(inputValue, resultado);
        
        menorVinte(inputValue)
       
    }

    if(inputValue.slice(0, 1) == 8){
        resultado = "Oitocento e ";
        let resulDeze = dezen(inputValue, resultado);
        
        if(inputValue.slice(1) < 20){

            let final = espeCif(inputValue, resultado);
            resultado = final
            return resultado
        }else{
            let resultUni = unidade(inputValue, resulDeze)
            resultado = resultUni 
            return resultado
        }
    }

    if(inputValue.slice(0, 1) == 7){
        resultado = "Setecentos e ";
        let resulDeze = dezen(inputValue, resultado);
        
        if(inputValue.slice(1) < 20){

            let final = espeCif(inputValue, resultado);
            resultado = final
            return resultado
        }else{
            let resultUni = unidade(inputValue, resulDeze)
            resultado = resultUni 
            return resultado
        }
    }

    if(inputValue.slice(0, 1) == 6){
        resultado = "Seissentos e ";
        let resulDeze = dezen(inputValue, resultado);
        
        if(inputValue.slice(1) < 20){

            let final = espeCif(inputValue, resultado);
            resultado = final
            return resultado
        }else{
            let resultUni = unidade(inputValue, resulDeze)
            resultado = resultUni 
            return resultado
        }
    }

    if(inputValue.slice(0, 1) == 5){
        resultado = "Quinhentos e ";
        let resulDeze = dezen(inputValue, resultado);
        
        if(inputValue.slice(1) < 20){

            let final = espeCif(inputValue, resultado);
            resultado = final
            return resultado
        }else{
            let resultUni = unidade(inputValue, resulDeze)
            resultado = resultUni 
            return resultado
        }
    }

    if(inputValue.slice(0, 1) == 4){
        resultado = "Quatrocentos e ";
        let resulDeze = dezen(inputValue, resultado);
        
        if(inputValue.slice(1) < 20){

            let final = espeCif(inputValue, resultado);
            resultado = final
            return resultado
        }else{
            let resultUni = unidade(inputValue, resulDeze)
            resultado = resultUni 
            return resultado
        }
    }

    if(inputValue.slice(0, 1) == 3){
        resultado = "Trezentos e ";
        let resulDeze = dezen(inputValue, resultado);
        
        if(inputValue.slice(1) < 20){

            let final = espeCif(inputValue, resultado);
            resultado = final
            return resultado
        }else{
            let resultUni = unidade(inputValue, resulDeze)
            resultado = resultUni 
            return resultado
        }
    }

    if(inputValue.slice(0, 1) == 2){
        resultado = "Duzentos e ";
        let resulDeze = dezen(inputValue, resultado);
        
        if(inputValue.slice(1) < 20){

            let final = espeCif(inputValue, resultado);
            resultado = final
            return resultado
        }else{
            let resultUni = unidade(inputValue, resulDeze)
            resultado = resultUni 
            return resultado
        }
    }

    if(inputValue.slice(0, 1) == 1){
        resultado = "Cento e ";
        let resulDeze = dezen(inputValue, resultado);
        
        if(inputValue.slice(1) < 20){

            let final = espeCif(inputValue, resultado);
            resultado = final
            return resultado
        }else{
            let resultUni = unidade(inputValue, resulDeze)
            resultado = resultUni 
            return resultado
        }
    }
}




