import "./style.css";
import Carousel from "./Carousel";
import Commingsoon from "./Commingsoon";
import Vote from "./Vote";
import Redusedprice from "./Redusedprice";
import Winners from "./Winners";
function Home() {
  return (
    <main className="my-3">
      <div className="container">
        <Carousel />
        <Commingsoon />
        <Vote />
        <Redusedprice />
        <Winners />
      </div>
    </main>
  );
}

export default Home;
