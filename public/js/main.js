let questions = {
    'Quel est le personnage principal de "Naruto" ?': 'Naruto Uzumaki',
    'Quel est le nom du robot géant dans "Neon Genesis Evangelion ?': 'Evangelion',
    'Qui est le créateur de "One Piece" ?': 'Eiichiro Oda',
    'Quel est le nom du chat magique dans "Sailor Moon" ?': 'Luna',
    'Quel est le sport pratiqué dans "Haikyuu!!" ?': 'Volley-ball',
    'Quel est le nom du héros de "My Hero Academia" ?': 'Izuku Midoriya',
    'Qui est le rival de Light Yagami dans "Death Note" ?': 'L',
    'Quel est le nom du héros de "Attack on Titan" ?': 'Eren Yeager',
    'Quel est le nom du personnage principal de "Demon Slayer" ?': 'Tanjiro Kamado',
    "Quel est l'anime qui suit les aventures d'un alchimiste ?": 'Fullmetal Alchemist',
    'Quel est le nom du héros de "Dragon Ball Z" ?': 'Son Goku',
    'Quel est le nom du personnage principal de "Tokyo Revengers" ?': 'Takemichi Hanagaki',
    "Quel est l'anime qui met en scène des joueurs de basket-ball ?": 'Kuruko no Basket',
    'Quel est le nom du personnage principal de "Cowboy Bebop" ?': 'Spike Spiegel'
} 
let nombreQuestion = 5

console.log("Bienvenu dans le quizz sur les animes")
while (true) {
    console.log("Nombre de question:", nombreQuestion)
    console.log("1.Lancer une partie")
    console.log("2.Changer le nombre de question")
    console.log("3.Quitter")
    let option = prompt()
    if (option === "1") {

    } else if (option === "2") {
        do {
            console.log("Entrer un nombre entre 2 et 10")
            nombreQuestion = prompt()
        } while (nombreQuestion > 10 || nombreQuestion < 2)
        console.log("Le nombre de question a bien été changé en", nombreQuestion, "questions")
    } else if (option === "3") {
        console.log("Au revoir")
        break
    } else {
        console.log("Ce n'est pas une option valide, tapez un nombre entre 1 et 3")
    }
}