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

user1 = new User("1", "Benjamin", "ASSETS\PICTURES\POKEMON\kulbutoke.jpg", 100)
user2 = new User("2", "Rose", "ASSETS\PICTURES\POKEMON\rondoudou.jpg", 200)
user3 = new User("3", "Morgane", "ASSETS\PICTURES\POKEMON\noctali.jpg", 2500)
user4 = new User("4", "Alexandre", "ASSETS\PICTURES\POKEMON\evoli.jpg", 320)
user5 = new User("5", "Yannick", "ASSETS\PICTURES\POKEMON\miaouss.jpg", 201)
user6 = new User("6", "Icham", "ASSETS\PICTURES\POKEMON\dracaufeu.jpg", 122)
user7 = new User("7", "Santiago", "ASSETS\PICTURES\POKEMON\feunard.jpg", 150)
user8 = new User("8", "Elodie", "ASSETS\PICTURES\POKEMON\togepi.jpg", 2510)
user9 = new User("9", "Sarah", "ASSETS\PICTURES\POKEMON\galopa.jpg", 2150)
user10 = new User("10", "Mohammed", "ASSETS\PICTURES\POKEMON\pikachu.jpg", 10)
user11 = new User("11", "Younes", "ASSETS\PICTURES\POKEMON\wolf.jpg", 0)
user12 = new User("12", "Farouk", "ASSETS\PICTURES\POKEMON\carapuce.jpg", 0)
user13 = new User("13", "Nicolas", "ASSETS\PICTURES\POKEMON\bulbizare.jpg", 0)
user14 = new User("14", "Fred", "ASSETS\PICTURES\POKEMON\blastoise.jpg", 0)
user15 = new User("15", "Anastasia", "ASSETS\PICTURES\POKEMON\nymphali.jpg", 0)


const users = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10, user11, user12, user13, user14, user15];
users.forEach(user => {
    tadiv.innerHTML = '${user.score}'
})

function displayScoreTable(players) {
    console.log("Score");
    console.log("----------------");
    users.sort((a, b) => b.score - a.score).forEach(user => console.log(user.showUser()));
}

displayScoreTable(users);