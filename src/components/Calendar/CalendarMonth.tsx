import { Fragment } from 'react';

import CalendarDay from './CalendarDay';

const CalendarMonth = ({ month }: any) => {
  return (
    <div className='flex-1 grid grid-cols-7 grid-rows-5'>
      {month.map((row: any, i: number) => (
        <Fragment key={i}>
          {row.map((day: any, idx: number) => (
            <CalendarDay day={day} key={idx} rowIdx={i} />
          ))}
        </Fragment>
      ))}
    </div>
  );
};

export default CalendarMonth;
