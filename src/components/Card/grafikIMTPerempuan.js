import React from "react";
import Chart from "chart.js";

export default function GrafikIMTPerempuan() {
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
              12.4, 12.3, 12.3, 12.3, 12.3, 12.3, 12.2, 12.2, 12.2, 12.2, 12.1,
              12.1, 12.1, 12.1, 12, 12, 12, 12, 11.9, 11.9, 11.9, 11.9, 11.8,
              11.8, 11.8, 11.8, 11.8, 11.7, 11.7, 11.7, 11.7, 11.7, 11.7, 11.7,
              11.6, 11.6,
            ],
          },
          {
            label: "-2 SD",
            backgroundColor: "red",
            borderColor: "red",
            borderWidth: 0.5,
            data: [
              13.3, 13.3, 13.3, 13.3, 13.2, 13.2, 13.2, 13.2, 13.1, 13.1, 13.1,
              13.1, 13.1, 13, 13, 13, 13, 12.9, 12.9, 12.9, 12.9, 12.9, 12.8,
              12.8, 12.8, 12.8, 12.8, 12.8, 12.7, 12.7, 12.7, 12.7, 12.7, 12.7,
              12.7, 12.7,
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
              14.4, 14.4, 14.4, 14.3, 14.3, 14.3, 14.3, 14.3, 14.2, 14.2, 14.2,
              14.2, 14.1, 14.1, 14.1, 14.1, 14.1, 14, 14, 14, 14, 14, 14, 14,
              13.9, 13.9, 13.9, 13.9, 13.9, 13.9, 13.9, 13.9, 13.9, 13.9, 13.9,
              13.9,
            ],
          },
          {
            label: "Standar",
            backgroundColor: "green",
            borderColor: "green",
            borderWidth: 0.5,
            data: [
              15.7, 15.6, 15.6, 15.6, 15.6, 15.5, 15.5, 15.5, 15.5, 15.4, 15.4,
              15.4, 15.4, 15.4, 15.3, 15.3, 15.3, 15.3, 15.3, 15.3, 15.3, 15.3,
              15.3, 15.3, 15.3, 15.3, 15.3, 15.2, 15.3, 15.3, 15.3, 15.3, 15.3,
              15.3, 15.3, 15.3,
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
              17.1, 17, 17, 17, 17, 16.9, 16.9, 16.9, 16.9, 16.8, 16.8, 16.8,
              16.8, 16.8, 16.8, 16.8, 16.8, 16.8, 16.8, 16.8, 16.8, 16.8, 16.8,
              16.8, 16.8, 16.8, 16.8, 16.8, 16.8, 16.8, 16.8, 16.8, 16.9, 16.9,
              16.9, 16.9,
            ],
          },
          {
            label: "+2 SD",
            fill: false,
            backgroundColor: "red",
            borderColor: "red",

            borderWidth: 0.5,
            data: [
              18.7, 18.7, 18.6, 18.6, 18.6, 18.5, 18.5, 18.5, 18.5, 18.5, 18.4,
              18.4, 18.4, 18.4, 18.4, 18.4, 18.4, 18.4, 18.4, 18.5, 18.5, 18.5,
              18.5, 18.5, 18.5, 18.6, 18.6, 18.6, 18.6, 18.7, 18.7, 18.7, 18.7,
              18.8, 18.8, 18.8,
            ],
          },
          {
            label: "+3 SD",
            fill: false,
            backgroundColor: "red",
            borderColor: "red",

            borderWidth: 0.5,
            data: [
              20.6, 20.6, 20.5, 20.5, 20.4, 20.4, 20.4, 20.4, 20.3, 20.3, 20.3,
              20.3, 20.3, 20.3, 20.3, 20.3, 20.4, 20.4, 20.4, 20.4, 20.5, 20.5,
              20.5, 20.6, 20.6, 20.7, 20.7, 20.7, 20.8, 20.8, 20.9, 20.9, 21,
              21, 21, 21.1,
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
              20.2,
              21.5,
              21.7,
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
              20.2,
              21.5,
              21.7,
              22,
              22.5,
              22.8,
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
                labelString: "IMT",
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
    var ctx = document.getElementById("grafikIMT").getContext("2d");
    window.myLine = new Chart(ctx, config);
  }, []);
  return (
    <>
      <canvas id="grafikIMT"></canvas>
    </>
  );
}
