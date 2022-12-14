import React from "react";
import Chart from "chart.js";

export default function GrafikIMTLakiLaki() {
  React.useEffect(() => {
    var config = {
      type: "line",
      data: {
        labels: [
          "25",
          "26",
          "27",
          "28",
          "29",
          "30",
          "31",
          "32",
          "33",
          "34",
          "35",
          "36",
          "37",
          "38",
          "39",
          "40",
          "41",
          "42",
          "43",
          "44",
          "45",
          "46",
          "47",
          "48",
          "49",
          "50",
          "51",
          "52",
          "53",
          "54",
          "55",
          "56",
          "57",
          "58",
          "59",
          "60",
        ],
        datasets: [
          {
            label: "-3 SD",
            fill: false,

            backgroundColor: "	#880808",
            borderColor: "	#880808",
            data: [
              12.8, 12.8, 12.8, 12.7, 12.7, 12.7, 12.6, 12.6, 12.5, 12.5, 12.5,
              12.4, 12.4, 12.4, 12.3, 12.3, 12.3, 12.2, 12.2, 12.2, 12.2, 12.2,
              12.1, 12.1, 12.1, 12.1, 12.1, 12.1, 12, 12, 12, 12, 12, 12, 12,
              12, 12,
            ],
          },
          {
            label: "-2 SD",
            backgroundColor: "#880808",
            borderColor: "#880808",
            data: [
              13.8, 13.7, 13.7, 13.6, 13.6, 13.6, 13.5, 13.5, 13.5, 13.4, 13.4,
              13.4, 13.3, 13.3, 13.3, 13.2, 13.2, 13.2, 13.2, 13.1, 13.1, 13.1,
              13.1, 13.1, 13, 13, 13, 13, 13, 13, 13, 12.9, 12.9, 12.9, 12.9,
              12.9,
            ],
            fill: false,
          },
          {
            label: "-1 SD",
            fill: false,
            backgroundColor: "#4c51bf",
            borderColor: "#4c51bf",
            data: [
              14.8, 14.8, 14.7, 14.7, 14.7, 14.6, 14.6, 14.6, 14.5, 14.5, 14.5,
              14.4, 14.4, 14.4, 14.3, 14.3, 14.3, 14.3, 14.2, 14.2, 14.2, 14.2,
              14.2, 14.1, 14.1, 14.1, 14.1, 14.1, 14.1, 14, 14, 14, 14, 14, 14,
              14,
            ],
          },
          {
            label: "Standar",
            backgroundColor: "#fff",
            borderColor: "#fff",
            data: [
              16, 15.9, 15.9, 15.9, 15.8, 15.8, 15.8, 15.7, 15.7, 15.7, 15.6,
              15.6, 15.6, 15.5, 15.5, 15.5, 15.5, 15.4, 15.4, 15.4, 15.4, 15.4,
              15.3, 15.3, 15.3, 15.3, 15.3, 15.3, 15.3, 15.3, 15.2, 15.2, 15.2,
              15.2, 15.2, 15.2,
            ],
            fill: false,
          },
          {
            label: "+1 SD",
            fill: false,
            backgroundColor: "#4c51bf",
            borderColor: "#4c51bf",
            data: [
              17.3, 17.3, 17.2, 17.2, 17.1, 17.1, 17.1, 17, 17, 17, 16.9, 16.9,
              16.9, 16.8, 16.8, 16.8, 16.8, 16.8, 16.7, 16.7, 16.7, 16.7, 16.7,
              16.7, 16.7, 16.7, 16.6, 16.6, 16.6, 16.6, 16.6, 16.6, 16.6, 16.6,
              16.6, 16.6,
            ],
          },
          {
            label: "+2 SD",
            fill: false,
            backgroundColor: "#4c51bf",
            borderColor: "#4c51bf",
            data: [
              18.8, 18.8, 18.7, 18.7, 18.6, 18.6, 18.5, 18.5, 18.5, 18.4, 18.4,
              18.4, 18.3, 18.3, 18.3, 18.2, 18.2, 18.2, 18.2, 18.2, 18.2, 18.2,
              18.2, 18.2, 18.2, 18.2, 18.2, 18.2, 18.2, 18.2, 18.2, 18.2, 18.2,
              18.3, 18.3, 18.3,
            ],
          },
          {
            label: "+3 SD",
            fill: false,
            backgroundColor: "	#880808",
            borderColor: "	#880808",
            data: [
              20.5, 20.5, 20.4, 20.4, 20.3, 20.2, 20.2, 20.1, 20.1, 20, 20, 20,
              19.9, 19.9, 19.9, 19.9, 19.9, 19.8, 19.8, 19.8, 19.8, 19.8, 19.9,
              19.9, 19.9, 19.9, 19.9, 19.9, 20, 20, 20, 20.1, 20.1, 20.2, 20.2,
              20.3,
            ],
          },
        ],
      },

      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Sales Charts",
          fontColor: "white",
        },
        legend: {
          labels: {
            fontColor: "white",
          },
          align: "end",
          position: "bottom",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: false,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "white",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Year",
                fontColor: "white",
              },
              gridLines: {
                display: false,
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(0, 0, 0, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "rgba(255,255,255,.7)",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "IMT",
                fontColor: "white",
              },
              gridLines: {
                borderDash: [3],
                borderDashOffset: [3],
                drawBorder: false,
                color: "rgba(255, 255, 255, 0.15)",
                zeroLineColor: "rgba(33, 37, 41, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    var ctx = document.getElementById("grafikIMT").getContext("2d");
    window.myLine = new Chart(ctx, config);
  }, []);
  return (
    <>
      <div className="grafikLakiContainer">
        <div className="">
          <div className="">
            <div className="">
              <h6 className="">Standar IMT anak laki-laki menurut Umur</h6>
              <h2 className="text-white text-xl font-semibold">
                Grafik IMT/Bulan
              </h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-350-px">
            <canvas id="grafikIMT"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
