import { BiChevronDown } from "react-icons/bi";
import { IoMdDownload } from "react-icons/io";
import { Tooltip, Cell, BarChart, Bar, XAxis, YAxis } from "recharts";

const revenueData = [
  { month: "Jun '23", amount: 120000 },
  { month: "Jul '23", amount: 150000 },
  { month: "Aug '23", amount: 180000 },
];

const COLORS = ["#495A62", "#495A62", "#495A62"];
const studCOLORS = ["#6E7B83", "#6E7B83", "#6E7B83"];

const studentData = [
  { month: "Jun '23", amount: 150000 },
  { month: "Jul '23", amount: 170000 },
  { month: "Aug '23", amount: 100000 },
];

const Div4 = () => {
  return (
    <div className="  flex flex-col items-center">
      <div className="h-1/8 border-b border-gray-300 w-full flex justify-between px-8 py-2 text-gray-700 items-center">
        <div>MONTH-ON-MONTH GROWTH</div>
        <div className="flex">
          <div className="relative text-sm">
            <select
              id="dropdown"
              name="dropdown"
              className="appearance-none bg-white border-2 border-gray-300 rounded px-3 py-1 pr-8 leading-tight focus:outline-none "
            >
              <option value="last30days">Last 3 months</option>
              <option value="last15days">Last 2 monoths</option>
              <option value="last5days">Last month</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <BiChevronDown className="h-4 w-4 text-gray-500" />
            </div>
          </div>
          <button className="bg-gray-600 text-white  ml-4 px-2 py-1 rounded-full">
            <IoMdDownload />
          </button>
        </div>
      </div>
      <div className="h-7/8 flex justify-center">
        <div className="border-r border-gray-300 items-center py-2">
          Revenue
          <BarChart width={250} height={200} data={revenueData}>
            <XAxis dataKey="month" />
            <YAxis hide={true} />
            <Tooltip />
            <Bar dataKey="amount" fill="#8884d8">
              {revenueData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Bar>
          </BarChart>
          FEE RECEIVED
        </div>
        <div className="items-center py-2 px-4">
          Students
          <BarChart width={250} height={200} data={studentData}>
            <XAxis dataKey="month" />
            <YAxis hide={true} />
            <Tooltip />
            <Bar dataKey="amount" fill="#8884d8">
              {revenueData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={studCOLORS[index % studCOLORS.length]}
                />
              ))}
            </Bar>
          </BarChart>
          ACTIVE STUDENTS
        </div>
      </div>
    </div>
  );
};

export default Div4;
