// Random Quotes Generator Script
const quotes = [{text:"Don’t let yesterday take up too much of today.",author:"Will Rogers"},{text:"The best revenge is massive success.",author:"Frank Sinatra"},{text:"If you can dream it, you can do it.",author:"Walt Disney"},{text:"It always seems impossible until it’s done.",author:"Nelson Mandela"},{text:"Success is not final, failure is not fatal: it is the courage to continue that counts.",author:"Winston Churchill"},{text:"Do what you can, with what you have, where you are.",author:"Theodore Roosevelt"},{text:"Believe you can and you’re halfway there.",author:"Theodore Roosevelt"},{text:"Hardships often prepare ordinary people for an extraordinary destiny.",author:"C.S. Lewis"},{text:"Don’t watch the clock; do what it does. Keep going.",author:"Sam Levenson"},{text:"Great things never come from comfort zones.",author:"Anonymous"},{text:"The future depends on what you do today.",author:"Mahatma Gandhi"},{text:"Dream bigger. Do bigger.",author:"Anonymous"},{text:"Push yourself, because no one else is going to do it for you.",author:"Anonymous"},{text:"Don’t stop when you’re tired. Stop when you’re done.",author:"Marilyn Monroe"},{text:"Discipline is the bridge between goals and accomplishment.",author:"Jim Rohn"},{text:"You don’t have to be great to start, but you have to start to be great.",author:"Zig Ziglar"},{text:"Work hard in silence, let success make the noise.",author:"Frank Ocean"},{text:"Your limitation—it’s only your imagination.",author:"Anonymous"},{text:"The harder you work for something, the greater you’ll feel when you achieve it.",author:"Anonymous"},{text:"Don’t wait for opportunity. Create it.",author:"George Bernard Shaw"},{text:"Sometimes later becomes never. Do it now.",author:"Anonymous"},{text:"Dream it. Wish it. Do it.",author:"Anonymous"},{text:"Success doesn’t just find you. You have to go out and get it.",author:"Anonymous"},{text:"Little things make big days.",author:"Isabel Marant"},{text:"The secret of getting ahead is getting started.",author:"Mark Twain"}];
const quoteDiv = document.getElementById("quote");
const authorDiv = document.getElementById("author");
const generateBtn = document.querySelector("#third a");

generateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  quoteDiv.textContent = `${randomQuote.text}`;
  authorDiv.textContent = `-- ${randomQuote.author}`;
});