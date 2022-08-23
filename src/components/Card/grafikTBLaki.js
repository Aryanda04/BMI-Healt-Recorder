import React from "react";
import Chart from "chart.js";

export default function GrafikTBLakiLaki() {
  React.useEffect(() => {
    var config = {
      type: "line",
      data: {
        labels: [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
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
              44.2, 48.9, 52.4, 55.3, 57.6, 59.6, 61.2, 62.7, 64.0, 65.2, 66.4,
              67.6, 68.6, 69.6, 70.6, 71.6, 72.5, 73.3, 74.2, 75.0, 75.8, 76.5,
              77.2, 78.0, 78.3, 78.6, 79.3, 79.9, 80.5, 81.1, 81.7, 82.3, 82.8,
              83.4, 83.9, 84.4, 85.0, 85.5, 86.0, 86.5, 87.0, 87.5, 88.0, 88.4,
              88.9, 89.4, 89.8, 90.3, 90.7, 91.2, 91.6, 92.1, 92.5, 93.0, 93.4,
              93.9, 94.3, 94.7, 95.2, 95.6, 96.1,
            ],
          },
          {
            label: "-2 SD",
            backgroundColor: "#4c51bf",
            borderColor: "#4c51bf",
            data: [
              46.1, 50.8, 54.4, 57.3, 59.7, 61.7, 63.3, 64.8, 66.2, 67.5, 68.7,
              69.9, 71.0, 72.1, 73.1, 74.1, 75.0, 76.0, 76.9, 77.7, 78.6, 79.4,
              80.2, 81.0, 81.4, 81.7, 82.5, 83.1, 83.8, 84.5, 85.1, 85.7, 86.4,
              86.9, 87.5, 88.1, 88.7, 89.2, 89.8, 90.3, 90.9, 91.4, 91.9, 92.4,
              93.0, 93.5, 94.0, 94.4, 94.9, 95.4, 95.9, 96.4, 96.9, 97.4, 97.8,
              98.3, 98.8, 99.3, 99.7, 100.2, 100.7,
            ],
            fill: false,
          },
          {
            label: "-1 SD",
            fill: false,
            backgroundColor: "#4c51bf",
            borderColor: "#4c51bf",
            data: [
              48.0, 52.8, 56.4, 59.4, 61.8, 63.8, 65.5, 67.0, 68.4, 69.7, 71.0,
              72.2, 73.4, 74.5, 75.6, 76.6, 77.6, 78.6, 79.6, 80.5, 81.4, 82.3,
              83.1, 83.9, 84.5, 84.9, 85.6, 86.4, 87.1, 87.8, 88.5, 89.2, 89.9,
              90.5, 91.1, 91.8, 92.4, 93.0, 93.6, 94.2, 94.7, 95.3, 95.9, 96.4,
              97.0, 97.5, 98.1, 98.6, 99.1, 99.7, 100.2, 100.7, 101.2, 101.7,
              102.3, 102.8, 103.3, 103.8, 104.3, 104.8, 105.3,
            ],
          },
          {
            label: "Standar",
            backgroundColor: "#fff",
            borderColor: "#fff",
            data: [
              49.9, 54.7, 58.4, 61.4, 63.9, 65.9, 67.6, 69.2, 70.6, 72.0, 73.3,
              74.5, 75.7, 76.9, 78.0, 79.1, 80.2, 81.2, 82.3, 83.2, 84.2, 85.1,
              86.0, 86.9, 87.5, 88.0, 88.8, 89.6, 90.4, 91.2, 91.9, 92.7, 93.4,
              94.1, 94.8, 95.4, 96.1, 96.7, 97.4, 98.0, 98.6, 99.2, 99.9, 100.4,
              101.0, 101.6, 102.2, 102.8, 103.3, 103.9, 104.4, 105.0, 105.6,
              106.1, 106.7, 107.2, 107.8, 108.3, 108.9, 109.4, 110.0,
            ],
            fill: false,
          },
          {
            label: "+1 SD",
            fill: false,
            backgroundColor: "#4c51bf",
            borderColor: "#4c51bf",
            data: [
              51.8, 56.7, 60.4, 63.5, 66.0, 68.0, 69.8, 71.3, 72.8, 74.2, 75.6,
              76.9, 78.1, 79.3, 80.5, 81.7, 82.8, 83.9, 85.0, 86.0, 87.0, 88.0,
              89.0, 89.9, 90.5, 91.1, 92.0, 92.9, 93.7, 94.5, 95.3, 96.1, 96.9,
              97.6, 98.4, 99.1, 99.8, 100.5, 101.2, 101.8, 102.5, 103.2, 103.8,
              104.5, 105.1, 105.7, 106.3, 106.9, 107.5, 108.1, 108.7, 109.3,
              109.9, 110.5, 111.1, 111.7, 112.3, 112.8, 113.4, 114.0, 114.6,
            ],
          },
          {
            label: "+2 SD",
            fill: false,
            backgroundColor: "#4c51bf",
            borderColor: "#4c51bf",
            data: [
              53.7, 58.6, 62.4, 65.5, 68.0, 70.1, 71.9, 73.5, 75.0, 76.5, 77.9,
              79.2, 80.5, 81.8, 83.0, 84.2, 85.4, 86.5, 87.7, 88.8, 89.8, 90.9,
              91.9, 92.9, 93.6, 94.2, 95.2, 96.1, 97.0, 97.9, 98.7, 99.6, 100.4,
              101.2, 102.0, 102.7, 103.5, 104.2, 105.0, 105.7, 106.4, 107.1,
              107.8, 108.5, 109.1, 109.8, 110.4, 111.1, 111.7, 112.4, 113.0,
              113.6, 114.2, 114.9, 115.5, 116.1, 116.7, 117.4, 118.0, 118.6,
              119.2,
            ],
          },
          {
            label: "+3 SD",
            fill: false,
            backgroundColor: "#4c51bf",
            borderColor: "#4c51bf",
            data: [
              55.6, 60.6, 64.4, 67.6, 70.1, 72.2, 74.0, 75.7, 77.2, 78.7, 80.1,
              81.5, 82.9, 84.2, 85.5, 86.7, 88.0, 89.2, 90.4, 91.5, 92.6, 93.8,
              94.9, 95.9, 96.8, 97.3, 98.3, 99.1, 100.3, 101.2, 102.1, 103.0,
              103.9, 104.8, 105.6, 106.4, 107.2, 108.0, 108.8, 109.5, 110.3,
              111.0, 111.7, 112.5, 113.2, 113.9, 114.6, 115.2, 115.9, 116.6,
              117.3, 117.9, 118.6, 119.2, 119.9, 120.6, 121.2, 121.9, 122.6,
              123.2, 123.9,
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
    var ctx = document.getElementById("grafikTinggiBadan").getContext("2d");
    window.myLine = new Chart(ctx, config);
  }, []);
  return (
    <>
      <div className="grafikLakiContainer">
        <div className="">
          <div className="">
            <div className="">
              <h6 className="">
                Standar Tinggi Badan anak laki-laki menurut Umur
              </h6>
              <h2 className="text-white text-xl font-semibold">
                Grafik Cm/Bulan
              </h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-350-px">
            <canvas id="grafikTinggiBadan"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
