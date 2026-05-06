document.write('Bonjour tout le monde...')

//variable
let nombre1 = 10
const pi = 3.14
let nom = 'capital'

console.log(nombre1)
console.log(pi)

document.write('</br>'+ nombre1)
document.write('</br>'+ pi)
document.write('</br>'+ nom)

//tableau
const capital = ["Conakry", "Dakar", "Paris"]
const valeur = [1,2,3,4,5]

document.write('</br>' + capital[0])
document.write('</br>' + capital[1])
document.write('</br>' + capital[2])

//objet
const personne = {
    nom: 'Diané',
    prenom: 'Odia',
    age: 20
}

document.write('</br>' + personne.nom)
document.write('</br>' + personne.prenom)
document.write('</br>' + personne.age)

//condition
if(personne.nom == 'Diané'){
    document.write('</br>' + 'OUI')
}
else if(personne.prenom == 'Odia'){
    document.write('</br>' + 'OUI')
}
else{
    document.write('</br>' + 'NON')
}
//Boucle
for(let i=0; i<10; i++){
    document.write('</br>' + i)
}