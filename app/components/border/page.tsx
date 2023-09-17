const Border = () => {
    return (
        <div className="relative my-10">
            <div className="absolute -top-[100px] left-[600px] box-border w-px h-[700px] border-r-[1px] border-solid border-black"></div>
            <div className="absolute -top-[100px] left-[1050px] box-border w-px h-[700px] border-r-[1px] border-solid border-black"></div>
            <hr className="border-1 border-black w-[1300px] mb-60 mx-auto z-1"/>
            <hr className="border-1 border-black w-[1300px] mb-60 mx-auto z-1"/>
            <hr className="border-1 border-black w-[1300px] mt-60 mx-auto z-1"/>
            <div className="absolute flex flex-wrap justify-center heading list-none text-center top-24">
                <li className="mx-8">1. Cuci wajah secara teratur</li>
                <li className="mx-8 w-[400px]">2. Memilih produk perawatan bebas minyak</li>
                <li className="mx-8 w-[400px]">3. Hindari menyentuh wajah dengan tangan</li>
                <li className="mx-8 w-[400px] mt-40">4. Gunakan masker wajah sekali seminggu</li>
                <li className="mx-8 w-[400px] mt-40">5. Aplikasikan Pelembap Wajah</li>
                <li className="mx-8 w-[400px] mt-40">6. Menggunakan kertas minyak</li>

            </div>
        </div>
    );
};
export default Border