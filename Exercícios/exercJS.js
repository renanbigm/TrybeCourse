function twoToOne(s1, s2){
    let conc = s1 + s2;              // soma das duas strings
    let newA = conc.split("");       // transforma cada elemento da string em um array
    let mySet = [...new Set(newA)];  // retira os elementos repetidos e mantem a forma de array 
    let sequence = mySet.sort();     // poe os elementos em sequência
    let result = sequence.join("");  // transforma o array em string.
    return result;
}
console.log(twoToOne("LetrasIguais", "LetrasDiferentes"))