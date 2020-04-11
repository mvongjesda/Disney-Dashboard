/// retrieve entries from js file
var tableData = data;
var tbody = d3.select("tbody");

// Display default dataset

tableData.forEach((report) => {
    console.log(report);
    var row = tbody.append('tr');

    Object.entries(report).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});

// Select the submit button & execute
var submit = d3.select("#filter-btn");

submit.on("click", function() {

// Remove default table &  not refresh page
d3.select("tbody").html("");

d3.event.preventDefault();

// Declara variables for each column & convert to lowercase to match table format
var tlt = d3.select("#Movie_Title").property("value");

var dir = d3.select("#Director").property("value");

var gnr = d3.select("#Genre").property("value");

var rtg = d3.select("#MPAA_Rating").property("value");

// initialize tableData as filteredData
filteredData = tableData;

if (tlt) {
    filteredData = filteredData.filter(record => record.Movie_Title === tlt);
}

if (dir) {
    filteredData = filteredData.filter(record => record.Director === dir);
}

if (gnr) {
    filteredData = filteredData.filter(record => record.Genre === gnr);
}
if (rtg) {
    filteredData = filteredData.filter(record => record.MPAA_Rating === rtg);
}

// Filter report & display
filteredData.forEach((report) => {
    var row = tbody.append('tr');

    Object.entries(report).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});

});