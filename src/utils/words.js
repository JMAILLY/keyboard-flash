const sentenceCollection = ["Obelix télécharge illégallement un plat de poutine",
    "Emile Zola se goinfrent d'un bisounours jouflus",
    "Charles Bronson veut te tuer avec un phoque mort",
    "Et puis de toute façon il sniffe le parquet ciré",
    "L'Horticulteur fait une blague sur des centaines d'étoiles dans les yeux des enfants",
    "Gustave Eiffel prépare une grosse soirée avec le PS",
    "L’allégorie des sens mouvemente un bambou rouillé",
    "Obama exaspère un lampadaire",
    "Un constitutionnaliste s'est immolé avec un tatouage raté",
    "Poutine cherche toujours un tube de dentifrice",
    "La dame déclare la guerre thermonucléaire globale à l'esprit de Noël en Irak",
    "George Abitbol va bientôt devenir un anarcho-syndicaliste pacifiste",
    "Albator fait du saut à l'élastique chez une litière pour hyppocampe",
    "Un jeune communiste est tombé amoureux d'un canard laqué",
    "Un Argonien roule sur un concombre masqué",
    "John Travolta a foiré complètemet le monde",
    "Sonic est ami avec une brosse metallique",
    "Le stagiaire rééquilibre la balance divine avec le p'tit bonhomme en mousse",
    "Jean Claude Van Damme éclabousse xX-darksasuke666-Xx",
    "Jacques Chirac a frappé à mort tes grands-parents",
    "José Bové chie dans l'origine du monde",
    "Walter White aime l'UMP",
    "David Pujadas fait du saut à l'élastique chez la théorie des cordes",
    "Le stagiaire de la compta fait une blague sur pas mal de monde",
    "Aristote prépare une casse-croûte pour un gnome des forêts unijambiste",
    "Frankenstein s'amuse avec la montée du FN",
    "Un geek transpirant ne sont là que pour éluder l'existantialisme sartrien",
    "Le bossu de Notre Dame rééquilibre la balance divine avec Koh Lantha",
    "De temps en temps, Marine Le Pen tartine vigoureusement ton père",
    "Un jeune communiste a décidé d'investir dans Bob Lennon",
    "François Hollande se torche avec sa main gauche",
    "Ton père cherche toujours le lancement d'Ariane 6",
    "Le chinois introduit sa main dans une bombe nucléaire",
    "Le gringo de Jacques Vabre frappe un lépreux",
    "L'humanité insouciante fait du saut à l'élastique chez l'augmentation des cotisations retraite",
    "Chuck Norris fait de la méthamphétamine dans la cave d'Alpha Tango Bravo",
];
const letterCollection = ["a", "b", "c", "d","e", "f", "g", "h","i","j","k","l","m","n","o","p","q",'r','s','t','u','v','w','x','y','z'];

export const generateArray = (count = 10) => {
    const generatedArray = [];
    let n = 0;
    while ( n < count){
        generatedArray.push(sentenceCollection[Math.floor(Math.random() * sentenceCollection.length)])
        n++
    }
    return generatedArray
};

export const generateSentence = () => {
    return sentenceCollection[Math.floor(Math.random() * sentenceCollection.length)].toLowerCase()
};

export const generateLetter = () => {
    return letterCollection[Math.floor(Math.random() * letterCollection.length)].toLowerCase()
};