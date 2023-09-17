import Navbar from "@/app/components/navbar/page";
import Image from "next/image";
import Product from "@/app/components/product/page";

const Routine = () => {
    return (
        <div className="bg-purple1 overflow-auto text-black">
          <Navbar />
            <div className="flex justify-center items-center mt-20">
      <Image
      className=""
      src="/img/homepage/sun.png"
      alt=""
      width={250}
      height={250}
      />
      <div className="sub-title text-center w-[550px] py-28 font-Poppins">Urutan Pemakaian Skincare Pagi</div>
      </div>
      <div className="flex justify-center items-center mb-32">
      <Product />
      </div><div className="flex justify-center items-center mb-32">
      <Product />
      </div>

      </div>
    );
  };
  
  export default Routine;