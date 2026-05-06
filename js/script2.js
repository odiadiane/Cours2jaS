//les fonctons

function dire_bonjour() {
    document.write("Bonjour les gars" + "</br>")
}
dire_bonjour()

function somme(a, b) {
    document.write(a + b + "</br>")
}
somme(10, 20)

function puissance(a, n) {
    return a ** n
}
document.write(puissance(5, 2) + "</br>")

personne2 = {

    nom: 'condé',
    prenom: 'fode',
    age: 27
}
document.write(personne2.age + "</br>")

class personne {
    constructor(nom, prenom, age) {
        this.nom = nom,
            this.prenom = prenom,
            this.age = age
    }
    AfficherNom() {
        return this.nom
    }
    AfficherPrenom() {
        return this.prenom;
    }
    AfficherAge() {
        return this.age;
    }
}
const p1= new personne('Condé','Ami',66)
const p2= new personne('Bah','Aicha',88)
const p3= new personne('Soumah','Baba',77)
document.write("nom: "+p1.AfficherNom()+"prenom: "+p1.AfficherPrenom()+ "age: "+p1.AfficherAge()+"ans"+"<br/>")
document.write("nom: "+p2.AfficherNom()+"prenom: "+p2.AfficherPrenom()+ "age: "+p2.AfficherAge()+"ans"+"<br/>")
document.write("nom: "+p3.AfficherNom()+"prenom: "+p3.AfficherPrenom()+ "age: "+p3.AfficherAge()+"ans"+"<br/>")

class Universite {
    constructor(nom, quartier, statut) {
        this.nom = nom,
            this.quartier = quartier,
            this.statut = statut
    }
    AfficherNom() {
        return this.nom;
    }
    AfficherQuartier() {
        return this.quartier;
    }
    AfficherStatut() {
        return this.statut;
    }
}
const U1= new Universite('KofiANNAN','NONGO','Privé')
const U2= new Universite('UNC','NONGO','Privé')
const U3= new Universite('UGLC','Sonfonia','Public')
document.write("nom: "+U1.AfficherNom()+"quartier: "+U1.AfficherQuartier()+ "statut: "+U1.AfficherStatut()+"<br/>")
document.write("nom: "+U2.AfficherNom()+"quartier: "+U2.AfficherQuartier()+ "statut: "+U2.AfficherStatut()+"<br/>")
document.write("nom: "+U3.AfficherNom()+"quartier: "+U3.AfficherQuartier()+ "statut: "+U3.AfficherStatut()+"<br/>")

