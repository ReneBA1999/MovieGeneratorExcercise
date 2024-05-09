"use strict"

let favMovies =["spiderman", "deadpool", "avengers"];
console.log(favMovies);

function moviesReverse(favMovies) {
    console.log(`movie3: ${favMovies[2]}, movie2: ${favMovies[1]}, movie1: ${favMovies[0]}`);
}

moviesReverse(favMovies);

let favoriteMovies = [
    "Memoirs of a Geisha",
    "Training Day",
    "Princess and the Frog",
    "Spiderman",
    "Deadpool",
    "Avengers",
    "Forrest Gump",
    "The Help",
    "Barefoot",
    "The Conjuring",
    "Cars",
    "Grease",
    "Wreck-It Ralph",
    "Back to the Future",
    "Spirited Away",
    "The Shawshank Redemption",
    "The Green Mile",
    "Forrest Gump", // This duplicate will be removed
    "Rollerball",
    "Planet of the Apes",
    "2001: A Space Odyssey",
    "How To Train Your Dragon",
    "Howl's Moving Castle",
    "Ponyo",
    "Catch Me If You Can",
    "The Little Rascals",
    "Scream",
    "Shrek 2",
    "Megamind",
    "Shrek",
    "The Interview",
    "The Proposal",
    "The Pursuit of Happyness",
    "The Longest Yard",
    "17 Again",
    "Rush Hour",
    "Athena",
    "The Pianist",
    "I feel Joker",
    "The Godfather",
    "The Mask",
    "Pan's Labyrinth",
    "Transformers",
    "Shrek 4"
];

//   i = favoriteMovies

//  function movieList(favoriteMovies){
//     for( i = 0; i < favoriteMovies.lenth; i++)
//     {console.log(`You should watch ${favoriteMovies[m]}`);}

//  }
//  movieList(favoriteMovies);

//  Exercise: 4: Generate an array of objects with the 3 movietitle, 
//your reason why its great and an url to the image of the movie This should be online like 
// For example {
// Matrix: 
// reasonWhy: "Awesome Effect"
// movieImageURL: " movie.jpg"

 favMovies = [
    {
        movie: "spiderman",
        reasonWhy: "Awesome Effect",
        movieImageUrl: " "
    },
    {
        movie: "deadpool",
        reasonWhy: "funny",
        movieImageURL: " "
    },
    {
        movie: "avengers",
        reasonWhy: "Action",
        movieImageURL: " "
    }

 ];
   console.log(`The title of the first movie is ${favMovies[0].movie}. `);

//  Create a function that will Display a random movie with the output: "You should watch "RandomMovieTitle and the reason,
// including the MovieURL";
// Hint; use Math.random, math floor function and the lenght of the movie list)

function displayRandomMovie() {

    let randomM = Math.floor(Math.random() * favMovies.length);
    
    let randomMovie = favMovies[randomM];
    console.log(`You should watch "${randomMovie.movie}" because it's ${randomMovie.reasonWhy}.`);
   
}

displayRandomMovie();
