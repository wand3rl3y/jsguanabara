let valores = [ 9 ,4 ,5 ,6 ,7, 3, 4,]

for(let pos =0 ; pos<valores.length ; pos++){
    console.log(`Pos e ${pos} tem o valor ${valores[pos]}`)
}

// mais simples
console.log("--------------------------------------")
for(let pos in valores){
    console.log(`Pos e ${pos} tem o valor ${valores[pos]}`)
}