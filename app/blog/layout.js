import { Suspense } from "react";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Outside4sun from "@/public/images/house/outside4sun.jpg";


export default async function LayoutBlog({ children }) {
  return (
    <div>
      <Hero 
      title="The Nervous Marlin Blog"
      subtitle="Experience world-class Blue Marlin fishing in Bahia, Brazil"
      imageSrc={Outside4sun}
      />

      <main className="min-h-screen max-w-6xl mx-auto p-8">{children}</main>

      <div className="h-24" />

    </div>
  );
}
