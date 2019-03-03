var _jokes = [
 "A day without sunshine is like, night.",
 "At what age is it appropriate to tell my dog that he's adopted?",
 "that Guantánamo will soon be a thing of the past"
];

class Jokes {
 constructor(jokes){ 
   this.jokes = jokes;
 }
 getRandomJoke(){
   let index = Math.floor(Math.random(this.jokes.length));
   return this.jokes[index];
 }
 getAllJokes(){
   return this.jokes;
 }
 addJoke(joke) {
   this.jokes.push(joke);
 }
}

module.exports = new Jokes(_jokes);
