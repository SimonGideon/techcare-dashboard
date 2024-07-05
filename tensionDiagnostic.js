export const renderTension = (tensionData, container) => {
  const containerElement = $(container);

  // Clear any existing content in the container
  containerElement.empty();
  const presData = tensionData.slice(-1)[0];

  console.log("PresData:", presData);

  const { heart_rate, respiratory_rate, temperature } = presData;
  const tensionItem = $(`
    <div class="tension-item p-4">
      <img class="lattar" src="./assets/respiratory_rate.svg" alt="respiratory" />
      <div class="mt-2">
        <h5>Respiratory Rate</h5>
        <p>${respiratory_rate.value} BPM</p>
      </div>
      <p class="status">${respiratory_rate.levels}</p>
    </div>
    <div class="tension-item p-4">
      <img class="lattar" src="./assets/temperature.svg" alt="temperature" />
      <div class="mt-2">
        <h5>Temperature</h5>
        <p>${temperature.value} °F</p>
      </div>
      <p class="status">${temperature.levels}</p>
    </div>
    <div class="tension-item p-4">
      <img class="lattar" src="./assets/HeartBPM.svg" alt="heartBPM" />
      <div class="mt-2">
        <h5>Heart Rate</h5>
        <p>${heart_rate.value} BPM</p>
      </div>
      <p class="status">${heart_rate.levels}</p>
    </div>
  `);

  containerElement.append(tensionItem);
};
