import Ask from "@/app/components/faq/page";
import Image from "next/image";
import Footer from "@/app/components/footer/page";
import Navbar from "@/app/components/navbar/page";
import Faqq from "@/app/components/faqq/page";

const Faq = () => {
    return (
        <div className="bg-purple1 overflow-auto text-black">
            <Navbar />
        <h1 className="sub-title font-Poppins py-20  mt-20 flex items-center justify-center">
            Pertanyaan Umum
        </h1>
        <div>
            <Faqq />
        </div>
        <Footer />
        </div>

    );

};
export default Faq;