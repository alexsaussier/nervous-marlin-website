import config from "../config";
import Image from 'next/image';
import logoWhite from '../public/assets/logoWhite.png';

export default function Footer(){
return (
<footer className="bg-gray-800 text-white py-8 px-4">
    
    <div className="container mx-auto flex flex-wrap justify-between">
    
        <div className="w-full md:w-1/4 mb-6 md:mb-0 text-center md:text-left">
            <div className="flex justify-center md:justify-start">
                <Image
                    src={logoWhite}
                    alt="Nervous Marlin Logo"
                    className="object-contain w-[100px] mb-4"
                />
            </div>
            <h3 className="text-xl font-semibold mb-4">{config.appName}</h3>
            <p className="text-sm mb-4">{config.appDescription}</p>

            <a href="/blog" className="text-sm underline hover:text-gray-300">Blog</a>

        </div>
        
        <div className="w-full md:w-1/4 mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            
            <a href="https://wa.me/5573999440050" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <p className="flex items-center justify-center md:justify-start text-sm md:text-md">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 mr-2" fill="#25D366">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                </svg>
                +55 73 99944-0050 🇧🇷
              </p> 
            </a>

            <a href="mailto:leonardoforesti69@gmail.com" className="hover:text-gray-300">
              <p className="flex items-center justify-center md:justify-start text-sm md:text-md">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 512 512" 
                  className="w-4 h-4 mr-2 fill-current"
                  width="16"
                  height="16"
                  style={{ minWidth: '16px', minHeight: '16px' }}
                >
                  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                </svg>
                leo@nervousmarlin.com
              </p>
            </a>

        </div>
        <div className="w-full md:w-1/4 text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex flex-col space-x-4">
                <p className="text-sm italic mb-2">Our social media accounts are coming soon!</p>
                <div className="mt-2 flex justify-center md:justify-start space-x-4 opacity-50">
                  
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </div>
            </div>
        </div>
    </div>
    <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
        <p>&copy; {new Date().getFullYear()} {config.appName}. All rights reserved.</p>
        <p className="mt-2">
            <a href="/privacy-policy" className="hover:text-gray-300">Privacy Policy</a> | 
            <a href="/terms-of-service" className="hover:text-gray-300">Terms of Service</a>
        </p>
        <p className="mt-2 italic">Website created by <a href="https://www.batterseawebdesign.com" className="hover:text-gray-300">Battersea Web Design</a></p>
    </div>
</footer>
)
}
