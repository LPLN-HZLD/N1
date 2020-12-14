
function initMap() {
  var uluru = {
      lat: -36.742775,
      lng: 174.731559
  };
  var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      scrollwheel: false,
      center: uluru
  });
  var marker = new google.maps.Marker({
      position: uluru,
      map: map
  });
}

//-----------Team chart-------//
var ctx = document.getElementById("team-chart");
ctx.height = 150;
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
      labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
      type: 'line',
      defaultFontFamily: 'Montserrat',
      datasets: [{
          data: [0, 7, 3, 12, 2, 10, 0],
          label: "نوار 01",
          backgroundColor: '#ff3366',
          borderColor: '#ff3366',
          borderWidth: 0.5,
          pointStyle: 'circle',
          pointRadius: 0,
          pointBorderColor: 'transparent',
          pointBackgroundColor: '#f84471',
      }, {
          label: "نوار 02",
          data: [0, 14, 5, 3, 15, 5, 0],
          backgroundColor: '#ffae3b',
          borderColor: '#ffae3b',
          borderWidth: 0.5,
          pointStyle: 'circle',
          pointRadius: 0,
          pointBorderColor: 'transparent',
          pointBackgroundColor: '#ffae3b',
      }, {
          label: "نوار 03",
          data: [4, 10, 12, 5, 10, 15, 6],
          backgroundColor: '#8dc73f',
          borderColor: '#8dc73f',
          borderWidth: 0.5,
          pointStyle: 'circle',
          pointRadius: 0,
          pointBorderColor: 'transparent',
          pointBackgroundColor: '#8dc73f',
      }]
  },
  options: {
      responsive: true,
      tooltips: {
          mode: 'index',
          titleFontSize: 12,
          titleFontColor: '#000',
          bodyFontColor: '#000',
          backgroundColor: '#fff',
          titleFontFamily: 'Montserrat',
          bodyFontFamily: 'Montserrat',
          cornerRadius: 3,
          intersect: false,
      },
      legend: {
          position: 'top',
          labels: {
              usePointStyle: true,
              fontFamily: 'Montserrat',
          },

      },
      scales: {
          xAxes: [{
              display: true,
              gridLines: {
                  display: false,
                  drawBorder: false
              },
              scaleLabel: {
                  display: false,
                  labelString: 'Month'
              }
          }],
          yAxes: [{
              display: true,
              gridLines: {
                  display: false,
                  drawBorder: false
              },
              scaleLabel: {
                  display: true,
                  labelString: 'Value'
              }
          }]
      },
      title: {
          display: false,
      }
  }
});