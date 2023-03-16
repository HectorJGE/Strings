
const quitarEspacios= (cadena)=>{
    console.log('\n---Quitar Espacios---')
    console.log(`cadena: ${cadena}`)
    for(let i=0; i<cadena.length;i++){
        cadena.trim()
        if(cadena[i]==" "){
            cadena=cadena.substring(0,i) + cadena.substring(i+1,i.length)
        }
    }
    console.log(cadena)
}

const obtenerDigitos= (cadena)=>{
    console.log('\n---Obtener Digitos---')
    console.log(`cadena: ${cadena}`)
    var numeros=['0','1','2','3','4','5','6','7','8','9']
    var entero='';
    for(let i=0; i<cadena.length;i++){
        if(numeros.includes(cadena[i])){
            entero=entero + cadena[i]
        }
    }
    console.log(entero)
}

const Acronimos= (cadena)=>{
    console.log('\n---Acrónimos---')
    console.log(`cadena: ${cadena}`)
    let aux=cadena.split(" ")
    let acronimo=''
    for(let i=0; i<aux.length;i++){
        acronimo = acronimo + aux[i][0].toUpperCase()
    }
    console.log(acronimo)
}

const ContarNoEspacios= (cadena)=>{
    console.log('\n---Contar No Espacios---')
    console.log(`cadena: ${cadena}`)
    let c=0
    console.log(cadena.length)
    for(let i=0; i<cadena.length;i++){
        
        if((/[a-zA-Z]/).test(cadena[i])){
            c++;
        }
    }
    console.log(c)
}

const QuitarCadenasCortas= (cadenas)=>{
    console.log('\n---Quitar Cadenas Cortas---')
    console.log(`cadenas: ${cadenas}`)
    var tam=cadenas.length
    for(let i=0; i<tam;i++){
        if(cadenas[i].length<tam ){
            cadenas[i]=''
        }
    }
    for(let i=0; i<tam;i++){
        if(cadenas[i]=='' ){
            cadenas.slice(i,1)
        }
    }
    console.log(cadenas)
}

let cadena="Pl ayTha tF u nkyM usi c"
quitarEspacios(cadena)

cadena = "0s1a3y5w7h9a2t4? 6! 8? 0"
obtenerDigitos(cadena)

cadena = "no hay almuerzo gratis. Debes pagar por tu comida"
Acronimos(cadena)

cadena = "Amor, me estás volviendo loca"
ContarNoEspacios(cadena)

let cadenas= ['hola','si','quiero','helado']
QuitarCadenasCortas(cadenas)
