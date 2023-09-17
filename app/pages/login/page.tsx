import Image from 'next/image';
import Log from '@/app/components/login/page';

const Login = () => {
  return (
    <div className="bg-purple1 w-full overflow-hidden text-black font-poppins">
      <div className="w-1/2 h-full left-0 bg-purple2 p-[108px]">
        <Image
        className="m-auto"
        src="/img/login.png"
        width={500}
        height={500}
        alt="Logo"
        />
      <div className="heading text-center">
      Halo, selamat datang di
      </div>
      <ul className='sub-title font-bold text-center'>GlowEvermore</ul>
       </div>
       <div className='absolute right-0 top-0 mt-32 mx-52 heading'>
        <span className='flex justify-center items-center font-bold'>Buat akun anda</span>
        <Log />
       </div>
    </div>
  );
};

export default Login;
