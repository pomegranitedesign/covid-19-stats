import axios from 'axios';
import React from 'react';
import Card from './Card';
import Geocode from 'react-geocode';
import Typography from './Typography';
import Value from './Value';
import { DataInfo } from './GlobalData';

Geocode.setApiKey('AIzaSyBSXoKnbgkMHTDpWT1rYxrWh911BDDZnnI');

function CountryData() {
  const [currentCountry, setCurrentCountry] = React.useState('');
  const [data, setData] = React.useState<DataInfo>({
    cases: 0,
    deaths: 0,
    population: 0,
    recovered: 0,
    todayCases: 0,
    todayDeaths: 0,
    todayRecovered: 0,
  });

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((data) => {
      const { latitude, longitude } = data.coords;
      Geocode.fromLatLng(latitude.toString(), longitude.toString()).then(
        (response) =>
          response.status === 'OK' &&
          setCurrentCountry(
            response.results[0].formatted_address.split(', ')[3],
          ),
      );

      if (currentCountry) {
        const getCountryData = async () => {
          const URL = `${process.env.REACT_APP_BASE_URL}/countries/${currentCountry}`;
          const response = await axios.get(URL);
          setData(response.data);
        };
        getCountryData();
      }
    });
  }, [currentCountry]);

  if (!currentCountry) return <Card title='Fetching location' />;
  return (
    <Card title={`Data for ${currentCountry}`}>
      <Typography variant='body1'>
        Total cases: <Value value={data.cases} />
      </Typography>
      <Typography variant='body1'>
        Today cases: <Value value={data.todayCases} />
      </Typography>
      <br />
      <Typography variant='body1'>
        Total deaths: <Value value={data.deaths} />
      </Typography>
      <Typography variant='body1'>
        Today deaths: <Value value={data.todayDeaths} />
      </Typography>
      <br />
      <Typography variant='body1'>
        Total recovered: <Value value={data.recovered} />
      </Typography>
      <Typography variant='body1'>
        Today recovered: <Value value={data.todayRecovered} />
      </Typography>
    </Card>
  );
}

export default CountryData;
