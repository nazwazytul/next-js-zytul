import Footer from "@/app/components/footer/page";
import Image from "next/image";
import Navbar from "@/app/components/navbar/page";

const Sumber = () => {
    return (
        <div className="bg-purple2 overflow-auto text-black font-Poppins">
            <Navbar />
        <div className="flex justify-center items-center p-24">
        <Image
        className=""
        src="/img/sumber.png"
        alt=""
        width={400}
        height={400}
        />
        <div className="sub-title text-center w-[500px]">Sumber referensi</div>
        </div>
        <div className="rounded-2xl mx-auto w-[1000px] h-[400px] bg-purple1 ">
        <div className="absolute left-[400px] text-2xl font-poppins"> 
        <h1 className="font-semibold mt-16">Sumber Referensi :</h1>
        <ul className="underline list-disc">
          <li className="m-7"><a href="https://www.halodoc.com/">halodoc.com</a></li>
          <li className="m-7"><a href="https://hellosehat.com/">hellosehat.com</a></li>
          <li className="m-7"><a href="https://www.alodokter.com/">alodokter.com</a></li>
          <li className="m-7"><a href="https://kumparan.com/">kumparan.com</a></li>
        </ul>
        </div>
            </div>
            3000  <Footer />
            </div>

        );

    };
    export default Sumber;