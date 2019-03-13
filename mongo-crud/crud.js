const mongoose = require("mongoose");

/*
  Insert your connection string to your Cloud based Mongo DB on Atlas below.
  Remember to insert you own userName, Password and name of DB (instead of the suggested /test)
*/
mongoose.connect(
    "mongodb+srv://admin:admin@gettingstarted-9sv1o.mongodb.net/test?retryWrites=true",
    { useNewUrlParser: true }
  )
  .then(() => "You are now connected to Mongo!")
  .catch(err => console.error("Something went wrong", err));

// Game Schema
const gameSchema = new mongoose.Schema({
  title: String,
  publisher: String,
  tags: [String],
  date: {
    type: Date,
    default: Date.now
  },
  onSale: Boolean,
  price: Number
});

// create an instance of the Game Schema.
// first argument : The Singular Name of the Collection (Table).
// Second argument : The Schema that defines the shape of the document.
const Game = mongoose.model("Game", gameSchema);


async function saveGames(){
  //Remove the Comment below, to start with a fresh database (deleteMany({}) deletes all)
  //await Game.deleteMany({});
  var games = 
  [ { tags: [ 'adventure', 'action' ], title: 'The Legend of Zelda: Breath of the Wild',  publisher: 'Nintendo', onSale: false, price: 59.99, date: "2018-06-04T18:43:28.423Z"},
    { tags: [ 'adventure', 'action' ], title: 'Super Mario Odyssey', publisher: 'Nintendo', onSale: true, price: 45,  date: "2018-06-04T20:47:29.661Z"},
    { tags: [ 'racing', 'sports' ], title: 'Mario Kart 8 Deluxe', publisher: 'Nintendo',onSale: false,price: 59.99, date: "2018-06-04T20:49:10.180Z"},
    { tags: [ 'action', 'shooter' ], title: 'Splatoon 2',publisher: 'Nintendo', onSale: true, price: 35.99, date: "2018-06-04T20:51:17.812Z"},
    { tags: [ 'side scroller', 'platformer' ], title: 'Rayman Legends',publisher: 'Ubisoft', onSale: false, price: 49.99, date: "2018-06-04T20:52:08.460Z"},
    { tags: [ 'simulation', 'farming' ],title: 'Stardew Valley', publisher: 'Chucklefish', onSale: false, price: 19.99, date: "2018-06-04T20:53:14.535Z"},
    { tags: [ 'adventure', 'platformer' ], title: 'Shovel Knight: Treasure Trove', publisher: 'Yacht Club Games', onSale: true, price: 10.99, date: "2018-06-04T20:54:07.257Z"},
  ]
  var newGames = await Game.insertMany(games); 
  console.log(newGames);
}

saveGames();

/** Usefull operators to use
- $eq	Matches values that are equal to a given value.
- $ne	Matches all values that are not equal to a given value.
- $gt	Matches values that are greater than a given value.
- $gte	Matches values that are greater than or equal to a given value.
- $lt	Matches values that are less than a given value.
- $lte	Matches values that are less than or equal to a given value.
- $in	Matches any of the values contained in an array.
- $nin	Matches none of the values contained in an array.

 **********************
 **** Example below **** 
 **********************
 */


// Get data from MongoDB
async function getGames() {
    const games = await Game
        .find({price: {$lt:20}}) // find all data with price less then 20
        //.find({ publisher: 'Nintendo', onSale: true }) // Find variable by these input. {publisher == 'Nintendo' && onSale == true}
        .sort({ price: 1 }) // sort the input by ascending... -1 = descending
        .select({title: 1, price: 1}); // get only title, and price from db
    console.log(games);
}
 
getGames();
