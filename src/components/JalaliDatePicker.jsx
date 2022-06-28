import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import AdapterJalali from '@date-io/date-fns-jalali';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

export default function JalaliDatePicker({value , change}) {
  //const [value, setValue] = React.useState(new Date());

  // useEffect(() => {
  //   console.log("valuekkkkkkk:", value)
  // }, [value])

  return (
    <LocalizationProvider dateAdapter={AdapterJalali}>
      <DatePicker
        mask="____/__/__"
        value={value}
        onChange={(newValue) => change(newValue)}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}