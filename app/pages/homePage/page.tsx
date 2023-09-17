import Navbar from "@/app/components/navbar/page";
import Ellipse from "@/app/components/ellips/page";
import Image from "next/image"
import Link from "next/link";
import Circle from "@/app/components/circle/page";
import Footer from "@/app/components/footer/page";
import Day from "@/app/components/day/page";
import Circle2 from "@/app/components/circle2/page";
import Night from "@/app/components/night/page";

const Home = () => {
  return (
    <div className="bg-purple2 overflow-auto text-left  text-black">
      <Navbar />
      <Image
        className="absolute mt-52 mx-20 object-cover"
        width={600}
        height={600}
        alt=""
        src="/img/homepage/home.png"
      />
      <div className="mt-72 px-32 flex justify-end title">GlowEvermore</div>
      <div className="px-28 flex justify-end">
        <p className="text-[35px] font-semibold text-center w-[630px] h-[40px]">
          "Panduan Penuh Cahaya untuk Kulit Sehat: Temukan Rekomendasi Perawatan
          Terbaikmu"
        </p>
        <div className="absolute mt-48 px-40 text-xl ">
          <div className="bg-purple1  hover:text-white text-black
           font-bold py-5 px-12 rounded font-Poppins shadow-lg">
            <button>Pelajari Selengkapnya</button>
          </div>
        </div>
      </div>
      <div className="text-left mt-[500px] font-Poppins">
        <Image
        className="absolute right-[-15px] py-52 mx-20"
        width={500}
        height={500}
        alt=""
        src="/img/homepage/home2.png"
         />
        <div className="sub-title w-[800px] pt-20 mx-20">
          Emangnya Skincare Penting Banget ya Buat Kulit Kita?
        </div>  
        <div className="heading w-[950px] py-28 mx-20">
          <p className="line-height">
          Skincare memiliki beberapa manfaat penting bagi kulit wajah. Pertama, penggunaan skincare membantu memberikan nutrisi 
          yang dibutuhkan oleh kulit setelah beraktivitas di luar ruangan, menjadikan kulit lebih cerah dan bercahaya. Kedua, 
          perawatan ini membantu mencegah munculnya kerutan pada usia dini dengan menjaga keelastisitasan kulit. Ketiga, skincare 
          membantu menjaga kelembutan kulit dan kesehatannya dengan kandungan seperti kolagen yang menjaga elastisitas kulit. 
          Terakhir, perawatan ini juga menghindari kulit kusam dengan menjaga tingkat kelembapan kulit agar tetap seimbang. 
          Dengan merawat kulit wajah secara rutin dan tepat, remaja dapat menikmati manfaat perlindungan dan perawatan untuk kulit
           yang sehat dan bercahaya.Namun perlu diingat, sebaiknya pilih dan gunakan skincare yang sesuai dengan jenis kulit.
        </p>
        </div>
        <div className="w-full h-[1024px] bg-purple1 ">
        <div className="sub-title py-28 text-center"> Jenis-jenis Kulit</div>
        <div className="">
          <Ellipse />
        </div>
        </div>
        <div className="sub-title text-center py-28">Tips Memilih Produk skincare</div>
        <div className="heading px-20">
          <Image 
          className="absolute right-[-15px] mx-20"
          src="/img/homepage/home3.png"
          alt=""
          width={500}
          height={500}
         />
        <div className="font-semibold">1. Sesuaikan dengan jenis kulit</div>
          <p className="w-[950px] mb-10"> Hal ini bertujuan untuk memaksimalkan kinerja skincare pada kulit dan
          menghindari efek buruk pada kulit karena tidak cocok dengan skincare
          yang kamu pakai.</p>
        <div className="font-semibold">2. Sudah memiliki izin edar BPOM</div>
         <p className="w-[950px] mb-10">Skincare yang sudah memiliki izin edar BPOM juga aman dan tepercaya
          keaslian serta tempat produksinya.</p>
        <div className="font-semibold">3.	Perhatikan kandungan bahan aktif di dalamnya</div>
         <p className="w-[980px] mb-10">Ada beberapa kandungan bahan aktif skincare yang tidak disarankan untuk 
          kondisi kulit tertentu. Maka dari itu, pastikan kandungan dalam skincare yang akan kamu pilih cocok untuk 
          jenis dan kondisi kulit kamu.</p>
        <div className="font-semibold">4.	Pilih produk yang mengandung SPF untuk skincare pagi hari</div>
          <p className="w-[950px] mb-28">Pilihlah skincare dengan kandungan SPF di dalamnya, agar kulit kamu terlindungi 
          dari segala permasalahan kulit akibat paparan sinar matahari, seperti munculnya flek hitam, kulit belang, 
          kulit terbakar, serta 
          kanker kulit.</p>
        </div>
      <div className="w-full h-[1024px] bg-purple1">
      <div className="absolute sub-title w-[500px] text-center my-28 mx-[600px] z-10">Cara Menjaga Kesehatan Kulit</div>
      <div className="flex justify-center items-center flex-col">
      <div className="relative rounded-[50%] bg-purple2  w-[900px] h-[900px] my-14 shadow-xl"/>
      <ul className="absolute heading line-height z-10">
        <li>1. Terapkan pola makan sehat</li>   
        <li>2. Kelola stress sebaik mungkin</li>
        <li>3. Lebih banyak beraktivitas fisik</li>
        <li>4. Tidur yang cukup</li>
        <li>5. Lindungi kulit dari sinar matahari</li>
        <li>6. Cuci muka dengan benar</li>
        <li>7. Gunakan pelembab sesuai jenis kulit</li>
        <li>8. Hindari produk yang mengiritasi kulit</li>
      </ul>
        <Image 
        className="absolute left-20"
        src="/img/homepage/home4.png"
        alt=""
        width={580}
        height={580}
        />
      </div>
      </div>
      <div className="flex justify-center items-center">
        <Image
        className=""
        src="/img/homepage/sun.png"
        alt=""
        width={200}
        height={200}
        />
      <div className="sub-title text-center w-[520px] py-28">Urutan Pemakaian Skincare Pagi</div>
      </div>
        <p className="heading px-40">Hal yang paling penting, yaitu gunakanlah produk yang paling ringan terlebih dahulu. Terakhir, 
        gunakan produk yang paling berat. Sebab, produk yang ringan tidak bisa menembus produk yang lebih tebal.
        </p>
      <div className="mx-64 mt-20">
        <Day />
      </div>
      <div className="mx-44 mb-10">
        <Circle />
      </div>
      <div className="flex justify-between heading mx-52 list-none mb-28">
        <li>Face Wash</li>
        <li>Toner</li>
        <li>Pelembab</li>
        <li>Sunscreen</li>
      </div>
      </div>
      <div className="w-full h-[1024px] bg-purple1">
      <div className="flex justify-center items-center">
        <Image
        className=""
        src="/img/homepage/moon.png"
        alt=""
        width={180}
        height={180}
        />
      <div className="sub-title text-center font-Poppins w-[520px] py-28">Urutan Pemakaian Skincare Pagi</div>
      </div>
        <p className="heading px-40">Hal-hal yang harus kamu utamakan pada produk yang kamu pakai di malam hari adalah 
        kemampuan untuk mengangkat kotoran yang terkumpul di kulit seharian penuh serta bisa memperbaiki kulit ketika kamu tidur.
        </p>
      <div className="mx-40 mt-20">
        <Night />
      </div>
      <div className="mx-20 mb-10">
        <Circle2 />
      </div>
      <div className="flex justify-between heading mx-52 list-none mb-28">
        <li className="w-32">Make Up Remover</li>
        <li className="">Face Wash</li>
        <li className="">Toner</li>
        <li className="">Krim Malam</li>
      </div>
      </div>
        <Footer />
    </div>
  );
};

export default Home;
