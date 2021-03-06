import * as React from 'react';
import addWeeks from 'date-fns/addWeeks';
import { Dayjs } from 'dayjs';
import { Moment } from 'moment';
import { DateTime } from 'luxon';
import { makeJSDateObject } from '../../../utils/helpers';
import { DateRangePicker, DateRange } from '@material-ui/pickers';

function getWeeksAfter(date: Moment | DateTime | Dayjs | Date, amount: number) {
  // TODO: replace with implementation for your date library
  return date ? addWeeks(makeJSDateObject(date), amount) : undefined;
}

function MinMaxDateRangePicker() {
  const [selectedRange, handleDateChange] = React.useState<DateRange>([null, null]);

  return (
    <DateRangePicker
      disablePast
      value={selectedRange}
      maxDate={getWeeksAfter(selectedRange[0], 4)}
      onChange={date => handleDateChange(date)}
    />
  );
}

export default MinMaxDateRangePicker;
