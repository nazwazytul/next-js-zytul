const Log = () => {
    return (
      <div className="my-10 heading2">
        <div>Email</div>
        <input
        className=" mb-5 border bg-purple2 rounded-xl shadow-lg px-4 py-2 focus:outline-none focus:border-blue-500"
        type="text"
        placeholder="Masukkan email anda"
        />
        <div>Kata Sandi</div>
        <input
        className=" mb-5 border bg-purple2 rounded-xl shadow-lg px-4 py-2 focus:outline-none focus:border-blue-500"
        type="text"
        placeholder="Masukkan kata sandi anda"
        />
        <div>Tipe Kulit</div>
        <select className="border bg-purple2 rounded-xl shadow-lg px-4 py-2 focus:outline-none focus:border-blue-500 w-[425px] text-black mb-5">
        <option value="" disabled selected >Pilih jenis kulit</option>
        <option value="normal">Kulit Normal</option>
        <option value="berminyak">Kulit Berminyak</option>
        <option value="kering">Kulit Kering</option>
        <option value="kombinasi">Kulit Kombinasi</option>
        <option value="sensitif">Kulit Sensitif</option>
        </select>
        <div>Jenis Kelamin</div>
        <select className="border bg-purple2 rounded-xl shadow-lg px-4 py-2 focus:outline-none focus:border-blue-500 w-[425px] text-black">
        <option value="" disabled selected className="text-gray-400">Pilih jenis kelamin</option>
        <option value="laki-laki">Laki-laki</option>
        <option value="perempuan">Perempuan</option>
        </select>
        <div className="relative rounded-xl bg-blue-400 w-[425px] h-[45px] mt-10 text-center shadow-lg flex justify-center">
            <button>Simpan</button>
        </div>
      </div>
    );
  };
  
  export default Log;
  