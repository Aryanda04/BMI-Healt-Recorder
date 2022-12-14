import React from "react";
import Chart from "chart.js";

export default function GrafikTBPerempuan() {
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

            backgroundColor: "red",
            borderColor: "red",
            borderWidth: 0.5,
            data: [
              76.8, 77.5, 78.1, 78.8, 79.5, 80.1, 80.7, 81.3, 81.9, 82.5, 83.1,
              83.6, 84.2, 84.7, 85.3, 85.8, 86.3, 86.8, 87.4, 87.9, 88.4, 88.9,
              89.3, 89.8, 90.3, 90.7, 91.2, 91.7, 92.1, 92.6, 93, 93.4, 93.9,
              94.3, 94.7, 95.2,
            ],
          },
          {
            label: "-2 SD",
            backgroundColor: "red",
            borderColor: "red",
            borderWidth: 0.5,
            data: [
              80, 80.8, 81.5, 82.2, 82.9, 83.6, 84.3, 84.9, 85.6, 86.2, 86.8,
              87.4, 88, 88.6, 89.2, 89.8, 90.4, 90.9, 91.5, 92, 92.5, 93.1,
              93.6, 94.1, 94.6, 95.1, 95.6, 96.1, 96.6, 97.1, 97.6, 98.1, 98.5,
              99, 99.5, 99.9,
            ],
            fill: false,
          },
          {
            label: "-1 SD",
            fill: false,
            backgroundColor: "yellow",
            borderColor: "yellow",
            borderWidth: 0.5,
            data: [
              83.3, 84.1, 84.9, 85.7, 86.4, 87.1, 87.9, 88.6, 89.3, 89.9, 90.6,
              91.2, 91.9, 92.5, 93.1, 93.8, 94.4, 95, 95.6, 96.2, 96.7, 97.3,
              97.9, 98.4, 99, 99.5, 100.1, 100.6, 101.1, 101.6, 102.2, 102.7,
              103.2, 103.7, 104.2, 104.7,
            ],
          },
          {
            label: "Standar",
            backgroundColor: "green",
            borderColor: "green",
            borderWidth: 0.5,
            data: [
              86.6, 87.4, 88.3, 89.1, 89.9, 90.7, 91.4, 92.2, 92.9, 93.6, 94.4,
              95.1, 95.7, 96.4, 97.1, 97.7, 98.4, 99, 99.7, 100.3, 100.9, 101.5,
              102.1, 102.7, 103.3, 103.9, 104.5, 105, 105.6, 106.2, 106.7,
              107.3, 107.8, 108.4, 108.9, 109.4,
            ],
            fill: false,
          },
          {
            label: "+1 SD",
            fill: false,
            backgroundColor: "yellow",
            borderColor: "yellow",
            borderWidth: 0.5,
            data: [
              89.9, 90.8, 91.7, 92.5, 93.4, 94.2, 95, 95.8, 96.6, 97.4, 98.1,
              98.9, 99.6, 100.3, 101, 101.7, 102.4, 103.1, 103.8, 104.5, 105.1,
              105.8, 106.4, 107, 107.7, 108.3, 108.9, 109.5, 110.1, 110.7,
              111.3, 111.9, 112.5, 113, 113.6, 114.2,
            ],
          },
          {
            label: "+2 SD",
            fill: false,
            backgroundColor: "red",
            borderColor: "red",
            borderWidth: 0.5,
            data: [
              93.1, 94.1, 95, 96, 96.9, 97.7, 98.6, 99.4, 100.3, 101.1, 101.9,
              102.7, 103.4, 104.2, 105, 105.7, 106.4, 107.2, 107.9, 108.6,
              109.3, 110, 110.7, 111.3, 112, 112.7, 113.3, 114, 114.6, 115.2,
              115.9, 116.5, 117.1, 117.7, 118.3, 118.9,
            ],
          },
          {
            label: "+3 SD",
            fill: false,
            backgroundColor: "red",
            borderColor: "red",
            borderWidth: 0.5,
            data: [
              96.4, 97.4, 98.4, 99.4, 100.3, 101.3, 102.2, 103.1, 103.9, 104.8,
              105.6, 106.5, 107.3, 108.1, 108.9, 109.7, 110.5, 111.2, 112,
              112.7, 113.5, 114.2, 114.9, 115.7, 116.4, 117.1, 117.7, 118.4,
              119.1, 119.8, 120.4, 121.1, 121.8, 122.4, 123.1, 123.7,
            ],
          },
          {
            label: "Pengukuran",
            fill: false,
            backgroundColor: "purple",
            borderColor: "purple",

            borderWidth: 1,
            data: [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              72,
              72.4,
              72.8,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            ],
          },
          {
            label: "Prediksi",
            fill: false,
            backgroundColor: "pink",
            borderColor: "pink",

            borderWidth: 1,
            data: [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              72,
              72.4,
              72.8,
              73,
              73.4,
              74,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
            ],
          },
        ],
      },

      options: {
        maintainAspectRatio: true,
        responsive: true,
        title: {
          display: false,
          text: "Sales Charts",
          fontColor: "white",
        },
        legend: {
          display: false,

          labels: {
            fontColor: "black",
          },
          align: "start",
          position: "bottom",
        },

        elements: {
          point: {
            radius: 0,
          },
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "black",
              },
              display: true,
              scaleLabel: {
                display: true,
                labelString: "Month",
                fontColor: "black",
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
                fontColor: "black",
              },
              display: true,
              scaleLabel: {
                display: true,
                labelString: "Cm",
                fontColor: "black",
              },
              gridLines: {
                borderDash: [3],
                borderDashOffset: [3],
                drawBorder: true,
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
    var ctx = document.getElementById("grafikTinggiBadan").getContext("2d");
    window.myLine = new Chart(ctx, config);
  }, []);
  return (
    <>
      <canvas id="grafikTinggiBadan"></canvas>
    </>
  );
}
