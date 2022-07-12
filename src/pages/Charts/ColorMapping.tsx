import {
  ResponsiveContainer,
  Cell,
  Legend,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

import { ChartsHeader } from '../../components';
import { colorMappingData } from '../../data/dummy';

const COLORS = ['#7ec1fb', '#FFBB28', '#ff6d6d'];

const colorHandler = (temp: number) => {
  let index = 2;
  if (temp < 10) index = 0;
  if (temp >= 10 && temp < 20) index = 1;
  return index;
};

const ColorMapping = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <ChartsHeader category='Bar' title='Olympic Medal Counts - RIO' />
      <div className='w-full'>
        <ResponsiveContainer width='100%' height={500}>
          <BarChart
            data={colorMappingData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis
              dataKey={'Temperature'}
              tickFormatter={(value: any) => value + '°C'}
            />
            <Tooltip
              cursor={{ fill: 'transparent' }}
              formatter={(value: any) => value + '°C'}
            />
            <Legend />
            <Bar data={colorMappingData} dataKey='Temperature' fill='#00C49F'>
              {colorMappingData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[colorHandler(entry.Temperature)]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ColorMapping;
