import { createContext, useState, useEffect, useReducer, useMemo } from 'react';
import dayjs from 'dayjs';

type LabelType = {
  label: string | unknown;
  checked: boolean;
};

type EventReducerType = {
  type: string;
  payload: any;
};

type CalendarContextType = {
  monthIndex: number;
  setMonthIndex: (index: number) => void;
  smallCalendarMonth: number | null;
  setSmallCalendarMonth: (smallCalendarMonth: number | null) => void;
  daySelected: any;
  setDaySelected: (day: any) => void;
  showEventModal: boolean;
  setShowEventModal: (showEventModal: boolean) => void;
  dispatchCalEvent: (obj: EventReducerType) => void;
  savedEvents: [];
  selectedEvent: any;
  setSelectedEvent: (selectedEvent: any) => void;
  setLabels: (labels: LabelType[]) => void;
  labels: LabelType[];
  updateLabel: (label: LabelType) => void;
  filteredEvents: [];
};

type CalendarContextProviderProps = {
  children: React.ReactNode;
};

export const CalendarContext = createContext({} as CalendarContextType);

const savedEventsReducer = (state: any, obj: EventReducerType) => {
  switch (obj.type) {
    case 'push':
      return [...state, obj.payload];
    case 'update':
      return state.map((evt: any) =>
        evt.id === obj.payload.id ? obj.payload : evt
      );
    case 'delete':
      return state.filter((evt: any) => evt.id !== obj.payload.id);
    default:
      throw new Error();
  }
};

const initEvents = () => {
  const storageEvents = localStorage.getItem('savedEvents');
  const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
  return parsedEvents;
};

const CalendarProvider = (props: CalendarContextProviderProps) => {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [smallCalendarMonth, setSmallCalendarMonth] = useState<number | null>(
    null
  );
  const [daySelected, setDaySelected] = useState(dayjs());
  const [showEventModal, setShowEventModal] = useState<boolean>(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [labels, setLabels] = useState<LabelType[]>([]);
  const [savedEvents, dispatchCalEvent] = useReducer(
    savedEventsReducer,
    [],
    initEvents
  );

  const filteredEvents = useMemo(() => {
    return savedEvents.filter((evt: any) =>
      labels
        .filter((lbl: LabelType) => lbl.checked)
        .map((lbl: LabelType) => lbl.label)
        .includes(evt.label)
    );
  }, [savedEvents, labels]);

  useEffect(() => {
    localStorage.setItem('savedEvents', JSON.stringify(savedEvents));
  }, [savedEvents]);

  useEffect(() => {
    setLabels((prevLabels) => {
      return Array.from(new Set(savedEvents.map((evt: any) => evt.label))).map(
        (label) => {
          const currentLabel = prevLabels.find(
            (lbl: LabelType) => lbl.label === label
          );
          return {
            label,
            checked: currentLabel ? currentLabel.checked : true,
          };
        }
      );
    });
  }, [savedEvents]);

  useEffect(() => {
    if (smallCalendarMonth !== null) {
      setMonthIndex(smallCalendarMonth);
    }
  }, [smallCalendarMonth]);

  useEffect(() => {
    if (!showEventModal) {
      setSelectedEvent(null);
    }
  }, [showEventModal]);

  const updateLabel = (label: LabelType) => {
    setLabels(labels.map((lbl) => (lbl.label === label.label ? label : lbl)));
  };

  return (
    <CalendarContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        smallCalendarMonth,
        setSmallCalendarMonth,
        daySelected,
        setDaySelected,
        showEventModal,
        setShowEventModal,
        dispatchCalEvent,
        selectedEvent,
        setSelectedEvent,
        savedEvents,
        setLabels,
        labels,
        updateLabel,
        filteredEvents,
      }}
    >
      {props.children}
    </CalendarContext.Provider>
  );
};

export default CalendarProvider;
