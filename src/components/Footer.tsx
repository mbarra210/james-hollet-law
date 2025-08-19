import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#001f3f] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center gap-8">
          {/* Firm Information */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              James Hollet
              <span className="block text-[#d4af37] text-lg">Attorney at Law</span>
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Providing experienced legal counsel with integrity, dedication, and results that matter to our clients.
            </p>
          </div>

          {/* Quick Contact */}
          <div>
            <h4 className="text-lg font-semibold text-center mb-4 text-[#d4af37]">Quick Contact</h4>
            <div className="space-y-3 flex flex-col items-center justify-center">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                <span className="text-gray-300">123 Legal Plaza, Suite 500, New York, NY 10001</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                <span className="text-gray-300">(304) 303-9843</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                <span className="text-gray-300">rofilate007@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-600" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} James Hollet, Attorney at Law. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-[#d4af37] transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;