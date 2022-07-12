import { useState, useContext, useEffect, Fragment } from 'react';

import CalendarHeader from '../components/Calendar/CalendarHeader';
import CalendarSidebar from '../components/Calendar/CalendarSidebar';
import CalendarMonth from '../components/Calendar/CalendarMonth';
import CalendarEventModal from '../components/Calendar/CalendarEventModal';
import { CalendarContext } from '../contexts/CalendarProvider';
import { getMonth } from '../utility/util';

const CalendarPage = () => {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(CalendarContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <Fragment>
      {showEventModal && <CalendarEventModal />}
      <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
        <div className='h-screen flex flex-col'>
          <CalendarHeader />
          <div className='flex flex-1'>
            <CalendarSidebar />
            <CalendarMonth month={currenMonth} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CalendarPage;
