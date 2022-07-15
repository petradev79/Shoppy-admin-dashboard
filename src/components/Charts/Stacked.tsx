import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis } from 'recharts';
import { useStateContext } from '../../contexts/ContextProvider';
import { stackedChartData } from '../../data/dummy';

type StackedChartProps = {
  width: number;
  height: number;
};

const Stacked: React.FC<StackedChartProps> = ({ width, height }) => {
  const { currentMode, currentColor } = useStateContext();
  const expenseColor = currentMode === 'Dark' ? '#fff' : '#33373E';

  return (
    <BarChart width={width} height={height} data={stackedChartData}>
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='label' />
      <Tooltip cursor={{ fill: 'transparent' }} />
      <Legend />
      <Bar dataKey='Budget' stackId='a' fill={currentColor} />
      <Bar dataKey='Expense' stackId='a' fill={expenseColor} />
    </BarChart>
  );
};

export default Stacked;
