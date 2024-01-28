// This is me making a template for a movie
class Movie {
    constructor(title, genre) {
      this.title = title;
      this.genre = genre;
      this.available = true;
    }
  }
  
  // This is me making a blueprint for a movie store
  class MovieStore {
    constructor() {
      this.movies = []; 
    }
  
    // This function adds a movie to the store
    addMovie(title, genre) {
      const movie = new Movie(title, genre);
      this.movies.push(movie);
    }
  
    // This function allows someone to borrow a movie
    borrowMovie(title) {
      const movie = this.movies.find(movie => movie.title === title);
  
      if (movie && movie.available) {
        movie.available = false;
        console.log(`You have successfully borrowed ${title}. Enjoy your movie night!`);
      } else {
        console.log(`Sorry, ${title} is either not available or already borrowed.`);
      }
    }
  
    // This function allows a movied to be returned
    returnMovie(title) {
      const movie = this.movies.find(movie => movie.title === title);
  
      if (movie && !movie.available) {
        movie.available = true;
        console.log(`You have returned ${title}. Thank you!`);
      } else {
        console.log(`Sorry, ${title} was not found in our records.`);
      }
    }
  
    // this function displays all available movies
    displayAvailableMovies() {
      const availableMovies = this.movies.filter(movie => movie.available);
      console.log("Available Movies:");
      availableMovies.forEach(movie => {
        console.log(`${movie.title} - ${movie.genre}`);
      });
    }
  }
  

  
  // This is me creating an instance of a movie
  const myMovieStore = new MovieStore();
  
  // This me adding movies to the store
  myMovieStore.addMovie("The Lion King", "Animation");
  myMovieStore.addMovie("Toy Story", "Family");
  myMovieStore.addMovie("The Matrix", "Action");
  
  // Display available movies
  myMovieStore.displayAvailableMovies();
  
  // Borrow a movie
  myMovieStore.borrowMovie("The Lion King");
  
  // Display available movies after borrowing
  myMovieStore.displayAvailableMovies();
  
  // Return a movie
  myMovieStore.returnMovie("The Lion King");
  
  // Display available movies after returning
  myMovieStore.displayAvailableMovies();
  