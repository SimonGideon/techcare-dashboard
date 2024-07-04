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
    new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Systolic",
            data: systolicData,
            borderColor: "rgba(255, 99, 132, 1)",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            yAxisID: "y-axis-1",
          },
          {
            label: "Diastolic",
            data: diastolicData,
            borderColor: "rgba(54, 162, 235, 1)",
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            yAxisID: "y-axis-2",
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
          },
          y: {
            display: true,
            title: {
              display: true,
              text: "Blood Pressure",
            },
            position: "left",
            grid: {
              drawBorder: false,
            },
          },
          "y-axis-1": {
            type: "linear",
            display: true,
            position: "left",
            title: {
              display: true,
              text: "Systolic",
            },
            grid: {
              drawBorder: false,
            },
          },
          "y-axis-2": {
            type: "linear",
            display: true,
            position: "right",
            title: {
              display: true,
              text: "Diastolic",
            },
            grid: {
              drawBorder: false,
            },
          },
        },
      },
    });
  });
};
