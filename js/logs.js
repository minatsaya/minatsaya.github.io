// Sample log data
const logData = {
  1: {
    title: "Log Entry 1 - Feb 18, 2025",
    content: "This is the content of Log Entry 1. It contains details about today's progress."
  },
  2: {
    title: "Log Entry 2 - Feb 17, 2025",
    content: "This is the content of Log Entry 2. Discussing yesterday's key moments."
  },
  3: {
    title: "Log Entry 3 - Feb 16, 2025",
    content: "This is the content of Log Entry 3. Some thoughts and reflections."
  }
};

// Get elements
const logItems = document.querySelectorAll(".log-item");
const sidePanel = document.getElementById("sidePanel");
const overlay = document.getElementById("overlay");
const closePanelBtn = document.getElementById("closePanel");
const logTitle = document.getElementById("logTitle");
const logContent = document.getElementById("logContent");

// Open panel and update content
logItems.forEach((item) => {
  item.addEventListener("click", () => {
    const logId = item.getAttribute("data-id");

    if (logData[logId]) {
      logTitle.textContent = logData[logId].title;
      logContent.textContent = logData[logId].content;

      // Show side panel and overlay
      sidePanel.classList.add("active");
      overlay.classList.add("active");
    }
  });
});

// Close panel function
function closePanel() {
  sidePanel.classList.remove("active");
  overlay.classList.remove("active");

  // Clear the content when the panel is closed
  logTitle.textContent = "";
  logContent.textContent = "";
}

// Event listeners for closing the panel
closePanelBtn.addEventListener("click", closePanel);
overlay.addEventListener("click", closePanel);