import React from "react";
import Chart from "chart.js";

export default function GrafikBBLakiLaki() {
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

            backgroundColor: "#4c51bf",
            borderColor: "#4c51bf",
            data: [
              8.8, 8.9, 9.0, 9.1, 9.2, 9.4, 9.5, 9.6, 9.7, 9.8, 9.9, 10.0, 10.1,
              10.2, 10.3, 10.4, 10.5, 10.6, 10.7, 10.8, 10.9, 11.0, 11.1, 11.2,
              11.3, 11.4, 11.5, 11.6, 11.7, 11.8, 11.9, 12.0, 12.1, 12.2, 12.3,
              12.4,
            ],
          },
          {
            label: "-2 SD",
            backgroundColor: "#4c51bf",
            borderColor: "#4c51bf",
            data: [
              9.8, 10.0, 10.1, 10.2, 10.4, 10.5, 10.7, 10.8, 10.9, 11.0, 11.2,
              11.3, 11.4, 11.5, 11.6, 11.8, 11.9, 12.0, 12.1, 12.2, 12.4, 12.5,
              12.6, 12.7, 12.8, 12.9, 13.1, 13.2, 13.3, 13.4, 13.5, 13.6, 13.7,
              13.8, 14.0, 14.1,
            ],
            fill: false,
          },
          {
            label: "-1 SD",
            fill: false,
            backgroundColor: "#4c51bf",
            borderColor: "#4c51bf",
            data: [
              11.0, 11.2, 11.3, 11.5, 11.7, 11.8, 12.0, 12.1, 12.3, 12.4, 12.6,
              12.7, 12.9, 13.0, 13.1, 13.3, 13.4, 13.6, 13.7, 13.8, 14.0, 14.1,
              14.3, 14.4, 14.5, 14.7, 14.8, 15.0, 15.1, 15.2, 15.4, 15.5, 15.6,
              15.8, 15.9, 16.0,
            ],
          },
          {
            label: "Standar",
            backgroundColor: "#fff",
            borderColor: "#fff",
            data: [
              12.4, 12.5, 12.7, 12.9, 13.1, 13.3, 13.5, 13.7, 13.8, 14.0, 14.2,
              14.3, 14.5, 14.7, 14.8, 15.0, 15.2, 15.3, 15.5, 15.7, 15.8, 16.0,
              16.2, 16.3, 16.5, 16.7, 16.8, 17.0, 17.2, 17.3, 17.5, 17.7, 17.8,
              18.0, 18.2, 18.3,
            ],
            fill: false,
          },
          {
            label: "+1 SD",
            fill: false,
            backgroundColor: "#4c51bf",
            borderColor: "#4c51bf",
            data: [
              13.9, 14.1, 14.3, 14.5, 14.8, 15.0, 15.2, 15.4, 15.6, 15.8, 16.0,
              16.2, 16.4, 16.6, 16.8, 17.0, 17.2, 17.4, 17.6, 17.8, 18.0, 18.2,
              18.4, 18.6, 18.8, 19.0, 19.2, 19.4, 19.6, 19.8, 20.0, 20.2, 20.4,
              20.6, 20.8, 21.0,
            ],
          },
          {
            label: "+2 SD",
            fill: false,
            backgroundColor: "#4c51bf",
            borderColor: "#4c51bf",
            data: [
              15.5, 15.8, 16.1, 16.3, 16.6, 16.9, 17.1, 17.4, 17.6, 17.8, 18.1,
              18.3, 18.6, 18.8, 19.0, 19.3, 19.5, 19.7, 20.0, 20.2, 20.5, 20.7,
              20.9, 21.2, 21.4, 21.7, 21.9, 22.2, 22.4, 22.7, 22.9, 23.2, 23.4,
              23.7, 23.9, 24.2,
            ],
          },
          {
            label: "+3 SD",
            fill: false,
            backgroundColor: "#4c51bf",
            borderColor: "#4c51bf",
            data: [
              17.5, 17.8, 18.1, 18.4, 18.7, 19.0, 19.3, 19.6, 19.9, 20.2, 20.4,
              20.7, 21.0, 21.3, 21.6, 21.9, 22.1, 22.4, 22.7, 23.0, 23.3, 23.6,
              23.9, 24.2, 24.5, 24.8, 25.1, 25.4, 25.7, 26.0, 26.3, 26.6, 26.9,
              27.2, 27.6, 27.9,
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
                labelString: "KiloGram",
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
    var ctx = document.getElementById("grafikBeratBadan").getContext("2d");
    window.myLine = new Chart(ctx, config);
  }, []);
  return (
    <>
      <div className="grafikLakiContainer">
        <div className="">
          <div className="">
            <div className="">
              <h6 className="">
                Standar Berat Badan anak laki-laki menurut Umur
              </h6>
              <h2 className="text-white text-xl font-semibold">
                Grafik Kg/Bulan
              </h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-350-px">
            <canvas id="grafikBeratBadan"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
