import Image from "next/image";

const Ball = () => {
    return (
        <div className="mx-40 mb-40 flex justify-center flex-wrap">
            <div className="relative rounded-[50%] bg-purple1 w-[120px] h-[120px] mx-40">
            <Image className="absolute m-auto inset-0"
            src="/img/oilyskin/gen.png"
            alt=""
            width={100}
            height={100}
            />
            </div>
            <div className="relative rounded-[50%] bg-purple1 w-[120px] h-[120px] mx-40">
            <Image className="absolute m-auto inset-0"
            src="/img/oilyskin/pori.png"
            alt=""
            width={80}
            height={80}
            />
            </div>
            <div className="relative rounded-[50%] bg-purple1 w-[120px] h-[120px] mx-40">
            <Image className="absolute m-auto inset-0"
            src="/img/oilyskin/not.png"
            alt=""
            width={80}
            height={80}
            />
            </div>
            <div className="relative rounded-[50%] bg-purple1 w-[120px] h-[120px] mt-40 mx-40">
            <Image className="absolute m-auto inset-0"
            src="/img/oilyskin/krim.png"
            alt=""
            width={90}
            height={90}
            />
            </div>
            <div className="relative rounded-[50%] bg-purple1 w-[120px] h-[120px] mt-40 mx-40">
            <Image className="absolute m-auto inset-0"
            src="/img/oilyskin/lebih.png"
            alt=""
            width={100}
            height={100}
            />
            </div>
            <div className="relative rounded-[50%] bg-purple1 w-[120px] h-[120px] mt-40 mx-40">
            <Image className="absolute m-auto inset-0"
            src="/img/oilyskin/air.png"
            alt=""
            width={100}
            height={100}
            />
            </div>
            <div className="absolute flex flex-wrap justify-center heading list-none mb-28 text-center mt-6 ml-[360px]">
            <li className="mx-32">Faktor genetik</li>
            <li className="mx-20 w-60">Memilki pori-pori yang besar</li>
            <li className="mx-20 w-80">Tidak cocok dengan produk skincare</li>
            <li className="mx-14 w-80 mt-52">Tidak menggunakan pelembab</li>
            <li className="mx-20 w-80 mt-52">Berlebihan merawat kulit</li>
            <li className="mx-14 w-60 mt-52">Kurang minum air putih</li>
            </div>
            </div>
    );
};
export default Ball;