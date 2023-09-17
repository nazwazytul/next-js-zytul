import Footer from "@/app/components/footer/page";
import Navbar from "@/app/components/navbar/page";
import Recc from "@/app/components/recc/page";
import Rec from "@/app/components/recc2/page";


const Rekomendasi = () => {
    return (
        <div className="bg-purple1 overflow-auto text-black">
            <Navbar />
            <Rec />
            <div className="my-20">
            <Recc />
            </div>
            <Footer />
        </div>
    );
    };
    export default Rekomendasi;
