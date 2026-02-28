const attackedButton = document.querySelector("#attacked-button");
const levelUpButton = document.querySelector("#level-up-button");

var audio = document.getElementById("babe");
audio.volume = 0.25;
var dance = document.getElementById("dance");
dance.volume = 0.25;
var cruel = document.getElementById("cruel");
cruel.volume = 0.25;

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
            dance.pause();
            audio.currentTime = 0;
            audio.play();
        }
        if (character.health <= 0){
            audio.pause();
            dance.pause();
            cruel.play();
            cruel.addEventListener("ended", function handleEnd() {
                cruel.removeEventListener("ended", handleEnd); // prevent duplicates
                confirm("You died!");
            });
            // confirm("You died!\nPress OK to Dance Magic Dance, or cancel to return to the page.");
        }
    },
    levelUp: function () {
        if (character.health >= 1) {
            character.level += 1;
            console.log(character.level);
            document.querySelector('#level').textContent = "Level: " + character.level;
            audio.pause();
            dance.currentTime = 0;
            dance.play();
        }
        else {
            return;
        }
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