import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

type PieType = {
  name: string;
  value: number;
  text?: string;
};

type PieChartProps = {
  height: number | string;
  width: number | string;
  data: PieType[];
  radius?: number | string;
  isLegend?: boolean;
};

const COLORS = [
  '#0088FE',
  '#00C49F',
  '#FFBB28',
  '#FF8042',
  '#16293a',
  '#a300c4',
  '#1b694f',
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill='white'
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline='central'
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieChartComponent: React.FC<PieChartProps> = ({
  data,
  width,
  height,
  radius = 80,
  isLegend = false,
}) => {
  return (
    <ResponsiveContainer width={width} height={height}>
      <PieChart>
        {isLegend && (
          <Legend layout='horizontal' verticalAlign='top' align='center' />
        )}
        <Pie
          data={data}
          dataKey='value'
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={radius}
          fill='#8884d8'
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComponent;
