import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { FiChevronDown } from 'react-icons/fi';

const data = [
  { name: 'Apr', value: 40000 },
  { name: 'May', value: 22000 },
  { name: 'Now', value: 50000 },
  { name: 'Jun', value: 48000 },
  { name: 'Jul', value: 95000 },
  { name: 'Aug', value: 65000 },
  { name: 'Sep', value: 42000 },
  { name: 'Oct', value: 55000 },
];

const formatYAxis = (tickItem: number) => {
  return `$${tickItem / 1000}K`;
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background p-2 rounded-lg border border-border text-text text-xs">
        <p className="label font-semibold">{`${label} : ${formatYAxis(payload[0].value)}`}</p>
      </div>
    );
  }
  return null;
};

const Graphs: React.FC = () => {
  return (
    <div className="bg-card p-6 rounded-lg border border-border shadow-card">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-text">Graphs</h3>
        <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 text-sm py-2 px-4 bg-background rounded-lg border border-border text-textSecondary hover:text-accent">
                <span>Unsatisfied Demand %</span>
                <FiChevronDown />
            </button>
        </div>
      </div>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#353945" vertical={false} />
            <XAxis dataKey="name" stroke="#B1B5C3" tickLine={false} axisLine={false} fontSize={14} />
            <YAxis stroke="#B1B5C3" tickLine={false} axisLine={false} tickFormatter={formatYAxis} fontSize={14} />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#C6FF4F', strokeWidth: 1, strokeDasharray: "5 5" }}/>
            <Line type="monotone" dataKey="value" stroke="#C6FF4F" strokeWidth={3} dot={false} activeDot={{ r: 8, fill: '#C6FF4F', stroke: '#23262F', strokeWidth: 4 }}/>
            <ReferenceLine x="Now" stroke="#C6FF4F" strokeDasharray="5 5" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Graphs;
