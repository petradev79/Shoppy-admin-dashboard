import {
  Funnel,
  FunnelChart,
  LabelList,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

import { ChartsHeader } from '../../components';
import { FoodComparisonData } from '../../data/dummy';

const FunnelPage = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <ChartsHeader category='Funnel' title='Food Comparison Chart' />
      <div className='w-full'>
        <ResponsiveContainer width='100%' height={500}>
          <FunnelChart>
            <Tooltip formatter={(value: any) => value + ' calorie'} />
            <Funnel dataKey='value' data={FoodComparisonData} isAnimationActive>
              <LabelList
                position='middle'
                fill='#fff'
                stroke='none'
                dataKey='name'
              />
            </Funnel>
          </FunnelChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default FunnelPage;
