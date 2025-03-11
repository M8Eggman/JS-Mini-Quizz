console.log("Bienvenu dans le quizz sur les animes")
while (true) {
    console.log("1.Lancer une partie")
    console.log("2.Changer le nombre de question")
    console.log("3.Quitter")
    let option = prompt()
    if (option === "1") {
        
    } else if (option === "2") {
        do {
            console.log("Entrer un nombre entre 2 et 20")
            nombreQuestion = prompt()
        } while (nombreQuestion > 20 || nombreQuestion < 2)
        console.log("Le nombre de question a bien été changé en", nombreQuestion, "questions")
    } else if (option === "3") {
        break
    } else {

    }
}