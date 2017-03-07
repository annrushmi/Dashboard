// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart2);

  $(window).resize(function(){
      drawChart2();
  });

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart2() {

  // Set chart options
  var data = google.visualization.arrayToDataTable([
  ['', 'DB Best Practices', 'SecureCo Best Practices', 'Best Practices',{ role: 'annotation' } ],
  ['25', 6.5, 0, 0, ''],
  ['26', 7, 5.9, 1.9, ''],
  ['27', 7.1, 5.8, 1.8, ''],
  ['28', 7.1, 5.8, 1.8, ''],
  ['29', 7, 5.9, 1.9, ''],
  ['30', 6.5, 5.9, 1.9, ''],
  ['August', 6.4, 5.9, 1.9, ''],
  ['2', 6.5, 5.9, 1.9, ''],
  ['3', 6.5, 5.9, 1.9, ''],
  ['4', 7.1, 5.8, 1.8, ''],
  ['5', 7.1, 5.7, 1.8, ''],
  ['6', 7.1, 5.7, 1.8, ''],
  ['7', 7.1, 5.7, 1.7, ''],
  ['8', 7.1, 5.9, 1.9, ''],
  ['9', 6.4, 6, 1.7, ''],
  ['10', 6.4, 5.9, 1.8, ''],
  ['11', 6.5, 5.9, 1.9, ''],
  ['12', 6.5, 5.9, 1.9, ''],
  ['13', 6.4, 5.8, 1.9, ''],
  ['14', 6.5, 5.8, 1.9, ''],
  ['15', 6.3, 5.7, 1.9, ''],
  ['16', 5.9, 5.7, 1.8, ''],
  ['17', 5.7, 5.9, 1.8, ''],
  ['18', 6.5, 5.7, 1.8, ''],
  ['19', 6.5, 5.7, 1.8, ''],
  ['20', 6.6, 5.8, 1.9, ''],
  ['21', 6.6, 5.8, 2, ''],
  ['22', 6.7, 5.9, 1.9, ''],
  ['23', 6.7, 5.9, 1.9, ''],
]);

var options = {
  height: 350,
  'chartArea': {'width':'90%', 'height':'80%'},
  legend: { position: 'bottom', alignment: 'start' },
  curveType: 'function',
  pointSize: 6,
  hAxis: {
    gridlines: {color: '#000000'},
    ticks: [10]
  },

  colors: ['#B8D988', '#66B8DE', '#FEE1A8'],
};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.LineChart(document.getElementById('chart_div2'));
  chart.draw(data, options);
}
