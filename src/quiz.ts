export class Question {
  constructor(
    public question: string,
    public answer: string,
    public options: string[],
  ) {}
}

export const questions: Question[] = [
  new Question(
    "Which country started the tradition of putting up a Christmas tree?",
    "Germany",
    ["United Kingdom", "Germany", "France", "Norway"],
  ),
  new Question(
    "How many ghosts show up in A Christmas Carol?",
    "Four",
    [ "One", "Two", "Three", "Four" ],
  ),
  new Question(
    "Where was baby Jesus born?",
    "Bethlehem",
    ["Jerusalem", "Nazareth", "Bethlehem", "Jericho"],
  ),
  new Question(
    "What was the highest-grossing Christmas movie of all time?",
    "Home Alone",
    ["The Grinch","Home Alone", "The Polar Express", "The Santa Clause"],
  ),
  new Question(
    "Elvis isn't going to have a white Christmas he's going to have a....",
    "Blue Christmas",
    ["Green Christmas", "Red Christmas", "Yellow Christmas", "Blue Christmas"],
    ),
  new Question(
    "What do people traditionally put on top of a Christmas tree?",
    "An angel",
    ["A star", "A bell", "An angel", "A candle"],
  ),
  new Question(
    "Where are the McCallisters going on vacation when they leave Kevin behind?",
    "Paris",
    ["Paris", "London", "Rome", "Madrid"],
  ),
  new Question(
    `How many gifts in total were given in "The Twelve Days of Christmas" song?`,
    "364",
    ["12", "364", "144", "288"],
  )
];