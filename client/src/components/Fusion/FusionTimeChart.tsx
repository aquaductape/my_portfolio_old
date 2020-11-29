import React, { useState, useEffect, Fragment } from "react";
import FusionCharts from "fusioncharts";
import TimeSeries from "fusioncharts/fusioncharts.timeseries";
import ReactFC from "react-fusioncharts";
import axios from "axios";
import { WakaData, WakaSchema } from "../../models/index";

ReactFC.fcRoot(FusionCharts, TimeSeries);

const dataSource = {
  chart: {},
  // caption: {
  //   text: "Web visits & downloads"
  // },
  data: {},
  extensions: {
    standardRangeSelector: {
      enabled: "1",
      style: {
        "button-text:active": {
          fill: "rgb(158, 158, 158)",
        },
      },
    },
    customRangeSelector: {
      enabled: "0",
    },
  },
  // subcaption: {
  //   text: "since 2015"
  // },
  navigator: {
    enabled: false,
  },
  yAxis: [
    {
      title: "",
      plot: [
        {
          value: "Total",
          type: "column",
        },
      ],
      format: {
        suffix: "h",
      },
    },
  ],
  xaxis: {
    initialInterval: {
      from: "2019-16-11",
      to: "2019-21-11",
    },
  },
  series: "Project",
};

export default function FusionTimeChart() {
  const [isLoading, setLoading] = useState(true);
  const [chartConfig, setChartConfig] = useState({
    timeseriesDs: {
      type: "timeseries",
      renderAt: "container",
      width: "100%",
      height: "400",
      dataSource,
    },
  });

  useEffect(() => {
    const onFetchData = async () => {
      try {
        const res = await axios.get(process.env.REACT_APP_WAKATIME_URL || "", {
          headers: {
            "auth-wakatime-data": process.env.REACT_APP_WAKATIME_HEADERS || "",
          },
        });
        const [data, schema]: [WakaData[], WakaSchema] = res.data;
        const fusionTable = new FusionCharts.DataStore().createDataTable(
          data,
          schema
        );
        const timeseriesDs = { ...chartConfig.timeseriesDs };
        timeseriesDs.dataSource.data = fusionTable;
        setChartConfig({ timeseriesDs });
        setLoading(() => false);
      } catch (err) {}
    };
    onFetchData();
  }, []);

  return (
    <Fragment>
      {chartConfig.timeseriesDs.dataSource.data && !isLoading ? (
        <ReactFC {...chartConfig.timeseriesDs} />
      ) : (
        <p>Loading...</p>
      )}
    </Fragment>
  );
}
