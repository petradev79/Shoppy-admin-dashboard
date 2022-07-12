import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from 'recharts';
import { useStateContext } from '../../contexts/ContextProvider';
import { stackedChartData } from '../../data/dummy';

type StackedChartProps = {
  width: number | string;
  height: number;
};

const Stacked: React.FC<StackedChartProps> = ({ width, height }) => {
  const { currentMode, currentColor } = useStateContext();
  const expenseColor = currentMode === 'Dark' ? '#fff' : '#33373E';

  return (
    <ResponsiveContainer width={width} height={height}>
      <BarChart data={stackedChartData}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='label' />
        <Tooltip cursor={{ fill: 'transparent' }} />
        <Legend />
        <Bar dataKey='Budget' stackId='a' fill={currentColor} />
        <Bar dataKey='Expense' stackId='a' fill={expenseColor} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Stacked;
