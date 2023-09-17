import Link from "next/link";
import Image from "next/image";
import Square from "../square/page";

const Footer = () => {
    return(
        <div className="bg-purple2 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
            <Image
            className="mt-14 -mx-14 ml-20"
            src="/img/logo.png" 
            alt="glowevermore logo"
            width={80}
            height={80}
            />
            <div className="font-cormorant text-[30px] font-bold mt-16">GlowEvermore</div>
            <div className="p-5">
                <ul>
                    <p className="pb-4 heading2  font-bold">Menu</p>
                    <li className="heading2 pb-2"><Link href="/pages/routine">Urutan Pemakaian</Link></li>
                    <li className="heading2 pb-2"><Link href="/pages/rekomendasi">Rekomendasi</Link></li>
                    <li className="heading2 pb-2"><Link href="/pages/faq">Pertanyaan Umum</Link></li>
                    <li className="heading2 pb-2"><Link href="/pages/referensi">Referensi</Link></li>
                </ul>
            </div>
            <div className="p-5">
                <ul>
                    <p className="pb-4 heading2 font-bold">Beranda</p>
                    <li className="heading2 pb-2"><Link href="/pages/login">Daftar</Link></li>
                    <li className="heading2 pb-2">Jenis Kulit</li>
                    <li className="heading2 pb-2">Memilih Produk</li>
                    <li className="heading2 pb-2">Merawat Kulit</li>
                </ul>
            </div>
            <div className="p-5">
                <ul>
                <p className="pb-4 heading2 font-bold mx-16">Let's Connect</p>
                <div className="flex gap-6 pb-5 py-5">
                <Square />
                <Image 
                className="absolute mx-4 my-3 flex items-center justify-center"
                src="/img/footer/gmail.png"
                alt=""
                width={50}
                height={50}
                />
                <div className="relative">
                <Square />
                <Image 
                className="absolute inset-0 mx-4 my-3 flex items-center justify-center "
                src="/img/footer/instagram.png"
                alt=""
                width={50}
                height={50}/>
                </div>
                <div className="relative">
                <Square />
                <Image 
                className="absolute inset-0 mx-4 my-3 flex items-center justify-center "
                src="/img/footer/whatsapp.png"
                alt=""
                width={50}
                height={50}/>
                </div>
                
                
                <div className="flex gap-6 pb-5 square">
                </div>
                </div>
                </ul>
            </div>
        </div>
    )

}
export default Footer