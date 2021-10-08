function realToDolar(){
    let value = window.prompt("Insira o valor em Real aqui:")
    let result =  (value / 6.0)
    window.alert (`O Valor, em Dolar é ${result}`)
    return result
}

realToDolar()