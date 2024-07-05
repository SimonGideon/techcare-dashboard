export const legendCustomPlugin = {
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
              <div class="d-flex  bold align-items-center gap-1">
                <span class="legend-color" style="background-color: ${legendColor};"></span>
                ${labelText}
              </div>
              <p>${value}</p>
              <div class="d-flex caret align-items-center gap-1">
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
};
