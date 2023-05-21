import React from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const Statistic = () => {
  const assignmentMarks = [
    { id: 1, name: "assignment - 1", mark: 50 },
    { id: 2, name: "assignment - 2", mark: 55 },
    { id: 3, name: "assignment - 3", mark: 48 },
    { id: 4, name: "assignment - 4", mark: 28 },
    { id: 5, name: "assignment - 5", mark: 25 },
    { id: 6, name: "assignment - 6", mark: 28 },
    { id: 7, name: "assignment - 7", mark: 30 },
  ];
  return (
    <div>
      <div className="bg-slate-50 h-40 pb-14">
        <h1 className="w-52 pt-14  h-10 text-3xl font-extrabold ml-auto mr-auto">
          Statistic
        </h1>
      </div>
      {/* <ResponsiveContainer width="100%" height="100%"> */}
      <ComposedChart
        width={1600}
        height={700}
        data={assignmentMarks}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <Bar dataKey="mark" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="mark" stroke="#ff7300" />
        <XAxis dataKey="name" scale="band" />
        <YAxis />
        <Tooltip />
      </ComposedChart>
      {/* </ResponsiveContainer> */}
    </div>
  );
};

export default Statistic;
