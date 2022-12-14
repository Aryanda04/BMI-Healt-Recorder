// import {auth} from '../firebase'
import { Link, useNavigate } from "react-router-dom";
// import Highcharts from "highcharts";
import * as Highcharts from "highcharts/highmaps";

import React, { useEffect, useState } from "react";
import { ref, set, child, get, update, remove } from "firebase/database";
import { db, auth } from "../../firebase";
import GrafikBBLakiLaki from "./garfikBBLaki";

const Maps = () => {
  let [fetchStatus, setFetchStatus] = useState(true);

  useEffect(() => {
    const createMaps = async () => {
      const topology = await fetch(
        "https://code.highcharts.com/mapdata/countries/id/id-all.topo.json"
      ).then((response) => response.json());

      // Prepare demo data. The data is joined to map using value of 'hc-key'
      // property by default. See API docs for 'joinBy' for more info on linking
      // data and map.
      const data = [
        ["id-3700", 10],
        ["id-ac", 2.2],
        ["id-jt", 1.1],
        ["id-be", 0.2],
        ["id-bt", 1.4],
        ["id-kb", 1.8],
        ["id-bb", 0.1],
        ["id-ba", 0.4],
        ["id-ji", 1.9],
        ["id-ks", 1.4],
        ["id-nt", 1.3],
        ["id-se", 0.7],
        ["id-kr", 0.9],
        ["id-ib", 2.9],
        ["id-su", 0.6],
        ["id-ri", 0.9],
        ["id-sw", 0.4],
        ["id-ku", 1.6],
        ["id-la", 1.2],
        ["id-sb", 1.2],
        ["id-ma", 1.2],
        ["id-nb", 0.9],
        ["id-sg", 1.2],
        ["id-st", 1.3],
        ["id-pa", 2.8],
        ["id-jr", 0.8],
        ["id-ki", 1.6],
        ["id-1024", 0.9],
        ["id-jk", 0.7],
        ["id-go", 1.1],
        ["id-yo", 0.6],
        ["id-sl", 1.1],
        ["id-sr", 1.2],
        ["id-ja", 0.5],
        ["id-kt", 1.8],
      ];

      // Create the chart
      Highcharts.mapChart("mapGiziContainer", {
        chart: {
          map: topology,
        },

        title: {
          text: "Persebaran gizi buruk indonesia",
        },

        subtitle: {
          text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/id/id-all.topo.json">Indonesia</a>',
        },

        mapNavigation: {
          enabled: true,
          buttonOptions: {
            verticalAlign: "bottom",
          },
        },
        legend: {
          title: {
            text: "Gizi",
          },
        },

        colorAxis: {
          min: 0,
          max: 2.8,
        },

        series: [
          {
            data: data,
            name: "Gizi Buruk",
            states: {
              hover: {
                color: "#000",
              },
            },
            dataLabels: {
              enabled: false,
              format: "{point.name}",
            },
          },
        ],
      });
    };
    if (fetchStatus) {
      createMaps();
      setFetchStatus(false);
    }
  }, [fetchStatus, setFetchStatus]);

  return (
    <>
      <div id="mapGiziContainer"></div>
    </>
  );
};

export default Maps;
