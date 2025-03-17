document.addEventListener("DOMContentLoaded", function() {
    let colors = ["#727cf5", "#0acf97", "#fa5c7c", "#6c757d", "#39afd1"];
    // Bar Chart (Chart1)cls
    let barOptions = {
        chart: {
            height: 380, 
            type: "bar"
        },
        series: [{
            name: "Error Records",
            data: []
        }],
        xaxis: {
            categories: []
        },
        colors: colors,
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "60%"
            }
        },
        tooltip: {
            y: {
                formatter: function(val) {
                    return val + " Errors";
                }
            }
        }
    };
    let barChart = new ApexCharts(document.querySelector("#chart1"), barOptions);
    barChart.render();
    function updateChart(system) {
        let dataMap = {
            "meter": """+str(meter)+""",
            "solar": """+str(solar)+""",
            "ev": """+str(ev)+""",
            "essentials": """+str(essentials)+"""
        };
        let categories = """+str(cols)+""";
        barChart.updateOptions({
            xaxis: { categories: categories }
        });
        barChart.updateSeries([{
            name: "Error Records",
            data: dataMap[system]
        }]);
    }

    document.getElementById("meter").addEventListener("click", function() {
        updateChart("meter");
    });
    document.getElementById("solar").addEventListener("click", function() {
        updateChart("solar");
    });
    document.getElementById("ev").addEventListener("click", function() {
        updateChart("ev");
    });
    document.getElementById("essentials").addEventListener("click", function() {
        updateChart("essentials");
    });
    updateChart("meter");

    // Donut Chart (Chart2)
    let donutOptions = {
        chart: {
            height: 380, 
            type: "donut"
        },
        series: [
            """+str(sum(meter))+""", // Meter Management
            """+str(sum(solar))+""", // Solar
            """+str(sum(ev))+""", // EV
            """+str(sum(essentials))+"""  // Essentials
        ],
        labels: ["Meter Management", "Solar", "EV", "Essentials"],
        colors: colors,
        dataLabels: { enabled: false },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    height: 380
                },
                legend: { show: false }
            }
        }],
        legend: {
            position: 'right',
            offsetY: 0,
            height: 230,
        },
        tooltip: {
            y: {
                formatter: function(val) {
                    return val + " Records";
                }
            }
        },
        plotOptions: {
            pie: {
                donut: {
                    size: "70%"
                }
            }
        }
    };

    let donutChart = new ApexCharts(document.querySelector("#donut-chart"), donutOptions);
    donutChart.render();
});

// Function to update the active button
function setActiveButton(buttonId) {
    var buttons = document.querySelectorAll("button");
    buttons.forEach(function (button) {
        button.classList.remove("active");
    });
    if (buttonId) {
        document.querySelector(buttonId).classList.add("active");
    }
}

// Event listeners for buttons
document.querySelector("#meter").addEventListener("click", function() {
    setActiveButton("#meter");
});

document.querySelector("#solar").addEventListener("click", function() {
    setActiveButton("#solar");
});

document.querySelector("#ev").addEventListener("click", function() {
    setActiveButton("#ev");
}); 

document.querySelector("#essentials").addEventListener("click", function() {
    setActiveButton("#essentials");
}); 
