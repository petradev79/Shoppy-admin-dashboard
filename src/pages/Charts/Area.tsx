import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

import { ChartsHeader } from '../../components';
import { areaChartData } from '../../data/dummy';

const AreaPage = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <ChartsHeader category='Area' title='Inflation Rate in percentage' />
      <div className='w-full'>
        <ResponsiveContainer width='100%' height={400}>
          <AreaChart
            width={730}
            height={250}
            data={areaChartData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id='colorU' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='#39da8a' stopOpacity={1} />
                <stop offset='95%' stopColor='#39da8a' stopOpacity={0} />
              </linearGradient>
              <linearGradient id='colorF' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='#5a8dee' stopOpacity={1} />
                <stop offset='95%' stopColor='#5a8dee' stopOpacity={0} />
              </linearGradient>
              <linearGradient id='colorG' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='#d05aee' stopOpacity={1} />
                <stop offset='95%' stopColor='#d05aee' stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey='label' />
            <YAxis />
            <CartesianGrid strokeDasharray='3 3' className='chart__grid' />
            <Tooltip />
            <Legend />
            <Area
              type='monotone'
              dataKey='USA'
              stroke='#39da8a'
              fillOpacity={1}
              fill='url(#colorU)'
            />
            <Area
              type='monotone'
              dataKey='France'
              stroke='#5a8dee'
              fillOpacity={1}
              fill='url(#colorF)'
            />
            <Area
              type='monotone'
              dataKey='Germany'
              stroke='#d05aee'
              fillOpacity={1}
              fill='url(#colorG)'
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AreaPage;
