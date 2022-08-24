import React from "react";
import Chart from "chart.js";

export default function GrafikBBPerempuan() {
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
              8.2, 8.4, 8.5, 8.6, 8.8, 8.9, 9, 9.1, 9.3, 9.4, 9.5, 9.6, 9.7,
              9.8, 9.9, 10.1, 10.2, 10.3, 10.4, 10.5, 10.6, 10.7, 10.8, 10.9,
              11, 11.1, 11.2, 11.3, 11.4, 11.5, 11.6, 11.7, 11.8, 11.9, 12,
              12.1,
            ],
          },
          {
            label: "-2 SD",
            backgroundColor: "#4c51bf",
            borderColor: "#4c51bf",
            data: [
              9.2, 9.4, 9.5, 9.7, 9.8, 10, 10.1, 10.3, 10.4, 10.5, 10.7, 10.8,
              10.9, 11.1, 11.2, 11.3, 11.5, 11.6, 11.7, 11.8, 12, 12.1, 12.2,
              12.3, 12.4, 12.6, 12.7, 12.8, 12.9, 13, 13.2, 13.3, 13.4, 13.5,
              13.6, 13.7,
            ],
            fill: false,
          },
          {
            label: "-1 SD",
            fill: false,
            backgroundColor: "#4c51bf",
            borderColor: "#4c51bf",
            data: [
              10.3, 10.5, 10.7, 10.9, 11.1, 11.2, 11.4, 11.6, 11.7, 11.9, 12,
              12.2, 12.4, 12.5, 12.7, 12.8, 13, 13.1, 13.3, 13.4, 13.6, 13.7,
              13.9, 14, 14.2, 14.3, 14.5, 14.6, 14.8, 14.9, 15.1, 15.2, 15.3,
              15.5, 15.6, 15.8,
            ],
          },
          {
            label: "Standar",
            backgroundColor: "#fff",
            borderColor: "#fff",
            data: [
              11.7, 11.9, 12.1, 12.3, 12.5, 12.7, 12.9, 13.1, 13.3, 13.5, 13.7,
              13.9, 14, 14.2, 14.4, 14.6, 14.8, 15, 15.2, 15.3, 15.5, 15.7,
              15.9, 16.1, 16.3, 16.4, 16.6, 16.8, 17, 17.2, 17.3, 17.5, 17.7,
              17.9, 18, 18.2,
            ],
            fill: false,
          },
          {
            label: "+1 SD",
            fill: false,
            backgroundColor: "#4c51bf",
            borderColor: "#4c51bf",
            data: [
              13.3, 13.5, 13.7, 14, 14.2, 14.4, 14.7, 14.9, 15.1, 15.4, 15.6,
              15.8, 16, 16.3, 16.5, 16.7, 16.9, 17.2, 17.4, 17.6, 17.8, 18.1,
              18.3, 18.5, 18.8, 19, 19.2, 19.4, 19.7, 19.9, 20.1, 20.3, 20.6,
              20.8, 21, 21.2,
            ],
          },
          {
            label: "+2 SD",
            fill: false,
            backgroundColor: "#4c51bf",
            borderColor: "#4c51bf",
            data: [
              15.1, 15.4, 15.7, 16, 16.2, 16.5, 16.8, 17.1, 17.3, 17.6, 17.9,
              18.1, 18.4, 18.7, 19, 19.2, 19.5, 19.8, 20.1, 20.4, 20.7, 20.9,
              21.2, 21.5, 21.8, 22.1, 22.4, 22.6, 22.9, 23.2, 23.5, 23.8, 24.1,
              24.4, 24.6, 24.9,
            ],
          },
          {
            label: "+3 SD",
            fill: false,
            backgroundColor: "#4c51bf",
            borderColor: "#4c51bf",
            data: [
              17.3, 17.7, 18, 18.3, 18.7, 19, 19.3, 19.6, 20, 20.3, 20.6, 20.9,
              21.3, 21.6, 22, 22.3, 22.7, 23, 23.4, 23.7, 24.1, 24.5, 24.8,
              25.2, 25.5, 25.9, 26.3, 26.6, 27, 27.4, 27.7, 28.1, 28.5, 28.8,
              29.2, 29.5,
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
                Standar Berat Badan anak Perempuan menurut Umur
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
