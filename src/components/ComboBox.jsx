import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { getAllLocations } from "../services/flightService"

const ComboBox = ({ title, change, value }) => {
  const [Locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllLocations();
        let Locations = result.data.Locations.map((item) => ({ id: item.iata, title: item.persianname }))
        setLocations(Locations)
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        change(newValue)
      }}
      disablePortal
      id="combo-box-demo"
      options={Locations}
      isOptionEqualToValue={(option, value) => `${option.title} ${option.id}` === `${value.title} ${value.id}`}
      getOptionLabel={(option) => `${option.title} ${option.id}`}
      renderInput={(params) => <TextField {...params} label={title} />}
    />
  );
}
export default ComboBox
