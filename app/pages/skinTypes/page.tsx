"use client";
import { useEffect, useState } from "react";
import { getTipe } from "@/database/glow";
import Navbar from "@/app/components/navbar/page";
import Footer from "@/app/components/footer/page";
import Rhombus from "@/app/components/rhombus/page";
import Ball from "@/app/components/ball/page";
import Border from "@/app/components/border/page";

export default function TipeKulit() {
    const [kulit, setKulit] = useState([] as any[]);
    useEffect (() => {
      async function fetchData() {
        try {
          const data = await getTipe();
          setKulit(data);
        }catch (error) {
          console.error(error);
        }
      }
      fetchData();
    }, []);
return (
        <div className="bg-purple2 text-left overflow-auto text-black">
          <Navbar />
          <ul>
            {kulit.map((kulit) => (
              <li key={kulit.id}>{kulit.method}</li>
            ))}
          </ul>
        <h1 className="text-[80px]  font-Poppins font-bold w-56  px-20 mt-48">Kulit Berminyak</h1>
          <Rhombus />
        <h2 className="sub-title text-center font-Poppins my-28">Penyebab Kulit Berminyak</h2>
        <div className="relative right-28">
          <Ball />
        </div>
        <div className="w-full h-[1024px] bg-purple1">
        <h2 className="sub-title text-center font-Poppins p-28">Tips Merawat Kulit Berminyak</h2>
        <Border />
        </div>
        <Footer />
        </div>

    );

}

