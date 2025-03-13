(function() {
    // Original data
    let xdata = ["16-03-2023","17-03-2023","18-03-2023","19-03-2023","20-03-2023","21-03-2023","22-03-2023","23-03-2023","24-03-2023","25-03-2023","26-03-2023","27-03-2023","28-03-2023","29-03-2023","30-03-2023","31-03-2023","01-04-2023","02-04-2023","03-04-2023","04-04-2023","05-04-2023","06-04-2023","07-04-2023","08-04-2023","09-04-2023","10-04-2023","11-04-2023","12-04-2023","13-04-2023","14-04-2023","15-04-2023","16-04-2023","17-04-2023","18-04-2023","19-04-2023","20-04-2023","21-04-2023","22-04-2023","23-04-2023","24-04-2023","25-04-2023","26-04-2023","27-04-2023","28-04-2023","29-04-2023","30-04-2023","01-05-2023","02-05-2023","03-05-2023","04-05-2023","05-05-2023","06-05-2023","07-05-2023","08-05-2023","09-05-2023","10-05-2023","11-05-2023","12-05-2023","13-05-2023","14-05-2023","15-05-2023","16-05-2023","17-05-2023","18-05-2023","19-05-2023","20-05-2023","21-05-2023","22-05-2023","23-05-2023","24-05-2023","25-05-2023","26-05-2023","27-05-2023","28-05-2023","29-05-2023","30-05-2023","31-05-2023","01-06-2023","02-06-2023","03-06-2023","04-06-2023","05-06-2023","06-06-2023","07-06-2023","08-06-2023","09-06-2023","10-06-2023","11-06-2023","12-06-2023","13-06-2023","14-06-2023","15-06-2023","16-06-2023","17-06-2023","18-06-2023","19-06-2023","20-06-2023","21-06-2023","22-06-2023","23-06-2023","24-06-2023","25-06-2023","26-06-2023","27-06-2023","28-06-2023","29-06-2023","30-06-2023","01-07-2023","02-07-2023","03-07-2023","04-07-2023","05-07-2023","06-07-2023","07-07-2023","08-07-2023","09-07-2023","10-07-2023","11-07-2023","12-07-2023","13-07-2023","14-07-2023","15-07-2023","16-07-2023","17-07-2023","18-07-2023","19-07-2023","20-07-2023","21-07-2023","22-07-2023","23-07-2023","24-07-2023","25-07-2023","26-07-2023","27-07-2023","28-07-2023","29-07-2023","30-07-2023","31-07-2023","01-08-2023","02-08-2023","03-08-2023","04-08-2023","05-08-2023","06-08-2023","07-08-2023","08-08-2023","09-08-2023","10-08-2023","11-08-2023","12-08-2023","13-08-2023","14-08-2023","15-08-2023","16-08-2023","17-08-2023","18-08-2023","19-08-2023","20-08-2023","21-08-2023","22-08-2023","23-08-2023","24-08-2023","25-08-2023","26-08-2023","27-08-2023","28-08-2023","29-08-2023","30-08-2023","31-08-2023","01-09-2023","02-09-2023","03-09-2023","04-09-2023","05-09-2023","06-09-2023","07-09-2023","08-09-2023","09-09-2023","10-09-2023","11-09-2023","12-09-2023","13-09-2023","14-09-2023","15-09-2023","16-09-2023","17-09-2023","18-09-2023","19-09-2023","20-09-2023","21-09-2023","22-09-2023","23-09-2023","24-09-2023","25-09-2023","26-09-2023","27-09-2023","28-09-2023","29-09-2023","30-09-2023","01-10-2023","02-10-2023","03-10-2023","04-10-2023","05-10-2023","06-10-2023","07-10-2023","08-10-2023","09-10-2023","10-10-2023","11-10-2023","12-10-2023","13-10-2023","14-10-2023","15-10-2023","16-10-2023","17-10-2023","18-10-2023","19-10-2023","20-10-2023","21-10-2023","22-10-2023","23-10-2023","24-10-2023","25-10-2023","26-10-2023","27-10-2023","28-10-2023","29-10-2023","30-10-2023","31-10-2023","01-11-2023","02-11-2023","03-11-2023","04-11-2023","05-11-2023","06-11-2023","07-11-2023","08-11-2023","09-11-2023","10-11-2023","11-11-2023","12-11-2023","13-11-2023","14-11-2023","15-11-2023","16-11-2023","17-11-2023","18-11-2023","19-11-2023","20-11-2023","21-11-2023","22-11-2023","23-11-2023","24-11-2023","25-11-2023","26-11-2023","27-11-2023","28-11-2023","29-11-2023","30-11-2023","01-12-2023","02-12-2023","03-12-2023","04-12-2023","05-12-2023","06-12-2023","07-12-2023","08-12-2023","09-12-2023","10-12-2023","11-12-2023","12-12-2023","13-12-2023","14-12-2023","15-12-2023","16-12-2023","17-12-2023","18-12-2023","19-12-2023","20-12-2023","21-12-2023","22-12-2023","23-12-2023","24-12-2023","25-12-2023","26-12-2023","27-12-2023","28-12-2023","29-12-2023","30-12-2023","31-12-2023","01-01-2024","02-01-2024","03-01-2024","04-01-2024","05-01-2024","06-01-2024","07-01-2024","08-01-2024","09-01-2024","10-01-2024","11-01-2024","12-01-2024","13-01-2024","14-01-2024","15-01-2024","16-01-2024","17-01-2024","18-01-2024","19-01-2024","20-01-2024","21-01-2024","22-01-2024","23-01-2024","24-01-2024","25-01-2024","26-01-2024","27-01-2024","28-01-2024","29-01-2024","30-01-2024","31-01-2024","01-02-2024","02-02-2024","03-02-2024","04-02-2024","05-02-2024","06-02-2024","07-02-2024","08-02-2024","09-02-2024","10-02-2024","11-02-2024","12-02-2024","13-02-2024","14-02-2024","15-02-2024","16-02-2024","17-02-2024","18-02-2024","19-02-2024","20-02-2024","21-02-2024","22-02-2024","23-02-2024","24-02-2024","25-02-2024","26-02-2024","27-02-2024","28-02-2024","29-02-2024","01-03-2024","02-03-2024","03-03-2024","04-03-2024","05-03-2024","06-03-2024","07-03-2024","08-03-2024","09-03-2024","10-03-2024","11-03-2024","12-03-2024","13-03-2024","14-03-2024","15-03-2024","16-03-2024","17-03-2024","18-03-2024","19-03-2024","20-03-2024","21-03-2024","22-03-2024","23-03-2024","24-03-2024","25-03-2024","26-03-2024","27-03-2024","28-03-2024","29-03-2024","30-03-2024","31-03-2024","01-04-2024","02-04-2024","03-04-2024","04-04-2024","05-04-2024","06-04-2024","07-04-2024","08-04-2024","09-04-2024","10-04-2024","11-04-2024","12-04-2024","13-04-2024","14-04-2024","15-04-2024","16-04-2024","17-04-2024","18-04-2024","19-04-2024","20-04-2024","21-04-2024","22-04-2024","23-04-2024","24-04-2024","25-04-2024","26-04-2024","27-04-2024","28-04-2024","29-04-2024","30-04-2024","01-05-2024","02-05-2024","03-05-2024","04-05-2024","05-05-2024","06-05-2024","07-05-2024","08-05-2024","09-05-2024","10-05-2024","11-05-2024","12-05-2024","13-05-2024","14-05-2024","15-05-2024","16-05-2024","17-05-2024","18-05-2024","19-05-2024","20-05-2024","21-05-2024","22-05-2024","23-05-2024","24-05-2024","25-05-2024","26-05-2024","27-05-2024","28-05-2024","29-05-2024","30-05-2024","31-05-2024","01-06-2024","02-06-2024","03-06-2024","04-06-2024","05-06-2024","06-06-2024","07-06-2024","08-06-2024","09-06-2024","10-06-2024","11-06-2024","12-06-2024","13-06-2024","14-06-2024","15-06-2024","16-06-2024","17-06-2024","18-06-2024","19-06-2024","20-06-2024","21-06-2024","22-06-2024","23-06-2024","24-06-2024","25-06-2024","26-06-2024","27-06-2024","28-06-2024","29-06-2024","30-06-2024","01-07-2024","02-07-2024","03-07-2024","04-07-2024","05-07-2024","06-07-2024","07-07-2024","08-07-2024","09-07-2024","10-07-2024","11-07-2024","12-07-2024","13-07-2024","14-07-2024","15-07-2024","16-07-2024","17-07-2024","18-07-2024","19-07-2024","20-07-2024","21-07-2024","22-07-2024","23-07-2024","24-07-2024","25-07-2024","26-07-2024","27-07-2024","28-07-2024","29-07-2024"];
    let ydata = [17,5,2,3,5,39,8,5,6,5,27,17,7,89,49,17,29,14,5,18,9,71,27,17,12,14,16,40,45,37,34,18,52,4,6,3,0,19,10,31,11,53,59,75,30,27,23,3,28,49,33,25,6,48,5,36,53,43,21,9,29,99,44,88,23,59,32,20,26,16,0,8,27,18,8,0,0,3,6,43,4,12,25,11,67,16,16,13,5,8,1,22,14,23,10,21,26,23,24,23,3,22,5,26,9,43,0,5,18,10,20,10,71,20,7,7,42,11,7,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,4,7,3,14,8,8,1,11,10,11,73,40,0,4,3,7,4,31,37,28,9,5,10,10,9,9,23,3,2,18,38,14,35,29,26,9,0,10,11,25,7,6,7,7,1,18,12,10,3,2,3,5,3,15,32,8,7,27,22,27,11,10,4,1,1,2,14,18,6,6,6,13,15,30,25,14,4,7,5,2,6,25,11,28,12,14,10,27,45,19,15,9,10,21,37,70,38,60,56,58,46,35,65,44,76,70,54,42,59,70,50,45,29,32,72,57,77,52,59,74,63,86,43,90,109,66,65,36,37,61,30,39,50,24,31,29,32,46,62,39,42,71,76,45,73,75,57,78,76,80,75,98,79,63,36,49,74,53,57,72,77,57,78,74,63,74,68,65,74,66,40,137,145,131,62,77,101,83,171,86,80,59,57,124,58,102,118,98,79,80,79,112,139,193,155,277,251,206,145,198,213,210,135,188,126,202,143,187,150,132,141,127,111,103,133,112,150,80,115,130,120,130,109,98,127,70,85,120,159,113,145,121,81,106,112,129,93,112,111,173,146,194,186,189,229,166,181,233,248,202,209,151,213,180,153,245,199,155,140,125,254,166,198,164,150,95,162,106,128,142,142,133,122,162,147,151,115,185,175,142,162,131,155,138,145,119,233,136,152,268,201,157,171,155,156,113,159,142,149,122,129,121,127,204,124,164,162,119,138,111,153,140,145,158,113,98,107,151,239,159,136,156,112,114,155,203,172,158,121,139,126,272,148,121,169,123,137,130,268,226,143,175,226,166,184,270,205,138,186,196,160,131,365,243,241,253,278,284,223,262,221,232,165,223,235];

    var minX = Math.max(0, xdata.length - 6);
    var maxX = xdata.length;
    var currentXData = xdata;  
    var currentYData = ydata;  

    // Helper function to parse date strings
    function parseDate(dateStr) {
        let [day, month, year] = dateStr.split("-");
        return new Date(year, month - 1, day);
    }

    // Unified function to aggregate data by month, six months, or year
    function aggregateData(xdata, ydata, type) {
        let aggregatedData = {};
        for (let i = 0; i < xdata.length; i++) {
            let date = parseDate(xdata[i]);
            let key;

            if (type === "month") {
                key = date.toLocaleString('default', { month: 'short' }) + "-" + date.getFullYear();
            } else if (type === "six_months") {
                let halfYear = Math.floor((date.getMonth() + 1) / 6) + 1;
                key = (halfYear === 1 ? "Jan-Jun" : "Jul-Dec") + "-" + date.getFullYear();
            } else if (type === "year") {
                key = "Year-" + date.getFullYear();
            }

            if (!aggregatedData[key]) {
                aggregatedData[key] = 0;
            }
            aggregatedData[key] += ydata[i];
        }

        return {
            xdata: Object.keys(aggregatedData),
            ydata: Object.values(aggregatedData)
        };
    }

    // Function to update chart with the current data
    function updateChart(xdata, ydata) {
        currentXData = xdata;  // Update the currentXData to the new aggregated data
        currentYData = ydata;
        var mx
        if (Math.max(0, xdata.length - 6) === 0){
            mx = 1
        }else{
            mx = Math.max(0, xdata.length - 6)
        }
        chart.updateOptions({
            xaxis: {
                categories: xdata,
                min: mx,
                max: xdata.length,
            },
            series: [{
                name: "Snatches",
                data: ydata
            }]
        });
    }

    // Initial chart setup with last 7 values
    var chart = new ApexCharts(document.querySelector("#area-chart-datetime"), {
        chart: {
            type: "area",
            height: 350,
            toolbar: {
                tools: {
                    customIcons: [
                        {
                            icon: '<span class="mdi mdi-chevron-left"></span>', 
                            title: 'Scroll Left',
                            index: -5,
                            class: 'sbtn',
                            click: function(chartContext, options, e) {
                                if (minX > 0) {
                                    minX = Math.max(minX - scrollStep, 0);
                                    maxX = Math.max(maxX - scrollStep, scrollStep);
                                    updateVisibleRange(minX, maxX);
                                }
                            }
                        },
                        {
                            icon: '<span class="mdi mdi-chevron-right"></span>', 
                            title: 'Scroll Right',
                            index: -4,
                            class: 'sbtn',
                            click: function(chartContext, options, e) {
                                if (maxX < currentXData.length) {  // Use currentXData for scrolling
                                    minX = Math.min(minX + scrollStep, currentXData.length - scrollStep);
                                    maxX = Math.min(maxX + scrollStep, currentXData.length);
                                    updateVisibleRange(minX, maxX);
                                }
                            }
                        }
                    ],
                    zoom: true,       
                    zoomin: false,     
                    zoomout: false,     
                    pan: true,         
                    reset: true 
                },
                autoSelected: 'pan'
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 3,
            curve: "smooth"
        },
        series: [{
            name: "Snatches",
            data: ydata
        }],
        markers: {
            size: 4,
            style: "circle",
        },
        xaxis: {
            categories: xdata,
            type: "category", // Use 'category' for custom labels
            min: minX,
            max: maxX,
        },
        yaxis: {
            min: 0
        },
        tooltip: {
            x: {
                format: "dd MMM yyyy"
            }
        },
        colors: ["#727cf5"],
        fill: {
            type: "gradient",
        }
    });

    // Render the chart with the last 7 values
    chart.render();

    // Scroll step defines how many points to scroll per click
    var scrollStep = 7; 

    // Function to update the chart's visible range using the currentXData
    function updateVisibleRange(minX, maxX) {
        console.log(minX);
        console.log(maxX);
        if (minX === 0){
            minX = 1;
        }

        chart.updateOptions({
            xaxis: {
                categories: currentXData,  // Use the currentXData for correct x-axis labels
                type: "category",
                min: minX,
                max: maxX,
            }
        });
    }

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
    document.querySelector("#one_month").addEventListener("click", function() {
        setActiveButton("#one_month");
        let monthlyData = aggregateData(xdata, ydata, "month");
        minX = Math.max(0, monthlyData.xdata.length - 6);  // Adjust minX after aggregation
        maxX = monthlyData.xdata.length;
        updateChart(monthlyData.xdata, monthlyData.ydata);
    });

    document.querySelector("#six_months").addEventListener("click", function() {
        setActiveButton("#six_months");
        let sixMonthsData = aggregateData(xdata, ydata, "six_months");
        minX = Math.max(0, sixMonthsData.xdata.length - 6);  // Adjust minX after aggregation
        maxX = sixMonthsData.xdata.length;
        updateChart(sixMonthsData.xdata, sixMonthsData.ydata);
    });

    document.querySelector("#one_year").addEventListener("click", function() {
        setActiveButton("#one_year");
        let yearlyData = aggregateData(xdata, ydata, "year");
        minX = Math.max(0, yearlyData.xdata.length - 6);  // Adjust minX after aggregation
        maxX = yearlyData.xdata.length;
        updateChart(yearlyData.xdata, yearlyData.ydata);
    }); 

    document.querySelector("#all").addEventListener("click", function() {
        setActiveButton("#all");
        minX = Math.max(0, xdata.length - 6); 
        maxX = xdata.length;
        updateChart(xdata, ydata);
    }); 

})();


// Chart2
 
 
(function() {
    ["#727cf5", "#0acf97", "#fa5c7c", "#6c757d", "#39afd1"]
    , dataColors = $("#stacked-bar").data("colors")
    , options2 = {
      chart: {
          height: 380,
          type: "donut",
          stacked: !0,    
          // stackType: "100%",
          toolbar: {
              show: !1
          }
      },
      plotOptions: {
          bar: {
              horizontal: !1
          }
      },
      stroke: {
          show: !1
      },
      series: [{
          name: "SingleFile",
          data: [177,218,189,187,140,177,186]
      }, {
          name: "BatchFiles",
          data: [46,44,27,45,23,43,46]
      }, {
          name: "SetFiles",
          data: [0,0,5,0,2,2,3]
      }, {
          name: "WebSingle",
          data: [0,0,0,0,0,0,0]   
      }, {
          name: "WebBatch",
          data: [0,0,0,0,0,0,0]
      }, {
          name: "FreeSingle",
          data: [0,0,0,0,0,0,0]   
      }, {
          name: "FreeBatch",
          data: [0,0,0,0,0,0,0]
      }],
      xaxis: {
          categories: ["23-07-2024","24-07-2024","25-07-2024","26-07-2024","27-07-2024","28-07-2024","29-07-2024"],
          labels: {
              formatter: function(o) {
                  return o + "K"
              }
          },
          axisBorder: {
              show: !1
          }
      },
      yaxis: {
          title: {
              text: void 0
          }
      },
      colors: colors = dataColors ? dataColors.split(",") : colors,
      tooltip: {
          y: {
              formatter: function(o) {
                  return o + "K"
              }
          }
      },
      fill: {
          opacity: 1
      },
      states: {
          hover: {
              filter: "none"
          }
      },
      legend: {
          position: "top",
          horizontalAlign: "center",
          offsetY: 10
      },
      grid: {
          borderColor: "#f1f3fa"
      },
      dataLabels: {
          enabled: true
      },
  }
    , colors = (chart2 = new ApexCharts(document.querySelector("#stacked-bar"),options2)).render()
})();
