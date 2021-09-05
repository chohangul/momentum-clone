const quotes = [
  {
    quote: "No great man ever complains of want of opportunity.",
    author: "me",
  },
  {
    quote: "Do not accustom yourself to use big words for little matters.",
    author: "Jonson",
  },
  {
    quote: "A day without laughter is a day wasted.",
    author: "hey",
  },
  {
    quote:
      "Patterning your life around other's opinions is nothing more than slavery.",
    author: "you",
  },
  {
    quote: "love what you have.",
    author: "we",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
console.log(todayQuote);

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
