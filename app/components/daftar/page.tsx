// pages/register.tsx

'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import the Next.js router
import supabase from '../../../lib/supabase';
import Swal from 'sweetalert2'; // Import SweetAlert2

const Daf = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [skinType, setSkinType] = useState('');
  const [gender, setGender] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Add loading state
  const router = useRouter(); // Initialize the router

  const handleRegistration = async () => {
    setIsLoading(true); // Set loading to true when registration starts

    try {
      if (password.length < 6) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Password harus lebih dari 6 atau setidaknya 6 karakter',
        });
        setIsLoading(false); // Set loading to false on password validation error
        return;
      }

      const { user, error }: any = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        if (error.message === 'Email rate limit exceeded') {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Mohon maaf, request terlalu banyak. Coba lagi nanti.',
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Registration error: ' + error.message,
          });
        }
      } else {
        const { data, error }: any = await supabase.from('users').upsert([
          {
            email,
            password, // You should hash the password securely on the server-side before storing it.
            tipe_kulit: skinType,
            jenis_kelamin: gender,
          },
        ]);

        if (error) {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Data insertion error: ' + error.message,
          });
        } else {
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'User registered successfully.',
          }).then((result) => {
            if (result.isConfirmed) {
              router.push('/pages/login'); // Redirect to the login page upon successful registration
            } else {
              // Handle the case where the user closes the success alert
              // You can decide what to do in this case
            }
          });
        }
      }
    } catch (error: any) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error: ' + error.message,
      });
    } finally {
      setIsLoading(false); // Set loading to false when registration completes
    }
  };

  return (
    <div className="my-10 heading2">
      <div>Email</div>
      <input
        className="mb-5 border bg-purple2 rounded-xl shadow-lg px-4 py-2 focus:outline-none focus:border-blue-500"
        type="text"
        placeholder="Masukkan email anda"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div>Kata Sandi</div>
      <input
        className="mb-5 border bg-purple2 rounded-xl shadow-lg px-4 py-2 focus:outline-none focus:border-blue-500"
        type="password"
        placeholder="Masukkan kata sandi anda"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div>Tipe Kulit</div>
      <select
        className="border bg-purple2 rounded-xl shadow-lg px-4 py-2 focus:outline-none focus:border-blue-500 w-[425px] text-black mb-5"
        value={skinType}
        onChange={(e) => setSkinType(e.target.value)}
      >
        <option value="" disabled>Select jenis kulit</option>
        <option value="normal">Kulit Normal</option>
        <option value="berminyak">Kulit Berminyak</option>
        <option value="kering">Kulit Kering</option>
        <option value="kombinasi">Kulit Kombinasi</option>
        <option value="sensitif">Kulit Sensitif</option>
      </select>
      <div>Jenis Kelamin</div>
      <select
        className="border bg-purple2 rounded-xl shadow-lg px-4 py-2 focus:outline-none focus:border-blue-500 w-[425px] text-black"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      >
        <option value="" disabled>Select jenis kelamin</option>
        <option value="laki-laki">Laki-laki</option>
        <option value="perempuan">Perempuan</option>
      </select>
      <div className="relative rounded-xl bg-blue-400 w-[425px] h-[45px] mt-10 text-center shadow-lg flex justify-center">
        <button onClick={handleRegistration} disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Simpan'}
        </button>
      </div>
        <p className='text-center mx-auto text-sm mt-8'>Sudah punya akun ? <span className='relative rounded-lg bg-blue-400 mt-8 text-sm text-center shadow-lg'><a href="/pages/login">Masuk disini!</a></span></p>
    </div>
  );
};

export default Daf;
