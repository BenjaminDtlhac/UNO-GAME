/*
    - Créer une class où je peux intégrer tous les joueurs 
    - Classer les joueurs par score
    - Modifier les scores via un bouton dans l'espace administrateur
    - Relier le tableau administrateur du tableau de présentation




*/




class User {
    constructor(id, name, picture, score) {
        this.id = id;
        this.name = name;
        this.picture = picture;
        this.score = score;

    }

    showUser() {
        console.log(`${this.name}: ${this.score} points`);
    }
}

user1 = new User("1", "Benjamin", "ASSETS\PICTURES\POKEMON\kulbutoke.jpg", 6690)
user2 = new User("2", "Rose", "ASSETS\PICTURES\POKEMON\rondoudou.jpg", 3161)
user3 = new User("3", "Morgane", "ASSETS\PICTURES\POKEMON\noctali.jpg", 4396)
user4 = new User("4", "Alexandre", "ASSETS\PICTURES\POKEMON\evoli.jpg", 2902)
user5 = new User("5", "Yannick", "ASSETS\PICTURES\POKEMON\miaouss.jpg", 0)
user6 = new User("6", "Icham", "ASSETS\PICTURES\POKEMON\dracaufeu.jpg", 0)
user7 = new User("7", "Santiago", "ASSETS\PICTURES\POKEMON\feunard.jpg", 0)
user8 = new User("8", "Elodie", "ASSETS\PICTURES\POKEMON\togepi.jpg", 4291)
user9 = new User("9", "Sarah", "ASSETS\PICTURES\POKEMON\galopa.jpg", 250)
user10 = new User("10", "Mohammed", "ASSETS\PICTURES\POKEMON\pikachu.jpg", 2427)
user11 = new User("11", "Younes", "ASSETS\PICTURES\POKEMON\wolf.jpg", 6591)
user12 = new User("12", "Farouk", "ASSETS\PICTURES\POKEMON\carapuce.jpg", 0)
user13 = new User("13", "Nicolas", "ASSETS\PICTURES\POKEMON\bulbizare.jpg", 1542)
user14 = new User("14", "Fred", "ASSETS\PICTURES\POKEMON\blastoise.jpg", 2250)
user15 = new User("15", "Anastasia", "ASSETS\PICTURES\POKEMON\nymphali.jpg", 2010)


const users = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10, user11, user12, user13, user14, user15];




