import React from 'react';
import Card from './Card';
import Typography from './Typography';

export interface GlobalDataInfo {
  cases: number;
  todayCases: number;
  todayDeaths: number;
  deaths: number;
  recovered: number;
  todayRecovered: number;
  population: number;
}

interface GlobalDataProps {
  globalData: GlobalDataInfo;
}

function GlobalData({ globalData }: GlobalDataProps) {
  return (
    <Card title={`Global Data (total population: ${globalData.population})`}>
      <Typography variant='body1'>Total cases: {globalData.cases}</Typography>
      <Typography variant='body1'>
        Today cases: {globalData.todayCases}
      </Typography>
      <br />
      <Typography variant='body1'>Total deaths: {globalData.deaths}</Typography>
      <Typography variant='body1'>
        Today deaths: {globalData.todayDeaths}
      </Typography>
      <br />
      <Typography variant='body1'>
        Total recovered: {globalData.recovered}
      </Typography>
      <Typography variant='body1'>
        Today recovered: {globalData.todayRecovered}
      </Typography>
    </Card>
  );
}

export default GlobalData;
