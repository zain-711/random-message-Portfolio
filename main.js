//random messages are famous qoutes
const inspirationalMessages = {
  message: [
    "It takes courage to grow up and become who you really are.",
    "Your self-worth is determined by you. You don't have to depend on someone telling you who you are.",
    "Nothing is impossible. The word itself says I'm possible!",
    "Keep your face always toward the sunshine, and shadows will fall behind you.",
  ],
  author: ["E.E. Cummings", "Beyoncé", "Audrey Hepburn", "Walt Whitman"],
  advice: [
    "go to the gym",
    "Focus on yourself",
    "Keep working hard",
    "keep looking for new posibiities",
  ],
};

let finalMessage = [];

function randomMessage() {
  randomNumber = Math.floor(Math.random() * 4);
}
