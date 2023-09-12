const arrstudents = [
    'Alexandre Vandewiele',
    'Antoine Lansman',
    'Bastien Venturi',
    'Carole Gérard',
    'Dorian Vanden Eynde',
    'Elisabeth Leyder',
    'Elodie Ali',
    'Justin Michel',
    'Justine Frigo',
    'Justine Leleu',
    'Kimi Lefort',
    'Layla',
    'Lidwine Careme',
    'Lucas Beauloi',
    'Marie Tara',
    'Mathias Barbier',
    'okly2023',
    'Pierre Marien',
    'Robin Piot',
    'Rosalie Boulard',
    'Stephane Comblez',
    'Tim Desmet',
    'Toms',
    'Valentin Lefort',
    'Vens Alexandre',
    'Virginie Dourson',
];

let n = prompt('How many random learners do you want?');



if ( n <= 0 || n > arrstudents.length ) {
    console.log('Invalid input. Please enter a positive number.');
}
else {
    for (let i = 0; i < n; i++) {
        let rand = Math.floor(Math.random() * arrstudents.length);
        let students = arrstudents[rand]
        console.log(students);
    }
}