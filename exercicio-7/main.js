function estaEntre(numero, minimo, maximo, inclusivo){
    if(inclusivo) {
        return (number >= minimo && numero <= maximo)
    }
    return (number > minimo && numero < maximo)
}
