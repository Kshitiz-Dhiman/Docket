import anime from "animejs";

const WaterDrop = () => {
  return (
    <div className="relative grid h-screen place-content-center px-8">
      <Dotgrid />
    </div>
  );
};

const GRID_WIDTH = 20;
const GRID_HEIGHT = 10;

const Dotgrid = () => {
  const handleCLick = (e) => {
    anime({
        targets: ".dot-point",
        scale: [
          { value: 2, easing: "easeOutSine", duration: 250 },
          { value: 1, easing: "easeInOutQuad", duration: 500 },
        ],
        translateY: [
          { value: -10, easing: "easeOutSine", duration: 250 },
          { value: 0, easing: "easeInOutQuad", duration: 500 },
        ],
        opacity: [
          { value: 1, easing: "easeOutSine", duration: 250 },
          { value: 0.5, easing: "easeInOutQuad", duration: 500 },
        ],
        delay: anime.stagger(200, {
          grid: [GRID_WIDTH, GRID_HEIGHT],
          from: e.target.dataset.index,
        }),
        // delay: anime.stagger(100 , {
        //     from: e.target.dataset.index,
        // })
      });
  };

  const dots = [];
  let index = 0;

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          onClick={handleCLick}
          className="group cursor-crosshair rounded-full p-2 transition-colors hover:bg-slate-600"
          data-index={index}
          key={`${i} - ${j}`}
        >
          <div className="dot-point h-2 w-2 rounded-full bg-gradient-to-b from-slate-400 opacity-50 group-hover:from-indigo-600 group-hover:to-white" />
        </div>
      );
      index++;
    }
  }
  return (
    <div
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH} , 1fr)` }}
      className="grid w-fit"
    >
      {dots}
    </div>
  );
};
export default WaterDrop;
