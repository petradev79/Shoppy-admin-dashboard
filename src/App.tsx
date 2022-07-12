import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import Tooltip from '@mui/material/Tooltip';

import {
  Ecommerce,
  Orders,
  Employees,
  Customers,
  Kanban,
  Editor,
  Calendar,
  ColorPicker,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorMapping,
  Funnel,
} from './pages';
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { useStateContext } from './contexts/ContextProvider';
import CalendarProvider from './contexts/CalendarProvider';

import './App.css';

const App = () => {
  const {
    activeMenu,
    setThemeSettings,
    themeSettings,
    setCurrentColor,
    setCurrentMode,
    currentMode,
    currentColor,
  } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, [setCurrentColor, setCurrentMode]);

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
            <Tooltip title='Settings'>
              <button
                type='button'
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
                className='text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray'
              >
                <FiSettings />
              </button>
            </Tooltip>
          </div>
          {activeMenu ? (
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white '>
              <Sidebar />
            </div>
          ) : (
            <div className='w-0 dark:bg-secondary-dark-bg'>
              <Sidebar />
            </div>
          )}
          <div
            className={`dark:bg-main-dark-bg  bg-main-bg min-h-screen  w-full ${
              activeMenu ? 'md:ml-72' : 'flex-2'
            }`}
          >
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full '>
              <Navbar />
            </div>
            <div>
              {themeSettings && <ThemeSettings />}

              <Routes>
                {/* Dashboard  */}
                <Route path='/' element={<Ecommerce />} />
                <Route path='/ecommerce' element={<Ecommerce />} />

                {/* Pages  */}
                <Route path='/orders' element={<Orders />} />
                <Route path='/employees' element={<Employees />} />
                <Route path='/customers' element={<Customers />} />

                {/* Apps  */}
                <Route path='/kanban' element={<Kanban />} />
                <Route path='/editor' element={<Editor />} />
                <Route
                  path='/calendar'
                  element={
                    <CalendarProvider>
                      <Calendar />
                    </CalendarProvider>
                  }
                />
                <Route path='/color-picker' element={<ColorPicker />} />

                {/* Charts  */}
                <Route path='/line' element={<Line />} />
                <Route path='/area' element={<Area />} />
                <Route path='/bar' element={<Bar />} />
                <Route path='/pie' element={<Pie />} />
                <Route path='/financial' element={<Financial />} />
                <Route path='/color-mapping' element={<ColorMapping />} />
                <Route path='/funnel' element={<Funnel />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
