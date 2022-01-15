const date = []


let counter = -1;
Storage.get("forecast").forEach(forecastDay => {
  counter++;

  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + counter)

  const dayName = currentDate.toLocaleString("en-us", { weekday: "short" });
  const monthName = currentDate.toLocaleString("en-us", { month: "short" });
  const day = currentDate.toLocaleString("en-us").split("/")[1];

  const newDate = dayName + "," + day

  date.push(newDate)

})

const ctx = document.getElementById("myChart").getContext("2d");

let options = {
  plugins: {
    legend: {
      labels: {
        color: "rgba(255,255,255,0.6)",
        font: {
          size: 16,
        },
        // usePointStyle: true,
      },
    },
  },

  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        color: "rgba(255,255,255,0.6)",
        font: {
          fontFamily: "Poppins, sans-serif",
          size: 14,
        },
      },
    },
    x: {
      ticks: {
        color: "rgba(255,255,255,0.6)",
        font: {
          fontFamily: "Poppins, sans-serif",
          size: 16,
        },
      },
    },
  },

  tooltips: { enabled: false },
  legend: {
    position: "bottom",
    usePointStyle: true,

    labels: {
      fontSize: 16,
      fontFamily: "Poppins, sans-serif",
      usePointStyle: true,
    },
  },

  responsive: true,
  maintainAspectRatio: false,
};

const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: date,
    datasets: [
      {
        label: "Temperature",
        data: [
          ((Storage.get("forecast")[0].temp.max + Storage.get("forecast")[0].temp.min) / 2).toFixed(), 
          ((Storage.get("forecast")[1].temp.max + Storage.get("forecast")[0].temp.min) / 2).toFixed(), 
          ((Storage.get("forecast")[2].temp.max + Storage.get("forecast")[0].temp.min) / 2).toFixed(), 
          ((Storage.get("forecast")[3].temp.max + Storage.get("forecast")[0].temp.min) / 2).toFixed(), 
          ((Storage.get("forecast")[4].temp.max + Storage.get("forecast")[0].temp.min) / 2).toFixed(), 
          ((Storage.get("forecast")[5].temp.max + Storage.get("forecast")[0].temp.min) / 2).toFixed(), 
          ((Storage.get("forecast")[6].temp.max + Storage.get("forecast")[0].temp.min) / 2).toFixed(), 
          ((Storage.get("forecast")[7].temp.max + Storage.get("forecast")[0].temp.min) / 2).toFixed(), 
        ],
        backgroundColor: ["rgba(54, 162, 235, .9)"],
      },
    ],
  },
  options: options,
});
