export const chart = (data, container) => {
  // Extracting data for the last 6 months
  const lastSixMonthsData = data.slice(-6);

  // Extracting labels (months) and data (systolic and diastolic values)
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
      plugins: [
        {
          beforeInit: function (chart) {
            chart.generateLegend = () => {
              const legendHTML = $('<div class="legend-details"></div>');

              chart.data.datasets.forEach((dataset) => {
                const { borderColor, label, data } = dataset;
                const legendColor = borderColor;
                const labelText = label;

                let value;
                let icon;
                let iconLabel;
                if (labelText === "Systolic") {
                  value = Math.max(...data);
                  icon = "ArrowUp.svg";
                  iconLabel = "Higher than Average";
                } else if (labelText === "Diastolic") {
                  value = Math.min(...data);
                  icon = "ArrowDown.svg";
                  iconLabel = "Lower than Average";
                }

                const legendItem = $(`
                  <div>
                    <div class="d-flex gap-1">
                      <span class="legend-color" style="background-color: ${legendColor};"></span>
                      ${labelText}
                    </div>
                    ${value}
                    <div class="d-flex gap-1">
                      <img src="./assets/${icon}" alt="up" />
                      <span>${iconLabel}</span> <!-- Replace with actual trend text -->
                    </div>
                  </div>
                `);

                legendHTML.append(legendItem);
              });

              return legendHTML;
            };
          },
        },
      ],
    });
    $(document).ready(function () {
      const legendHTML = myChart.generateLegend().prop("outerHTML");
      document.getElementById("chart-legends").innerHTML = legendHTML;
    });
  });
};
