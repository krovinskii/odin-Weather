//Chart for hourly temperature data

import Chart from "chart.js/auto";

let chartInstance = null;

export const hourlyGraph = (hourlyData) => {
  // Filter hourly data to include only every two hours
  const filteredData = hourlyData.filter((_, index) => index % 2 === 0);

  const data = filteredData.map((hour) => {
    const date = new Date(hour.datetimeEpoch * 1000); // Convert Unix timestamp to milliseconds
    return {
      hour: date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      temp: hour.temp,
    };
  });

  console.log(data);
  const ctx = document.getElementById("hourlyGraph").getContext("2d");

  // Destroy the existing chart instance if it exists
  if (chartInstance) {
    chartInstance.destroy();
  }

  chartInstance = new Chart(ctx, {
    type: "line",
    options: {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: "rgb(240, 248, 255)",
            boxWidth: 0,
            font: {
              size: "25%",
              family: "Raleway",
            },
          },
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Time of Day",
            color: "white",
            font: {
              family: "Raleway",
              size: "17%",
            },
          },
          ticks: {
            color: "rgb(240, 248, 255)",
          },
        },
        y: {
          title: {
            display: true,
            text: "Temperature (°C)",
            color: "rgb(240, 248, 255)",
            font: {
              family: "Raleway",
              size: "17%",
            },
          },
          ticks: {
            color: "rgb(240, 248, 255)",
          },
        },
      },
    },
    data: {
      labels: data.map((row) => row.hour),
      datasets: [
        {
          label: "Hourly Temp",
          data: data.map((row) => row.temp),
          borderColor: "rgb(240, 248, 255)",
        },
      ],
    },
  });
};
