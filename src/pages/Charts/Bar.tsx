import {
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Bar,
} from 'recharts';

import { ChartsHeader } from '../../components';
import { barChartData } from '../../data/dummy';

const BarPage = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <ChartsHeader category='Bar' title='Olympic Medal Counts - RIO' />
      <div className='w-full'>
        <ResponsiveContainer width='100%' height={400}>
          <BarChart
            width={500}
            height={300}
            data={barChartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip cursor={{ fill: 'transparent' }} />
            <Legend />
            <Bar dataKey='Gold' fill='#f9df47' />
            <Bar dataKey='Silver' fill='#9e9e9e' />
            <Bar dataKey='Bronze' fill='#CD7F32' />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarPage;
