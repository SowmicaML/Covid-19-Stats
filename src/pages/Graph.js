import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactApexChart from "react-apexcharts";

function Graph() {
  const [tcases, setCases] = useState([]);
  const [recovered, setRecovered] = useState([]);
  const [deaths, setDeaths] = useState([]);
  const [date, setDate] = useState([]);
  useEffect(() => {
    axios
      .get("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
      .then((res) => {
        setCases(JSON.parse(JSON.stringify(Object.values(res.data.cases))));
        setDeaths(JSON.parse(JSON.stringify(Object.values(res.data.deaths))));
        setRecovered(
          JSON.parse(JSON.stringify(Object.values(res.data.recovered)))
        );
        setDate(JSON.parse(JSON.stringify(Object.keys(res.data.cases))));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const series = [
    {
      name: "Cases",
      data: tcases,
    },
    {
      name: "Recovered",
      data: recovered,
    },
    {
      name: "Deaths",
      data: deaths,
    },
  ];
  const options = {
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: date,
    },
    tooltip: {
      x: {
        format: "MM/dd/yy",
      },
    },
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        textAlign: "center",
      }}
    >
      <br />
      <h2>COVID-19 Graph</h2>
      <br />

      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={350}
      />
      <br />
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={350}
      />
    </div>
  );
}

export default Graph;
