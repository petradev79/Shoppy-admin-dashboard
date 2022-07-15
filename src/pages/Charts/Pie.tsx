import { ResponsiveContainer } from 'recharts';
import { ChartsHeader, Pie as PieChart } from '../../components';
import { pieChartData } from '../../data/dummy';

const PiePage = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <ChartsHeader category='Pie' title='Project Cost Breakdown' />
      <div className='w-full'>
        <ResponsiveContainer width='100%' height={400}>
          <PieChart data={pieChartData} radius={150} isLegend={true} />
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PiePage;
