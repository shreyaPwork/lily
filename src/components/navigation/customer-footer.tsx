import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

export function CustomerFooter() {
  return (
    <footer className="relative w-full">
      {/* Main section with background image */}
      <div
        className="w-full bg-bottom bg-no-repeat bg-cover flex flex-col"
        style={{
          backgroundImage: "url('/footer-bg.png')", // your image path
          backgroundSize: "contain",
          minHeight: "100vh",
        }}
      >
        {/* Content container */}
        <div className="flex-1 flex items-center">
          <div className="max-w-[1200px] mx-auto w-full px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            
            {/* Quick Links */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-red-600 mb-4">Quick links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:underline">About Us</Link></li>
                <li><Link href="/contact" className="hover:underline">Contact</Link></li>
                <li><Link href="/search" className="hover:underline">Search</Link></li>
                <li>
                  <a href="mailto:Support@lilyofficial.in" className="hover:underline">
                    Email: Support@lilyofficial.in
                  </a>
                </li>
              </ul>
            </div>

            {/* Help */}
            <div className="space-y-3 flex flex-col justify-center items-center md:items-start">
              <h3 className="text-lg font-semibold text-red-600 mb-4">Help</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
                <li><Link href="/refund-policy" className="hover:underline">Refund Policy</Link></li>
                <li><Link href="/shipping-policy" className="hover:underline">Shipping Policy</Link></li>
                <li><Link href="/terms" className="hover:underline">Terms of Service</Link></li>
                <li><Link href="/returns" className="hover:underline">Return / Exchange your order.</Link></li>
              </ul>
            </div>

            {/* Lily Address + Social */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-red-600 mb-4">LILY</h3>
              <p className="text-sm mb-4">Lily Address</p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="#" className="hover:text-pink-600 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-pink-600 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom black bar OUTSIDE the image */}
      <div className="bg-black text-white text-center text-sm py-4">
        © 2025 Lily. All Rights Reserved. | Developed by Syntellite
      </div>
    </footer>
  );
}
