import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return(
        <header className="w-full absolute z-10 text-[25px] py-10">
            <div className="flex justify-center items-center">
                <Image
                src="/img/logo.png" 
                alt="glowevermore logo"
                width={80}
                height={80}
                className="mx-3"
                />
            <div className="font-cormorant text-[30px] font-bold mr-80">GlowEvermore</div>
            <ul className="flex space-x-16 heading2">
                <li><Link href="/pages/homePage">Beranda</Link></li>
                <li><Link href="/pages/skinTypes">Tipe Kulit</Link></li>
                <li><Link href="/pages/reccomend">Rekomendasi</Link></li>
                <li><Link href="/pages/faq">Pertanyaan Umum</Link></li>
            </ul>
            <button className="bg-purple1 hover:bg-purple3 hover:text-white heading2 text-black font-bold py-2 px-6 mx-16 rounded">
                <Link href="/pages/login">Daftar</Link>
            </button>

            </div> 
        </header>
    )
}
export default Navbar