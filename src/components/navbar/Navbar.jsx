import { FaBell, FaCog } from "react-icons/fa";

const currentDate = new Date().toLocaleDateString("en-US", {
  weekday: "short",
  day: "2-digit",
  month: "short",
});

const Navbar = () => {
  return (
    <div className="flex items-center w-full p-3">
      <div className="w-full md:w-1/4 lg:w-1/6 text-xl flex flex-col items-center">
        <img
          src="src/assets/spartslogo.png"
          alt="Sparts Logo"
          className="mx-auto mb-2"
          style={{ width: "150px" }}
        />
        <div className="text-sm">{currentDate}</div>
      </div>

      <div className="flex items-center justify-between flex-1">
        <div className="pl-2">
          <div className="text-5xl">Welcome Cynthia,</div>
          <div className="text-base">Here is a summary of your business</div>
        </div>
        <div className="pr-2 flex">
          <div className="pr-2">
            <FaCog
              size={50}
              className="text-gray-600 bg-gray-300 rounded-full p-2"
            />
          </div>
          <div className="pr-2">
            <FaBell
              size={50}
              className="text-gray-600 bg-gray-300 rounded-full p-2"
            />
          </div>
        </div>
        <div className="text-right text-xl flex">
          <div className="px-4">
            <img
              src="src/assets/dplogo.png"
              alt="DP Logo"
              style={{ width: "50px" }}
            />
          </div>
          <div className="text-2xl">
            Cynthia John
            <div className="text-base">cj@example.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
