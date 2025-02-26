class Score {
    constructor(username, score, img) {
        this.username = username;
        this.score = score;
        this.img = img;
    }
}

export const scores = [
    {
        username: 'Anastasia',
        score: 2010,
        img: "ASSETS/PICTURES/POKEMON/nymphali.jpg"
    },

    {
        username: 'Benjamin',
        score: 6690,
        img: "ASSETS/PICTURES/POKEMON/kulbutoke.jpg",   
    },

    {
        username: 'Rose',
        score: 3161,
        img: "ASSETS/PICTURES/POKEMON/nymphali.jpg"   
    },

    {
        username: 'Morgane',
        score: 4396,
        img: "ASSETS/PICTURES/POKEMON/noctali.jpg"   
    },

    {
        username: 'Alexandre',
        score: 2902,
        img: "ASSETS/PICTURES/POKEMON/evoli.png"   
    },

    {
        username: 'Yanick',
        score: 0,
        img: "ASSETS/PICTURES/POKEMON/miaouss.png"   
    },

    {
        username: 'Icham',
        score: 0,
        img: "ASSETS/PICTURES/POKEMON/dracaufeu.png"   
    },

    {
        username: 'Elodie',
        score: 4291,
        img: "ASSETS/PICTURES/POKEMON/togepi.jpg"   
    },

    {
        username: 'Sarah',
        score: 250,
        img: "ASSETS/PICTURES/POKEMON/galopa.jpg"   
    },

    {
        username: 'Mohammed',
        score: 2427,
        img: "ASSETS/PICTURES/POKEMON/pikachu.jpg"   
    },

    {
        username: 'Farouk',
        score: 0,
        img: "ASSETS/PICTURES/POKEMON/carapuce.jpg"   
    },

    {
        username: 'Nicolas',
        score: 1542,
        img: "ASSETS/PICTURES/POKEMON/bulbizare.jpg"   
    },

    {
        username: 'Fred',
        score: 2250,
        img: "ASSETS/PICTURES/POKEMON/blastoise.jpg"   
    },

    {
        username: 'Younes',
        score: 6591,
        img: "ASSETS/PICTURES/POKEMON/wolf.png"   
    },

    {
        username: 'Santiago',
        score: 0,
        img: "ASSETS/PICTURES/POKEMON/feunard.jpg"   
    }

];

scores.sort(function (a, b) {
    return b.score - a.score;
});


