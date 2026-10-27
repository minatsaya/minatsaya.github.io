const logList = document.getElementById("logList");
const logTitle = document.getElementById("logTitle");
const logContent = document.getElementById("logContent");

async function loadLogs() {
  try {
    const response = await fetch("data/logs.json");
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const logData = await response.json();
    logList.addEventListener("click", (event) => {
      const item = event.target.closest("[data-id]");
      if (!item) return;

      const log = logData[item.dataset.id];
      if (!log) return;

      logTitle.textContent = log.title;
      logContent.textContent = log.content;

      logList.querySelectorAll(".log-item").forEach((logItem) => {
        logItem.setAttribute("aria-current", String(logItem === item));
      });
    });

    Object.entries(logData).forEach(([id, log]) => {
      const item = document.createElement("li");
      const button = document.createElement("button");
      button.className = "log-item";
      button.dataset.id = id;
      button.type = "button";
      button.textContent = log.title;
      item.appendChild(button);
      logList.appendChild(item);
    });
  } catch (error) {
    console.error("Unable to load log data:", error);
    logList.textContent = "Unable to load logs.";
  }
}

loadLogs();
