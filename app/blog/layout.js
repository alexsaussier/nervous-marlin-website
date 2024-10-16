import { Suspense } from "react";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Outside4sun from "@/public/images/house/outside4sun.jpg";


export default async function LayoutBlog({ children }) {
  return (
    <div>
      
      <div className="w-full h-20 bg-gray-800">
      </div>
      
      <main className="min-h-screen  mx-auto ">

       
        {children}
      </main>

      <div className="h-24" />

    </div>
  );
}
