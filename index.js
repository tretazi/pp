function selectAnimal(animal) {
    let description = "";
    let imageUrl = "";
    switch(animal) {
        case "lion":
            description = "Le lion est un grand félin connu pour sa crinière majestueuse et sa puissance.";
            imageUrl = "lion.jpg"; 
            break;
        case "chien":
            description = "Le chien est un animal fidèle et le meilleur ami de l'homme.";
            imageUrl = "chien.webp"; 
            break;
        case "chat":
            description = "Le chat est un animal domestique apprécié pour son indépendance et sa douceur.";
            imageUrl = "chat.jpeg"; 
            break;
        case "serpent":
            description = "Le serpent est un reptile mystérieux souvent associé à la ruse.";
            imageUrl = "serpent.jpg"; 
            break;
        default:
            description = "Sélectionnez un animal pour voir sa description et son image.";
    }
    document.getElementById("animal-description").innerText = description;
    const animalImage = document.getElementById("animal-image");
    if (imageUrl) {
        animalImage.src = imageUrl;
        animalImage.style.display = "block";
    } else {
        animalImage.style.display = "none";
    }
}
