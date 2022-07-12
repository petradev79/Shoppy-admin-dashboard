import { useContext } from 'react';

import PlusImg from '../../data/plus.svg';
import SmallCalendar from './SmallCalendar';
import { CalendarContext } from '../../contexts/CalendarProvider';

const CalendarSidebar = () => {
  const { setShowEventModal, labels, updateLabel } =
    useContext(CalendarContext);

  return (
    <aside className='border p-5 w-64'>
      <button
        onClick={() => setShowEventModal(true)}
        className='border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl'
      >
        <img src={PlusImg} alt='create_event' className='w-7 h-7' />
        <span className='pl-3 pr-7'> Create</span>
      </button>
      <SmallCalendar />
      <p className='text-gray-500 font-bold mt-10'>Label</p>
      {labels.map(({ label: lbl, checked }, idx) => (
        <label key={idx} className='items-center mt-3 block'>
          <input
            type='checkbox'
            checked={checked}
            onChange={() => updateLabel({ label: lbl, checked: !checked })}
            className={`form-checkbox h-5 w-5 text-${lbl}-400 rounded focus:ring-0 cursor-pointer`}
          />
          <span className='ml-2 text-gray-700 capitalize'>{lbl as string}</span>
        </label>
      ))}
    </aside>
  );
};

export default CalendarSidebar;
