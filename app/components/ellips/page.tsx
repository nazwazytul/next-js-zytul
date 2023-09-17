import Image from "next/image";

const Ellipse = () => {
  return (
    <div className="mx-20 flex justify-center flex-wrap heading">
    <div className="relative rounded-[50%] bg-purple2 w-[200px] h-[200px] mx-36">
      <Image className="absolute inset-0 top-[-30px] mx-auto flex items-center justify-center "
          src="/img/homepage/oily.png"
          alt=""
          width={170}
          height={170}/>
          <p className="w-[210px] mt-56 flex justify-center">Kulit Berminyak</p>
      </div>
      <div className="relative rounded-[50%] bg-purple2 w-[200px] h-[200px] mx-36">
      <Image className="absolute inset-0 top-[-40px] mx-auto flex items-center justify-center "
          src="/img/homepage/dry.png"
          alt=""
          width={210}
          height={210}/>
          <p className="w-[210px] mt-56 flex justify-center">Kulit Kering</p>
      </div>
      <div className="relative rounded-[50%] bg-purple2 w-[200px] h-[200px] mx-36">
      <Image className="absolute inset-0 top-[-15px] mx-auto flex items-center justify-center "
          src="/img/homepage/kombinasi.png"
          alt=""
          width={170}
          height={170}/>
          <p className="w-[210px] mt-56 flex justify-center">Kulit Kombinasi</p>
      </div>
      <div className="relative rounded-[50%] bg-purple2 w-[200px] h-[200px] mx-40 mt-40">
      <Image className="absolute inset-0 top-[-20px] mx-auto flex items-center justify-center "
          src="/img/homepage/normal.png"
          alt=""
          width={170}
          height={170}/>
          <p className="w-[210px] mt-56 flex justify-center">Kulit Normal</p>
      </div>
      <div className="relative rounded-[50%] bg-purple2 w-[200px] h-[200px] mx-36 mt-40">
      <Image className="absolute inset-0 top-[-10px] mx-2 flex items-center justify-center "
          src="/img/homepage/sensitif.png"
          alt=""
          width={210}
          height={210}/>         
          <p className="w-[210px] mt-56 flex justify-center">Kulit Sensitif</p>
      </div>
      
      </div>
  );
};

export default Ellipse;
