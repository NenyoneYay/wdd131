const attackedButton = document.querySelector("#attacked-button");
const levelUpButton = document.querySelector("#level-up-button");



const character = {
    title: "Jareth, the Goblin King",
    class: "Goblin King",
    level: 1,
    health: 100,
    imgSrc: "images/Jarethehadshot.webp",
    takeDamage: function () {
        if (character.health > 1)
        {
            character.health -= 20;
            console.log(character.health);
            document.querySelector('#health').textContent = "Health: " + character.health;
        }
        if (character.health <= 0){
            const testing = confirm("You died!\nPress OK to Dance Magic Dance, or cancel to return to the page.");
            if (testing){
                window.location.href = "https://youtu.be/xBv4Ne67QcM?si=uUWh_jsi9hH_uj5l&t=39";
            }
        }
    },
    levelUp: function () {
        character.level += 1;
        console.log(character.level);
        document.querySelector('#level').textContent = "Level: " + character.level;
    }
}

document.querySelector('#level').textContent = "Level: " + character.level;

levelUpButton.addEventListener('click', character.levelUp);
attackedButton.addEventListener('click', character.takeDamage);

document.querySelector('.character-name').textContent = character.title;
document.querySelector('.character-class').textContent = "Class: " + character.class;
document.querySelector('.character-img').setAttribute('src', character.imgSrc);
// console.log("testing");
// function testing() {
//     console.log ('testing');
// }




// enrollStudent: function (sectionNum) {
//         // find the right section...Array.findIndex will work here
//         const sectionIndex = this.sections.findIndex(
//           (section) => section.sectionNum == sectionNum
//         );
//         if (sectionIndex >= 0) {
//           this.sections[sectionIndex].enrolled++;
//           renderSections(this.sections);
//         }
//       }