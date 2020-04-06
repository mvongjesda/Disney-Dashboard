function filterMovieEarnings(movie) {
    return movie.Total_Gross > 150000000;
  }
  
  var filteredMovies = data.filter(filterMovieEarnings);
  
  // console.log(filteredMovies);
  
  var titles = filteredMovies.map(movies =>  movies.Movie_Title);
  
  // console.log(titles);
  
  var earnings = filteredMovies.map(movies => movies.Total_Gross);
  
  // console.log(earnings);
  
  var trace = {
    x: titles,
    y: earnings,
    type: "bar"
  };
  
  var data = [trace];
  
  var layout = {
    title: "The Highest Grossing Disney Movies",
    xaxis: { title: "Movie Title" },
    yaxis: { title: "Gross Earnings ($)"}
  };
  
  Plotly.newPlot("barPlot", data, layout);