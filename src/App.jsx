import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import Home from "./components/home/Home";

function App() {
  return (
    <>
      <div className="min-h-screen mx-0 px-0">
        <Navbar />
        <div className="flex flex-col md:flex-row">
          {/* Responsive Menu component */}
          <div className="w-full md:w-1/4 lg:w-1/6 p-4 bg-gray-600 text-white">
            <Menu />
          </div>
          {/* Responsive Home component */}
          <div className="flex-1 p-4 py-0">
            <Home />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
