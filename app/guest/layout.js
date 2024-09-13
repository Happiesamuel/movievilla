import Sidebar from "../_components/Sidebar";
import Footer from "../_ui/Footer";

function layout({ children }) {
  return (
    <div className="grid grid-cols-[1fr] lg:grid-cols-[10rem_1fr] relative h-full w-full">
      <Sidebar />

      <div
        className="hide 
      overflow-scroll container max-w-full flex flex-col relative lg:mx-3   h-[88vh]"
      >
        {children} <Footer />
      </div>
    </div>
  );
}

export default layout;
