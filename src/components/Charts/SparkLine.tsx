import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts';

type SparklineDataType = {
  x: number;
  yval: number;
}[];

type SparkLineProps = {
  height: number;
  width: number;
  color: string;
  data: SparklineDataType;
  type: string;
};

const SparkLine: React.FC<SparkLineProps> = ({
  height,
  width,
  color,
  data,
  type,
}) => {
  return (
    <ResponsiveContainer width={width} height={height}>
      <LineChart width={width} height={height} data={data}>
        <Tooltip />
        <Line type={type} dataKey='yval' stroke={color} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SparkLine;
