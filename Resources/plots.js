// Filters Disney movies that earned more than $180,000,000
function filterMovieEarnings(movie) {
    return movie.Total_Gross > 180000000;
  }
  
  var filteredMovies = data.filter(filterMovieEarnings);
  
  var titles = filteredMovies.map(movies => movies.Movie_Title);
  
  var earnings = filteredMovies.map(movies => movies.Total_Gross);

// Generate bar chart using Plotly for movies with highest total earnings
  var trace = {
    x: titles,
    y: earnings,
    type: "bar", 
    marker: {
      color: 'rgb(158,202,225)',
      opacity: 0.6,
      line: {
        color: 'rgb(8,48,107)',
        width: 1.5
      }
    }
  };
  
  var info = [trace];
  
  var layout = {
    title: "The Highest Grossing Disney Movies, (Earning > $180,000,000)",
    xaxis: { title: "Movie Title" },
    yaxis: { title: "Gross Earnings ($)"},
    autosize: false,
    width: 900,
    height: 500,
    margin: {
      l: 75,
      r: 50,
      b: 125,
      t: 75,
      pad: 4
    },
    paper_bgcolor: '#7f7f7f',
    plot_bgcolor: '#c7c7c7'
  };
  
  Plotly.newPlot("barPlot", info, layout);



// Filters Disney movies for adjusted-for-inflation gross earnings > $180,000,000
function filterAdjustedEarnings(m) {
    return m.Inflation_Adjusted_Gross > 180000000;
  }
  
  var filteredMovies2 = data.filter(filterAdjustedEarnings);
  
  var adjusted_titles = filteredMovies2.map(m => m.Movie_Title);
  
  var adjusted_earnings = filteredMovies2.map(m => m.Inflation_Adjusted_Gross);


// Generate bar graph for movies with highest adjusted-for-inflation gross earnings using Plotly
  var trace2 = {
    x: adjusted_titles,
    y: adjusted_earnings,
    type: "bar",
    marker: {
      color: 'rgb(255,202,225)',
      opacity: 0.6,
      line: {
        color: 'rgb(255,48,107)',
        width: 1.5
      }
    }
  };

  var data2 = [trace2];

  var layout2 = {
    title: "The Highest Inflation-Adjusted Grossing Disney Movie",
    xaxis: { title: "Movie Title" },
    yaxis: { title: "Gross Earnings ($), Adjusted for Inflation"},
    tickangle: '45',
    autosize: false,
    width: 900,
    height: 500,
    margin: {
      l: 75,
      r: 50,
      b: 125,
      t: 75,
      pad: 4
    },
    paper_bgcolor: '#7f7f7f',
    plot_bgcolor: '#c7c7c7'
  };

  Plotly.newPlot("barPlot2", data2, layout2);
 


// Generate Genre Pie Chart using Chart.js
var ctx = document.getElementById('pieChart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Adventure', 'Drama', 'Comedy', 'Musical'],
        datasets: [{
            label: 'Disney Movie Genres',
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"],
            // Genre counts:{"0":"Musical","1":"Adventure","2":"Musical","3":"Drama","4":"Drama","5":"Drama","6":"Adventure","7":"Musical","8":"Musical","9":"Null","10":"Adventure","11":"Comedy","12":"Adventure","13":"Adventure","14":"Adventure","15":"Adventure","16":"Adventure","17":"Musical","18":"Comedy","19":"Adventure","20":"Adventure","21":"Adventure","22":"Adventure","23":"Adventure","24":"Adventure","25":"Adventure","26":"Adventure","27":"Adventure","28":"Adventure","29":"Adventure","30":"Adventure","31":"Adventure","32":"Comedy","33":"Adventure","34":"Adventure","35":"Comedy","36":"Adventure","37":"Adventure","38":"Adventure","39":"Adventure","40":"Adventure","41":"Adventure","42":"Adventure","43":"Drama","44":"Adventure","45":"Adventure","46":"Adventure"},drop null
            data: [33, 4, 4 ,5]
            }]
        },

    options: {
        title: {
            display: true,
            text: 'Disney Movie Genres',
            fontColor: 'white',
            fontSize: 40
          },
        legend: {
            display: true,
            labels: {
                fontColor: 'white',
                fontSize: 20
            }
        }
    }
});
