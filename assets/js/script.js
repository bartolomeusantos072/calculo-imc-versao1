window.addEventListener('load', function() {
    const form = document.querySelector('#formIMC');
    function verificarResultado(event){
        event.preventDefault();
        const resultado = form.querySelector('#resultado');
        const peso = form.querySelector('#peso');
        const altura = form.querySelector('#altura');
            let calculo = calcularIMC(peso.value,altura.value);
    
            
            resultado.innerHTML= ` ${calculo.imc && "Seu IMC é:"+calculo.imc+"."} ${calculo.msg}`;
            resultado.classList.remove(resultado.classList.item[0]);
            resultado.classList.add(calculo.cor);
           
    
    }
    
    form.addEventListener('submit', verificarResultado);
  });





function calcularIMC(peso,altura){
    let imc = (peso/(altura**2)).toFixed(2);

    let mensagem = [ {msg:'entrada invalida',cor:'color-coral'},
    { msg:`magreza grave (menor que 16)`,cor:'color-red'},
    { msg:` magreza moderada (entre 16 e 16},9).`,cor:'color-orangered'},
    { msg:`magreza leve(menor que 16)`,cor:'color-orange'},
    { msg:` peso normal`,cor:'color-green'},
    { msg:` sobrepeso.`,cor:'color-coral'},
    { msg:` obesidade grau 1.`,cor:'color-orange'},
    { msg:` obesidade severa (Grau 2).`,cor:'color-orangered'},
    { msg:` obesidade mórbida (Grau 3).`,cor:'color-red'},
    ]

   
    
    
    if ((Number(peso)< 3.1) && (Number(altura)< 0.4 || Number(altura)> 2.5)){
        return {imc:"", ...mensagem[0]};
    }else{
        
        switch(true){
            case( imc <16) && (imc >15): return {imc, ...mensagem[1]};break;
            case( imc >16) &&( imc < 17): return {imc, ...mensagem[2]};break;
            case( imc >=17) &&( imc < 18.5 ):return {imc, ...mensagem[3]};break;
            case(imc > 18.5 && imc <25): return {imc, ...mensagem[4]};break;
            case( imc >=25) &&( imc < 30 ): return {imc, ...mensagem[5]};break;
            case( imc >=30) &&( imc < 35 ): return {imc, ...mensagem[6]};break;
            case( imc >=35) &&( imc < 40): return {imc, ...mensagem[7]};break;
            case( imc >=40): return {imc, ...mensagem[8]};break;
            default: return {imc, ...mensagem[0]};break;
        }
    }
    
}