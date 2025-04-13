import CountUp from "../ui/CountUp";

export const Count = () => {
  return (
    <div className="flex  w-full  justify-around bg-blue-950 text-white items-center h-60 max-sm:flex-col">
      <div className="flex flex-col gap-1 items-center justify-center">
        <div className="flex items-center">
          <CountUp
            from={0}
            to={1200}
            separator=","
            direction="up"
            duration={1}
            className="text-7xl font-bold max-md:text-5xl max-sm:text-2xl"
          />
          <p className="text-5xl font-bold max-md:text-4xl max-sm:text-xl">+</p>
        </div>
        <p>Students Adviced</p>
      </div>

      <div className="flex flex-col gap-1 items-center justify-center">
        <div className="flex items-center">
          <CountUp
            from={0}
            to={20}
            separator=","
            direction="up"
            duration={1}
            className="text-7xl font-bold max-md:text-5xl max-sm:text-2xl"
          />
          <p className="text-5xl font-bold max-md:text-4xl max-sm:text-xl">+</p>
        </div>
        <p>Countries</p>
      </div>

      <div className="flex flex-col gap-1 items-center justify-center">
        <div className="flex items-center">
          <CountUp
            from={0}
            to={95}
            separator=","
            direction="up"
            duration={1}
            className="text-7xl font-bold max-md:text-5xl max-sm:text-2xl"
          />
          <p className="text-5xl font-bold max-md:text-4xl max-sm:text-xl">%</p>
        </div>
        <p>Visa Success Rate</p>
      </div>
    </div>
  );
};
