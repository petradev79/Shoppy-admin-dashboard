import { useState } from 'react';
import { ChromePicker, SwatchesPicker } from 'react-color';

import { Header } from '../components';

const ColorPicker = () => {
  const [color, setColor] = useState('#D1C4E9');

  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='Page' title='Color Picker and Palete' />
      <div
        className='flex justify-center items-center gap-20 p-20 rounded-lg'
        style={{ background: color }}
      >
        <ChromePicker
          disableAlpha
          color={color}
          onChange={(updatedColor) => setColor(updatedColor.hex)}
        />
        <SwatchesPicker
          color={color}
          onChange={(updatedColor) => setColor(updatedColor.hex)}
        />
      </div>
    </div>
  );
};

export default ColorPicker;
