window.addEventListener('load', initial);

function initial(){
    let input = document.querySelector('.container input');
    input.addEventListener('input', captureEvent);
}

function captureEvent(event){
    let input = event.target.value;
    let inputExtenso = document.querySelector('#extenso');
    addnumeric(input);

    inputExtenso.value = extenso(input) 
}

function addnumeric(input){
    let numeric = document.querySelector('#numeric');
    numeric.value = input;
}

function extenso(value){
    let resultado;
    if(value > 99){
        resultado = numeros(value)
        if(value[1] + value[2] < 20){
            resultado = resultado + menorVinte(value[1] + value[2])           
        }      
    }else{
        if(value > 9){
            if(value < 20){
                resultado = menorVinte(value) 
            }else{
                resultado = numeros(value)
            }
        }else{
            resultado = unidade(value)
        }   
    }
    return resultado
}

function numeros(value){
    let resultado = '';
    for(let i = 0; i < value.length; i++){
        if(i == 0){
            resultado = resultado + centena(value[i])
        }
        if(i == 1){
            resultado = resultado + dezena(value[i])
        }
        if(i == 2){
            resultado = resultado + unidade(value[i])
        }
    }
    return resultado
}

function numeros(value){
    let resultado = '';
    for(let i = 0; i < value.length; i++){
        if(i == 0){
            resultado = resultado + dezena(value[i])
        }
        if(i == 1){
            resultado = resultado + unidade(value[i])
        }
    }
    return resultado
}

function centena(value){
    let resultado
    if(value == 9) resultado =' Novessentos e';  
    if(value == 8) resultado =' Oitocentos e'; 
    if(value == 7) resultado =' Setessentos e';
    if(value == 6) resultado = " Seissentos e";   
    if(value == 5) resultado =' Quinhentos e';   
    if(value == 4) resultado =' Quatrocentos e';   
    if(value == 3) resultado =' Trecentos e';    
    if(value == 2) resultado =' Duzentos e';
    if(value == 1) resultado =' Cento e';
    return resultado;
}

function dezena(value){
    let resultado = "";
    if(value == 9) resultado =' noventa e';  
    if(value == 8) resultado =' oitenta e'; 
    if(value == 7) resultado =' setenta e';
    if(value == 6) resultado = " sessenta e";   
    if(value == 5) resultado =' cinquenta e';   
    if(value == 4) resultado =' quarenta e';   
    if(value == 3) resultado =' trinta e';    
    if(value == 2) resultado =' vinte e';
    return resultado;
}

function unidade(value){
    let resultado = '';
    if(value == 9) resultado =' nove';  
    if(value == 8) resultado =' oito'; 
    if(value == 7) resultado =' sete';
    if(value == 6) resultado = " seis";   
    if(value == 5) resultado =' cinco';   
    if(value == 4) resultado =' quatro';   
    if(value == 3) resultado =' tres';    
    if(value == 2) resultado =' dois';
    if(value == 1) resultado =' um';
    if(value == 0) resultado =' zero';
    return resultado;
}

function menorVinte(value){   
    let resultado = '';
    if(value == 19) resultado = ' desenove';
    if(value == 18) resultado = ' dessoito';
    if(value == 17) resultado = ' desessete';
    if(value == 16) resultado = ' desesseis';  
    if(value == 15) resultado = ' quinze'; 
    if(value == 14) resultado = ' quatorze';
    if(value == 13) resultado = ' treze';   
    if(value == 12) resultado = ' doze';
    if(value == 11) resultado = ' onze';
    if(value == 10) resultado = 'dez'   
    return resultado;
}



