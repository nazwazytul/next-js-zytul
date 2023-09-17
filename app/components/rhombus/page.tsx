import Image from "next/image";

const Rhombus = () => {
    return (
      <div className="relative flex justify-center items-center h-screen heading">
        <Image
        className="absolute -rotate-45"
        src="/img/oilyskin/oily.png"
        alt=""
        width={400}
        height={400}
        />
      <div className="absolute top-[60px] left-[870px] w-20 h-20 rotate-45 bg-purple1">
        <span className="absolute inset-0 text-[20px] font-Poppins flex justify-center items-center -rotate-45">1.</span>
      </div>
      <div className="absolute top-[450px] left-[1105px] w-20 h-20 rotate-45 bg-purple1">
      <span className="absolute inset-0 text-[20px] font-Poppins flex justify-center items-center -rotate-45">2.</span>
      </div>
      <div className="absolute top-[670px] left-[720px] w-20 h-20 rotate-45 bg-purple1">
      <span className="absolute inset-0 text-[20px] font-Poppins flex justify-center items-center -rotate-45">3.</span>
      </div>
      <div className="absolute top-[440px] left-[490px] w-20 h-20 rotate-45 bg-purple1">
      <span className="absolute inset-0 text-[20px] font-Poppins flex justify-center items-center -rotate-45">4.</span>
      </div>
      <p className="absolute top-[65px] right-[280px] text-center w-[450px] font-poppins">
          Kulit wajah terlihat lengket, mengkilap, basah, dan berkilau
      </p>
      <p className="absolute top-[470px] right-[110px]">
          Wajah mudah berjerawat
      </p>
      <p className="absolute top-[670px] left-[290px] text-center  w-[400px]">
          Pori-pori terlihat besar dan jelas pada kulit wajah
      </p>
      <p className="absolute top-[460px] left-[110px] text-[25px]">
          Banyak tumbuh komedo
      </p>
      </div>
    );
  };
  
  export default Rhombus;