
// Storing a list of afl teams and their players as well as asto signs for referance
const teams = {
    carlton: {
        players: [`Patrick Cripps`, 'Sam Walsh', 'Sam Docherty'],
    },
    collingwood: {
        players: [`Scott Pendlebury`, 'Darcy Moore', 'Nick Daicos'],
    },
    melbourne: {
        players: [`Max Gawn`, 'Christian Petraca', 'Clayton Oliver'],
    },
    westCoast: {
        players: [`Liam Ryan`, 'Jake Waterman', 'Andrew Gaff'],
    },
    fremantle: {
        players: [`Sam Stuart`, 'Jaeger Omeara', 'Caleb Serong'],
    },
    GWS: {
        players: [`Darcy Jones`, 'Stephen Coniglio', 'Toby Greene'],
    },
    goldCoast: {
        players: [`Rory Atkins`, 'Sam Flanders', 'Brandon Ellis'],
    },
    northMelbourne: {
        players: [`Hugh Greenwood`, 'Jaidyn Stephenson', 'Harry Sheezel'],
    },
    sydney: {
        players: [`Chad Warner`, 'Hayden Mclean', 'Taylor Adams'],
    },
    richmond: {
        players: [`Nick Vlastuin`, 'Dylan Grimes', 'Dion Prestia'],
    },
    geelong: {
        players: [`Ryan Stanley`, 'Zach Tuohy', 'Brandan Parfitt'],
    },
    stKilda: {
        players: [`Jack Higgins`, 'Marcus Windhager', 'Zak Jones'],
    },
    essendon: {
        players: [`Andrew Mcgrath`, 'Sam Draper', 'Darcy Parish'],
    },
    brisbane: {
        players: [`Kai Lohmann`, 'Deven Robertson', 'Joe Daniher'],
    },
    portAdelaide: {
        players: [`Connor Rozee`, 'Sam Powell-Pepper', 'Ryan Burton'],
    },
    adelaide: {
        players: [`Chayce Jones`, 'Ben Keays', 'Sam Berry'],
    },
    westernBulldogs: {
        players: [`Bailey Smith`, 'Adam Treloar', 'Jamarra Ugle-Hagan'],
    },
    hawthorn: {
        players: [`Harry Morrison`, 'Mitch Lewis', 'Jai Newcombe'],
    },
};

const astroSign = ['Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn'];

// generates and logs to the console required script
const generateScript = () => {

    let randTeamName = Object.keys(teams)[Math.floor(Math.random() * 18)]

    let randPlayer = teams[randTeamName].players[Math.floor(Math.random() * 3)]

    let randAstroSign = astroSign[Math.floor(Math.random() * 13)];

    console.log(`Your favourite team is ${randTeamName} which also contains your favourite player ${randPlayer}!`)
    console.log(`Your star sign is ${randAstroSign}!`)

};

generateScript();