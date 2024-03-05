
const mockData = {
  totalParticipants: 100,
  completionRate: 75,
  averageScore: 85,
  scoreDistribution: [10, 20, 30, 25, 15], 
};


function updateSummaryAndChart(data) {
  document.getElementById("totalParticipants").textContent = data.totalParticipants;
  document.getElementById("completionRate").textContent = data.completionRate + "%";
  document.getElementById("averageScore").textContent = data.averageScore;

  const ctx = document.getElementById("scoreChart").getContext("2d");
  const scoreChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["A", "B", "C", "D", "F"],
      datasets: [{
        label: "Score Distribution",
        data: data.scoreDistribution,
        backgroundColor: "rgba(75, 192, 192, 0.2)", 
        borderColor: "rgba(75, 192, 192, 1)", 
      }],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}


function applyFilters() {
  const selectedExam = document.getElementById("examFilter").value;
  const selectedDate = document.getElementById("dateFilter").value;
  const filteredData = fetchData(selectedExam, selectedDate); 
  updateSummaryAndChart(filteredData);
}


function exportToPDF() {
  alert("Export to PDF...");
}


function exportToExcel() {
  alert("Export to Excel...");
}

updateSummaryAndChart(mockData);
