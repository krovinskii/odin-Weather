import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

export const hourlyGraph = (async function () {
  const data = [
    { hour: "6am", temp: 10 },
    { hour: "8am", temp: 10 },
    { hour: "10am", temp: 30 },
    { hour: "12pm", temp: 40 },
    { hour: "2pm", temp: 23 },
    { hour: "4pm", temp: 44 },
    { hour: "6pm", temp: 34 },
    { hour: "8pm", temp: 34 },
    { hour: "10pm", temp: 45 },
    { hour: "12pm", temp: 45 },
    { hour: "2am", temp: 32 },
    { hour: "4am", temp: 12 },
  ]; //Need to import hourly data into temp from API

  new Chart(document.getElementById("hourlyGraph"), {
    type: "line",
    options: {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: "rgb(240, 248, 255)", // Correct way to set label color in Chart.js
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
})();
