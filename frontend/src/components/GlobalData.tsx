import axios from 'axios';
import React from 'react';
import Card from './Card';
import Typography from './Typography';
import Value from './Value';

export interface DataInfo {
  cases: number;
  todayCases: number;
  todayDeaths: number;
  deaths: number;
  recovered: number;
  todayRecovered: number;
  population: number;
}

function GlobalData() {
  const [globalData, setGlobalData] = React.useState<DataInfo>({
    cases: 0,
    deaths: 0,
    population: 0,
    recovered: 0,
    todayCases: 0,
    todayDeaths: 0,
    todayRecovered: 0,
  });

  const fetchGlobalData = async () => {
    const URL = `${process.env.REACT_APP_BASE_URL}/all`;
    const response = await axios.get(URL);
    const data = response.data;
    setGlobalData(data);
  };

  React.useEffect(() => {
    fetchGlobalData();
  }, []);

  return (
    <Card title={`Global data -- total population ${globalData.population}`}>
      <Typography variant='body1'>
        Total cases: <Value value={globalData.cases} />
      </Typography>
      <Typography variant='body1'>
        Today cases: <Value value={globalData.todayCases} />
      </Typography>
      <br />
      <Typography variant='body1'>
        Total deaths: <Value value={globalData.deaths} />
      </Typography>
      <Typography variant='body1'>
        Today deaths: <Value value={globalData.todayDeaths} />
      </Typography>
      <br />
      <Typography variant='body1'>
        Total recovered: <Value value={globalData.recovered} />
      </Typography>
      <Typography variant='body1'>
        Today recovered: <Value value={globalData.todayRecovered} />
      </Typography>
    </Card>
  );
}

export default GlobalData;
