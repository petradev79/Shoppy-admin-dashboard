import { useContext, useState } from 'react';
import { MdDragHandle, MdSchedule, MdOutlineSegment } from 'react-icons/md';
import {
  AiOutlineClose,
  AiOutlineDelete,
  AiOutlineCheck,
} from 'react-icons/ai';
import { BsBookmark } from 'react-icons/bs';

import { CalendarContext } from '../../contexts/CalendarProvider';

const labelsClasses = ['indigo', 'gray', 'green', 'blue', 'red', 'purple'];

const CalendarEventModal = () => {
  const { setShowEventModal, daySelected, dispatchCalEvent, selectedEvent } =
    useContext(CalendarContext);

  const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : '');
  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ''
  );
  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent
      ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
      : labelsClasses[0]
  );

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const calendarEvent = {
      title,
      description,
      label: selectedLabel,
      day: daySelected.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };
    if (selectedEvent) {
      dispatchCalEvent({ type: 'update', payload: calendarEvent });
    } else {
      dispatchCalEvent({ type: 'push', payload: calendarEvent });
    }

    setShowEventModal(false);
  };

  return (
    <div className='h-screen w-full fixed left-0 top-0 flex justify-center items-center'>
      <form className='bg-white rounded-lg shadow-2xl w-1/4'>
        <header className='bg-gray-100 px-4 py-2 flex justify-between items-center'>
          <span className='text-xl text-gray-400'>
            <MdDragHandle />
          </span>
          <div className='flex'>
            {selectedEvent && (
              <span
                onClick={() => {
                  dispatchCalEvent({
                    type: 'delete',
                    payload: selectedEvent,
                  });
                  setShowEventModal(false);
                }}
                className='text-xl text-gray-400 cursor-pointer'
              >
                <AiOutlineDelete />
              </span>
            )}
            <button onClick={() => setShowEventModal(false)}>
              <span className='text-xl text-gray-400'>
                <AiOutlineClose />
              </span>
            </button>
          </div>
        </header>
        <div className='p-3'>
          <div className='grid grid-cols-1/5 items-end gap-y-7'>
            <div></div>
            <input
              type='text'
              name='title'
              placeholder='Add title'
              value={title}
              required
              className='pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500'
              onChange={(e) => setTitle(e.target.value)}
            />
            <span className='text-xl text-gray-400'>
              <MdSchedule />
            </span>
            <p>{daySelected.format('dddd, MMMM DD')}</p>
            <span className='text-xl text-gray-400'>
              <MdOutlineSegment />
            </span>
            <input
              type='text'
              name='description'
              placeholder='Add a description'
              value={description}
              required
              className='pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500'
              onChange={(e) => setDescription(e.target.value)}
            />
            <span className='text-xl text-gray-400'>
              <BsBookmark />
            </span>
            <div className='flex gap-x-2'>
              {labelsClasses.map((lblClass, i) => (
                <span
                  key={i}
                  onClick={() => setSelectedLabel(lblClass)}
                  className={`bg-${lblClass}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                >
                  {selectedLabel === lblClass && (
                    <span className='text-white text-sm'>
                      <AiOutlineCheck />
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
        <footer className='flex justify-end border-t p-3 mt-5'>
          <button
            type='submit'
            onClick={handleSubmit}
            className='bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white'
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  );
};

export default CalendarEventModal;
