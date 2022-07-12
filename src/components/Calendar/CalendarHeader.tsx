import { useContext } from 'react';
import dayjs from 'dayjs';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import LogoCalendar from '../../data/logo-calendar.png';
import { CalendarContext } from '../../contexts/CalendarProvider';

const CalendarHeader = () => {
  const { monthIndex, setMonthIndex } = useContext(CalendarContext);

  const handlePrevMonth = () => {
    setMonthIndex(monthIndex - 1);
  };

  const handleNextMonth = () => {
    setMonthIndex(monthIndex + 1);
  };

  const handleReset = () => {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  };

  return (
    <header className='px-4 py-2 flex items-center'>
      <img src={LogoCalendar} alt='calendar' className='mr-2 w-12 h-12' />
      <h1 className='mr-10 text-xl text-gray-500 fond-bold'>Calendar</h1>
      <button onClick={handleReset} className='border rounded py-2 px-4 mr-5'>
        Today
      </button>
      <button onClick={handlePrevMonth}>
        <span className='material-icons-outlined cursor-pointer text-gray-600 mx-2'>
          <FiChevronLeft />
        </span>
      </button>
      <button onClick={handleNextMonth}>
        <span className='material-icons-outlined cursor-pointer text-gray-600 mx-2'>
          <FiChevronRight />
        </span>
      </button>
      <h2 className='ml-4 text-xl text-gray-500 font-bold'>
        {dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY')}
      </h2>
    </header>
  );
};

export default CalendarHeader;
