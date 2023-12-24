import Div1 from "./div1/Div1";
import Div2 from "./div2/Div2";
import Div3 from "./div3/Div3";
import Div4 from "./div4/Div4";
import Div5 from "./div5/Div5";

const Home = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex ">
          <div className="py-4 w-1/2 bg-white mx-2">
            <Div1 />
          </div>
          <div className=" w-1/2 bg-white">
            <Div2 />
          </div>
        </div>
        <div className="flex ">
          <div className="w-1/2 mx-2 bg-white">
            <Div3 />
          </div>
          <div className="w-1/2 bg-white">
            <Div4 />
          </div>
        </div>
        <div className="bg-white">
          <Div5 />
        </div>
      </div>
    </>
  );
};

export default Home;
