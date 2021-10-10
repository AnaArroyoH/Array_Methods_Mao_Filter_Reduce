const superHeroes = [
    {
        "name": "Batman",
        "publisher": "DC Comics",
        "alter_ego": "Bruce Wayne",
        "first_appearance": "Detective Comics #27",
        "weight": "210"
    },
    {
        "name": "Superman",
        "publisher": "DC Comics",
        "alter_ego": "Kal-El",
        "first_appearance": "Action Comics #1",
        "weight": "220"
    },
    {
        "name": "Flash",
        "publisher": "DC Comics",
        "alter_ego": "Jay Garrick",
        "first_appearance": "Flash Comics #1",
        "weight": "195"
    },
    {
        "name": "Green Lantern",
        "publisher": "DC Comics",
        "alter_ego": "Alan Scott",
        "first_appearance": "All-American Comics #16",
        "weight": "186"
    },
    {
        "name": "Green Arrow",
        "publisher": "DC Comics",
        "alter_ego": "Oliver Queen",
        "first_appearance": "All-American Comics #16",
        "weight": "195"
    },
    {
        "name": "Wonder Woman",
        "publisher": "DC Comics",
        "alter_ego": "Princess Diana",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "165"
    },
    {
        "name": "Blue Beetle",
        "publisher": "DC Comics",
        "alter_ego": "Dan Garret",
        "first_appearance": "Mystery Men Comics #1",
        "weight": "145"
    },
    {
        "name": "Spider Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Peter Parker",
        "first_appearance": "Amazing Fantasy #15",
        "weight": "167"
    },
    {
        "name": "Captain America",
        "publisher": "Marvel Comics",
        "alter_ego": "Steve Rogers",
        "first_appearance": "Captain America Comics #1",
        "weight": "220"
    },
    {
        "name": "Iron Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Tony Stark",
        "first_appearance": "Tales of Suspense #39",
        "weight": "250"
    },
    {
        "name": "Thor",
        "publisher": "Marvel Comics",
        "alter_ego": "Thor Odinson",
        "first_appearance": "Journey into Myster #83",
        "weight": "200"
    },
    {
        "name": "Hulk",
        "publisher": "Marvel Comics",
        "alter_ego": "Bruce Banner",
        "first_appearance": "The Incredible Hulk #1",
        "weight": "1400"
    },
    {
        "name": "Wolverine",
        "publisher": "Marvel Comics",
        "alter_ego": "James Howlett",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "200"
    },
    {
        "name": "Daredevil",
        "publisher": "Marvel Comics",
        "alter_ego": "Matthew Michael Murdock",
        "first_appearance": "Daredevil #1",
        "weight": "200"
    },
    {
        "name": "Silver Surfer",
        "publisher": "Marvel Comics",
        "alter_ego": "Norrin Radd",
        "first_appearance": "The Fantastic Four #48",
        "weight": "unknown"
    }
]

// 1.- Make an array with all superheroes names
const superHeroesNames = superHeroes.map(names => names.name);

console.log('The names of the super heroes are: ', superHeroesNames);

// 2.- Make an array with only "light" heroes (<190 pounds)
const lightHeroes = superHeroes.filter(hero => hero.weight < 190);

console.log('These are light weight super heroes: ', lightHeroes);

// 3.- Make an array with just the names of heroes who weight 200 punds (using chain)
const heavyHeroesNames = superHeroes
    .filter(hero => hero.weight == 200) //Note to self: === does not work
    .map(hero => hero.name);

console.log('Heroes that weight 200 punds: ', heavyHeroesNames);

// 4.- Make an array with the first apperances of the heores 
const firstAppearance = superHeroes.map(heroes => heroes.first_appearance);

console.log('Fist appearance Superheores: ', firstAppearance);

// 5.-Make an array with all DC heroes, then one with all Marvel heroes
const DCHeroes = superHeroes.filter(heroes => heroes.publisher == 'DC Comics');

const marvelHeroes = superHeroes.filter(heroes => heroes.publisher == 'Marvel Comics');

console.log('DC Comics heroes: ', DCHeroes, 'Marvel Comics heroes: ', marvelHeroes);

// 6.- Sum all the weights of the DC Comics heroes
const weightDCHeroes = superHeroes
    .filter(hero => hero.publisher == 'DC Comics')
    .map(hero => parseInt(hero.weight));

console.log('All weights of DC super heroes are: ', weightDCHeroes);

const totalWeightDCHeroes = weightDCHeroes.reduce((currentTotal, hero) => {
    return hero + currentTotal
}, 0);

console.log('This is the sum of all the DC weights: ', totalWeightDCHeroes);

// 7.- Again, sum all the weights but now of the Marvel heroes
const weightMarvelHeroes = superHeroes
    .filter(hero => hero.publisher == 'Marvel Comics')
    .map(hero => {
        if (hero.weight !== 'unknown') { //Note to self: !== means not equal
            return parseInt(hero.weight);
        } else {
            return 0;
        }
    });

console.log('All weights of Marvel super heroes are: ', weightMarvelHeroes);

const totalWeightMarvelHeroes = weightMarvelHeroes.reduce((currentTotal, hero) => {
    return hero + currentTotal
}, 0);

console.log('This is the sum of all the Marvel weights: ', totalWeightMarvelHeroes);

// 8.- Bonus: Find the heaviest super heroe:
const weightsAllHeroes = superHeroes
    .map(hero => {
        if (hero.weight !== 'unknown') {
            return parseInt(hero.weight);
        } else {
            return 0;
        }
    });

console.log('This are the weights of all heroes: ', weightsAllHeroes);

const heaviestHeroe = weightsAllHeroes.reduce(
    (heavierHero, currentHero) => {
        if (currentHero > heavierHero) {
            return currentHero;
        } else {
            return heavierHero;
        }
    });

console.log('The weight of the heaviest super hero is: ', heaviestHeroe);

