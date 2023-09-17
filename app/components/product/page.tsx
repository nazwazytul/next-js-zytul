import Image from "next/image";

const Product = () => {
    return (
      <div className="relative mp-20 shadow-[50px_50px_#bba298] w-[1000px] h-[500px] bg-purple2 rounded-3xl">
        <Image 
        className="m-auto py-5"
        src="/img/homepage/facewash.png"
        alt=""
        width={50}
        height={50}
        />
        <div className="heading text-center font-bold">
          1. Face Wash
        </div>
        <hr className="border-1 border-black w-[800px] mt-20 mx-auto"/>
        <hr className="border-1 border-black w-[800px] my-14 mx-auto"/>
        <hr className="border-1 border-black w-[800px] my-14 mx-auto"/>
        <hr className="border-1 border-black w-[800px] my-14 mx-auto"/>
      </div>

    );
  };
  
  export default Product;