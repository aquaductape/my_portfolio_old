import React, { useState, useEffect, Fragment } from 'react';
import FusionCharts from 'fusioncharts';
import TimeSeries from 'fusioncharts/fusioncharts.timeseries';
import ReactFC from 'react-fusioncharts';
import axios from 'axios';
import { WakaData, WakaSchema } from '../../models/index';

ReactFC.fcRoot(FusionCharts, TimeSeries);

const dataSource = {
  chart: {},
  // caption: {
  //   text: 'Web visits & downloads'
  // },
  data: {},
  extensions: {
    customrangeselector: {
      enabled: '0'
    }
  },
  // subcaption: {
  //   text: 'since 2015'
  // },
  navigator: {
    enabled: false
  },
  yAxis: [
    {
      title: '',
      plot: [
        {
          value: 'Total',
          type: 'column'
        },
        {
          value: 'Grand_Total',
          type: 'line'
        }
      ],
      format: {
        suffix: ' hr'
      }
    }
  ],
  xAxis: {},
  series: 'Project'
};

export default function FusionTimeChart() {
  const [chartConfig, setChartConfig] = useState({
    timeseriesDs: {
      type: 'timeseries',
      renderAt: 'container',
      width: '112%',
      height: '400',
      dataSource
    }
  });

  useEffect(() => {
    const onFetchData = async () => {
      const res = await axios.get('/api/wakatimedata');
      const [data, schema]: [WakaData[], WakaSchema] = res.data;
      const fusionTable = new FusionCharts.DataStore().createDataTable(
        data,
        schema
      );
      const timeseriesDs = { ...chartConfig.timeseriesDs };
      timeseriesDs.dataSource.data = fusionTable;
      setChartConfig({ timeseriesDs });
    };
    onFetchData();
  }, []);

  return (
    <Fragment>
      {chartConfig.timeseriesDs.dataSource.data ? (
        <ReactFC {...chartConfig.timeseriesDs} />
      ) : (
        'loading'
      )}
    </Fragment>
  );
}
