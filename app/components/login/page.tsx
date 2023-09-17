"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2"; // Import SweetAlert2
import supabase from "@/lib/supabase";

const Log = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    // Check if email or password is empty
    if (!email || !password) {
      // Display a SweetAlert2 error
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Please fill in both email and password.",
      });
      return;
    }

    // Fetch user data from the Supabase table
    const { data, error } = await supabase
      .from("users")
      .select()
      .eq("email", email);

    if (error) {
      // Display a SweetAlert2 error
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred. Please try again.",
      });
      return;
    }

    // Check if a user with the given email exists
    if (data && data.length > 0) {
      const user = data[0];

      // Check if the password matches
      if (user.password === password) {
        // Successful login
        // Display a SweetAlert2 success message
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Horray! Login successful.",
        }).then((result) => {
          if (result.isConfirmed) {
            // Redirect to the homepage
            router.push("/pages/homePage");
          }
        });
      } else {
        // Display a SweetAlert2 error
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Incorrect password.",
        });
      }
    } else {
      // Display a SweetAlert2 error
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "User not found.",
      });
    }
  };

  return (
    <div className="my-10 heading2">
      <form onSubmit={handleSubmit}>
        {/* Email input field */}
        <div>Email</div>
        <input
          className="mb-5 border rounded-xl shadow-lg px-4 py-2 focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Masukkan email anda"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        {/* Password input field */}
        <div>Kata Sandi</div>
        <input
          className="mb-5 border rounded-xl shadow-lg px-4 py-2 focus:outline-none focus:border-blue-500"
          type="password"
          placeholder="Masukkan password anda"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        {/* Submit button */}
        <div className="relative rounded-xl bg-blue-400 w-[425px] h-[45px] mt-10 text-center shadow-lg flex justify-center">
          <button type="submit">Masuk</button>
        </div>
      </form>

      <p className="text-center mx-auto text-sm mt-8">
        Belum punya akun?{" "}
        <span className="relative rounded-lg bg-blue-400 mt-8 text-sm text-center shadow-lg">
          <a href="/pages/daftar">Daftar disini!</a>
        </span>
      </p>
    </div>
  );
};

export default Log;
