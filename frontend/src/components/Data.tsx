import axios from 'axios';
import { Container, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import GlobalData, { GlobalDataInfo } from './GlobalData';

const useStyles = makeStyles(
  () => ({
    root: {},
  }),
  { name: 'Cards' },
);

function Data() {
  const classes = useStyles();

  const [globalData, setGlobalData] = React.useState<GlobalDataInfo>({
    cases: 0,
    deaths: 0,
    population: 0,
    recovered: 0,
    todayCases: 0,
    todayDeaths: 0,
    todayRecovered: 0,
  });

  const fetchGlobalData = async () => {
    const URL = 'https://disease.sh/v3/covid-19/all';
    const response = await axios.get(URL);
    const data = response.data;
    setGlobalData(data);
  };

  React.useEffect(() => {
    fetchGlobalData();
  }, []);

  return (
    <Container>
      <Grid container spacing={6} className={classes.root}>
        <GlobalData globalData={globalData} />
      </Grid>
    </Container>
  );
}

export default Data;
