import Ask from "@/app/components/faq/page";
import Image from "next/image";
import Footer from "@/app/components/footer/page";
import Navbar from "@/app/components/navbar/page";

const Faq = () => {
    return (
        <div className="bg-purple1 overflow-auto text-black">
            <Navbar />
        <h1 className="sub-title font-Poppins py-20  mt-20 flex items-center justify-center">
            Pertanyaan Umum
        </h1>
        <div className="relative flex justify-center">
        <Ask />
        <span className="absolute heading font-Poppins left-60 top-5">
            Apa tahapan terpenting dalam perawatan kulit sehari-hari ?</span>
        </div>
        <div className="relative flex justify-center">
        <Ask />
        <span className="absolute heading font-Poppins left-60 top-5">
            Bisakah kerutan di wajah dicegah ?</span>
        </div>
        <div className="relative flex justify-center">
        <Ask />
        <span className="absolute heading font-Poppins left-60 top-5">
            Bagaimana cara mengetahui sebuah produk perawatan cocok untuk kulit ?</span>
        </div>
        <div className="relative flex justify-center">
        <Ask />
        <span className="absolute heading font-Poppins left-60 top-5">
            Mengapa memilih produk perawatan kulit berdasarkan jenis kulit sangat penting ?</span>
        </div>
        <div className="relative flex justify-center">
        <Ask />
        <span className="absolute heading font-Poppins left-60 top-5">
            Apakah kulit akan berubah seiring berjalannya waktu ?</span>
        </div>
        <div className="relative flex justify-center">
        <Ask />
        <span className="absolute heading font-Poppins left-60 top-5">
            Apakah produk skincare laki-laki sama dengan produk skincare perempuan ?</span>
        </div>
        <div className="relative flex justify-center">
        <Ask />
        <span className="absolute heading font-Poppins left-60 top-5">
            Kapan harus mulai skincare ?</span>
        </div>
        <div className="relative flex justify-center">
        <Ask />
        <span className="absolute heading font-Poppins left-60 top-5">
            Apakah alkohol buruk untuk digunakan pada kulit ?</span>
        </div>
        <div className="relative flex justify-center">
        <Ask />
        <span className="absolute heading font-Poppins left-60 top-5">
            Apakah saya perlu memakai tabir surya saat berada di dalam ruangan ?</span>
        </div>
        <div className="relative flex justify-center mb-28">
        <Ask />
        <span className="absolute heading font-Poppins left-60 top-5">
            Berapa lama perawatan kulit bekerja ?</span>
        </div>
        <Footer />
        </div>

    );

};
export default Faq;