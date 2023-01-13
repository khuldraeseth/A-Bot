const { CommandType } = require("wokcommands");
const randomWords = require("random-english-words");

const stages = [
    `
​   ╒══╗
      ║
      ║
      ║
      ║
╒═════╩═╕
`,
    `
​   ╒══╗
   O  ║
      ║
      ║
      ║
╒═════╩═╕
`,
    `
​   ╒══╗
   O  ║
   |  ║
      ║
      ║
╒═════╩═╕
`,
    `
​   ╒══╗
   O  ║
  /|  ║
      ║
      ║
╒═════╩═╕
`,
    `
​   ╒══╗
   O  ║
  /|\\ ║
      ║
      ║
╒═════╩═╕
`,
    `
​   ╒══╗
   O  ║
  /|\\ ║
  /   ║
      ║
╒═════╩═╕
`,
    `
​   ╒══╗
   O  ║
  /|\\ ║
  / \\ ║
      ║
╒═════╩═╕
`,
].map(stage => stage.trim());

module.exports = {
    description: "Play hangman!",
    type: CommandType.BOTH,
    callback: async ({ user, args }) => {
        return {
            content: "Hangman is currently under development. Please check back later!"
        }
    }
}
