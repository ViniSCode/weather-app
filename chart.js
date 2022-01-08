const ctx = document.getElementById('myChart').getContext('2d');

let options ={

  plugins: {
    legend: {
      labels: {
        color: "rgba(255,255,255,0.6)",
        font: {
          size: 16,
        },
        // usePointStyle: true,
      }
    }
  },

  scales: {
    y: {
        beginAtZero: true,
        ticks: {
          color: "rgba(255,255,255,0.6)",
          font: {
            fontFamily: 'Poppins, sans-serif',
            size: 14,
          },
        }
    },
    x: {
      ticks: {
        color: "rgba(255,255,255,0.6)",
        font: {
          fontFamily: 'Poppins, sans-serif',
          size: 16,
        }
      }
    }
  },

  tooltips: {enabled: false},
  legend:{
    position: 'bottom',
    usePointStyle: true,

    labels:{
      fontSize: 16,
      fontFamily: 'Poppins, sans-serif',
      usePointStyle: true,
    },
  }, 

  responsive: true,
  maintainAspectRatio: false,
}


const myChart = new Chart(ctx, {
type: 'line',
data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
        label: 'Temperature',
        data: [10, 19, 3, 5, 2, 3, 10],
        backgroundColor: [
          'rgba(54, 162, 235, 1)',
        ],
        borderColor: [
            'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 5
    }]
    },
    options: options
});