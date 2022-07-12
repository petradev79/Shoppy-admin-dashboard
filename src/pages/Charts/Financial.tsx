import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Scatter,
} from 'recharts';

import { ChartsHeader } from '../../components';
import { financialChartData } from '../../data/dummy';

const Financial = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <ChartsHeader
        category='Composed Chart'
        title='Historical and Financial'
      />
      <div className='w-full'>
        <ResponsiveContainer width='100%' height={600}>
          <ComposedChart
            data={financialChartData}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke='#f5f5f5' />
            <XAxis dataKey='name' />
            <YAxis type='category' />
            <Tooltip />
            <Legend />
            <Area
              type='monotone'
              dataKey='open'
              fill='#00C49F'
              stroke='#00C49F'
            />
            <Bar dataKey='close' barSize={20} fill='#0088FE' />
            <Line type='monotone' dataKey='high' stroke='#1b694f' />
            <Scatter dataKey='low' fill='#a300c4' />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Financial;
