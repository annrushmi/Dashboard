
// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

  $(window).resize(function(){
      drawChart();
  });

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {
  // Set chart options
  var data = google.visualization.arrayToDataTable([
  ['', 'Low', 'Medium', 'High', 'Critical', { role: 'annotation' } ],
  ['DST', 2, 0, 0, 0, ''],
  ['SSG20_Internal', 3, 4, 1, 4, ''],
  ['CustFW1', 3, 2, 0, 1, ''],
  ['DD-MGMT_Management_Server', 4, 1, 1, 1, ''],
  ['MSF-FDR-CMA', 4, 0, 1, 1, '']

]);

var options = {
  height: 350,
  'chartArea': {'width':'80%', 'height':'80%'},
  legend: { position: 'bottom', alignment: 'start', maxLines: 3 },
  bar: { groupWidth: '75%' },
  isStacked: true,
  hAxis: {
    gridlines: {color: '#E9E9E9'},
    ticks:[1,2,3,4,5,6,7,8,9,10,11,12]
  },
  colors: ['#B8D988', '#66B8DE', '#FEE1A8', '#F3906E']
};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}
