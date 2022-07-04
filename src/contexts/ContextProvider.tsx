import { createContext, useContext, useState } from 'react';

type InitialStateType = {
  chat: boolean;
  cart: boolean;
  userProfile: boolean;
  notification: boolean;
};

type StateContextType = {
  currentColor: string;
  currentMode: string;
  activeMenu: boolean;
  screenSize: number | undefined;
  setScreenSize: (screenSize: number | undefined) => void;
  handleClick: (clicked: any) => void;
  isClicked?: InitialStateType;
  initialState: InitialStateType;
  setIsClicked: (initialState: InitialStateType) => void;
  setActiveMenu: (isActive: boolean) => void;
  setCurrentColor: (color: string) => void;
  setCurrentMode: (mode: string) => void;
  setMode: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setColor: (color: string) => void;
  themeSettings?: boolean;
  setThemeSettings: (settings: boolean) => void;
};

type StateContextProviderProps = {
  children: React.ReactNode;
};

export const StateContext = createContext({} as StateContextType);

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const StateContextProvider = ({
  children,
}: StateContextProviderProps) => {
  const [screenSize, setScreenSize] = useState<number | undefined>(undefined);
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState<InitialStateType>(initialState);

  const setMode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
  };

  const setColor = (color: string) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
  };

  const handleClick = (clicked: any) =>
    setIsClicked({ ...initialState, [clicked]: true });

  return (
    <StateContext.Provider
      value={{
        currentColor,
        currentMode,
        activeMenu,
        screenSize,
        setScreenSize,
        handleClick,
        isClicked,
        initialState,
        setIsClicked,
        setActiveMenu,
        setCurrentColor,
        setCurrentMode,
        setMode,
        setColor,
        themeSettings,
        setThemeSettings,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
