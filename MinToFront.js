
const popFront= (arr,indice)=>{
    for(let i=indice;i<arr.length;i++){
        arr[i]=arr[i+1];
    }
    arr.pop()
    return arr
}

const pushFront= (arr,val,indice)=>{
    for(let i=arr.length;i>indice;i--){
        arr[i]=arr[i-1];
    }
    arr[indice]=val;
    return arr 
}

const minToFront= (matriz)=>{
    let min=0
    for(let i=0; i<matriz.length;i++){
        if(matriz[i]<matriz[min]){
            min=i
        }
    }
    val=matriz[min]
    matriz=popFront(matriz,min)
    matriz=pushFront(matriz,val,0)
    console.log(matriz)

    return matriz
}


let A= [4,2,1,3,5];
console.log(`Matriz: ${A}`)
A=minToFront(A)
console.log(`Matriz cambiada: ${A}`)