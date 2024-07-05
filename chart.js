import { legendCustomPlugin } from "./legend.js";

export const chart = (data, container) => {
  const lastSixMonthsData = data.slice(-6);
  const labels = lastSixMonthsData.map((item) => `${item.month}, ${item.year}`);
  const systolicData = lastSixMonthsData.map(
    (item) => item.blood_pressure.systolic.value
  );
  const diastolicData = lastSixMonthsData.map(
    (item) => item.blood_pressure.diastolic.value
  );

  $(document).ready(function () {
    const ctx = $(container);
    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Systolic",
            data: systolicData,
            borderColor: "#E66FD2",
            backgroundColor: "#E66FD2",
            yAxisID: "y",
            cubicInterpolationMode: "monotone",
          },
          {
            label: "Diastolic",
            data: diastolicData,
            borderColor: "#8C6FE6",
            backgroundColor: "#8C6FE6",
            yAxisID: "y",
            cubicInterpolationMode: "monotone",
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: "Blood Pressure Chart (Last 6 Months)",
          },
        },
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: "Months",
            },
            grid: {
              drawBorder: false,
              display: false,
            },
          },
          y: {
            display: true,
            position: "left",
            grid: {
              drawBorder: false,
            },
          },
        },
        elements: {
          point: {
            radius: 5,
            hoverRadius: 7,
          },
        },
      },
      plugins: [legendCustomPlugin],
    });
    $(document).ready(function () {
      const legendHTML = myChart.generateLegend().prop("outerHTML");
      document.getElementById("chart-legends").innerHTML = legendHTML;
    });
  });
};
