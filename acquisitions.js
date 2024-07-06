import Chart from "chart.js/auto";

(async function () {
  const data = [
    { year: "Jan", count: 50 },
    { year: "Feb", count: 70 },
    { year: "Mar", count: 30 },
    { year: "Apr", count: 20 },
    { year: "May", count: 60 },
    { year: "June", count: 68 },
    { year: "July", count: 10 },
    { year: "Aug", count: 12 },
    { year: "Sep", count: 99 },
    { year: "Oct", count: 50 },
    { year: "Nov", count: 44 },
    { year: "Dec", count: 70 },
  ];

  new Chart(document.getElementById("acquisitions"), {
    type: "bar",
    data: {
      labels: data.map((row) => row.year),
      datasets: [
        {
          backgroundColor: "#D0E4FF",
          label: "Expense",
          data: data.map((row) => row.count),
        },
      ],
    },
  });
})();
