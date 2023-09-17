import Image from "next/image";

const Ask = () => {
    return (
      <div className="bg-purple2 w-[1300px] px-20 h-[80px] rounded-2xl mb-10">
        <Image 
        className="absolute items-end right-60 top-6"
        src="/img/dropdown.png"
        alt=""
        width={25}
        height={25}
        />
        </div>
      
    );
  };
  
  export default Ask;