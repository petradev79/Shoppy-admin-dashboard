import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

import { lineChartData } from '../../data/dummy';

const LineChartComponent = () => {
  return (
    <ResponsiveContainer width={'100%'} height={420} min-width={300}>
      <LineChart
        data={lineChartData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='label' />
        <Tooltip />
        <Legend />
        <Line type='monotone' dataKey='Germany' stroke='#d05aee' />
        <Line type='monotone' dataKey='England' stroke='#39da8a' />
        <Line type='monotone' dataKey='India' stroke='#5a8dee' />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
