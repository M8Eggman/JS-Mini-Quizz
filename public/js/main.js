let questions = [
    'Quel est le personnage principal de "Naruto" ?',
    'Quel est le nom du robot géant dans "Neon Genesis Evangelion" ?',
    'Qui est le créateur de "One Piece" ?',
    'Quel est le nom du chat magique dans "Sailor Moon" ?',
    'Quel est le sport pratiqué dans "Haikyuu!!" ?',
    'Quel est le nom du héros de "My Hero Academia" ?',
    'Qui est le rival de Light Yagami dans "Death Note" ?',
    'Quel est le nom du héros de "Attack on Titan" ?',
    'Quel est le nom du personnage principal de "Demon Slayer" ?',
    "Quel est l'anime qui suit les aventures d'un alchimiste ?",
    'Quel est le nom du héros de "Dragon Ball Z" ?',
    'Quel est le nom du personnage principal de "Tokyo Revengers" ?',
    "Quel est l'anime qui met en scène des joueurs de basket-ball ?",
    'Quel est le nom du personnage principal de "Cowboy Bebop" ?'
]
let réponses = [
    'Naruto Uzumaki',
    'Evangelion',
    'Eiichiro Oda',
    'Luna',
    'Volley-ball',
    'Izuku Midoriya',
    'L',
    'Eren Yeager',
    'Tanjiro Kamado',
    'Fullmetal Alchemist',
    'Son Goku',
    'Takemichi Hanagaki',
    'Kuruko no Basket',
    'Spike Spiegel'
]

let nombreQuestion = 5

console.log("Bienvenue dans le quizz sur les animes")
while (true) {
    console.log("Nombre de question:", nombreQuestion)
    console.log("1.Lancer une partie")
    console.log("2.Changer le nombre de question")
    console.log("3.Quitter")
    let option = prompt()
    if (option === "1") {
        let bonneRéponse = 0
        //source du nombre aléatoire: https://www.w3schools.com/js/js_random.asp     
        let question = Math.floor(Math.random() * questions.length)
        for ( index = 0; index < nombreQuestion; index++) {
            console.log("Question", index + 1,)
            console.log(questions[question])
            let réponseUtilisateur = prompt()
            if (réponseUtilisateur.toLowerCase() == réponses[question].toLowerCase()) {
                console.log("Bonne réponse")
                bonneRéponse += 1
            } else {
                console.log("Mauvaise réponse. La réponse était:", réponses[question])
            }
            question = Math.floor(Math.random() * questions.length)
        }   
        console.log('Vous avez', bonneRéponse, "bonne réponse sur", nombreQuestion) 
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