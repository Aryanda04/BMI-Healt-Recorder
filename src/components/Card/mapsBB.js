import * as Highcharts from "highcharts/highmaps";

import React, { useEffect, useState } from "react";

const MapsObesitas = () => {
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
        ["id-ac", 0.8], //aceh
        ["id-jt", 1.5], //jateng
        ["id-be", 0.5], //bengkulu
        ["id-bt", 1.3], //banten
        ["id-kb", 1.1], //kalbar
        ["id-bb", 1.3], //babel
        ["id-ba", 1.8], //bali
        ["id-ji", 2.1], //jatim
        ["id-ks", 1.0], //kalsel
        ["id-nt", 0.4], //ntt
        ["id-se", 0.5], //sulsel
        ["id-kr", 1.4], //kep ri
        ["id-ib", 1.3], // papua barat
        ["id-su", 0.7], //sumut
        ["id-ri", 0.6], //riau
        ["id-sw", 0.6], //sulawesi utara
        ["id-ku", 1.3], //kalimantan utara
        ["id-la", 0.4], //maluku utara
        ["id-sb", 0.6], // sumbar
        ["id-ma", 0.4], //maluku
        ["id-nb", 0.8], //ntb
        ["id-sg", 0.6], // sulawesi tenggara
        ["id-st", 0.8], //sulawesi tengah
        ["id-pa", 1.4], // papua
        ["id-jr", 1.2], //jabar
        ["id-ki", 1.9], //kaltim
        ["id-1024", 0.7], //lampung
        ["id-jk", 1.6], //dki jkrta
        ["id-go", 0.6], //gorontalo
        ["id-yo", 2.2], //yogya
        ["id-sl", 0.9], //sumsel
        ["id-sr", 0.7], //sulawesi barat
        ["id-ja", 0.4], //jambi
        ["id-kt", 1.5], //kalteng
      ];

      // Create the chart
      Highcharts.mapChart("mapObesitasContainer", {
        chart: {
          map: topology,
        },

        title: {
          text: "Persebaran obesitas indonesia",
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
      <div id="mapObesitasContainer"></div>
    </>
  );
};

export default MapsObesitas;
