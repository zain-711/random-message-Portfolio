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

for (let prop in inspirationalMessages) {
  randomNumber = Math.floor(Math.random() * 4);
  switch (prop) {
    case "message":
      finalMessage.push(
        `Your qoute of the day is: ${inspirationalMessages[prop][randomNumber]}`
      );
      break;
    case "author":
      finalMessage.push(
        `The author of the day is: ${inspirationalMessages[prop][randomNumber]}`
      );
      break;
    case "advice":
      finalMessage.push(
        `Recommended advice: ${inspirationalMessages[prop][randomNumber]}`
      );
      break;
    default:
      finalMessage.push("There is not enough info.");
  }
}

function randomMessage(quote) {
  const formattedMessage = finalMessage.join(`\n`);
  console.log(formattedMessage);
}

randomMessage(finalMessage);
