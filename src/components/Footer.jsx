import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white text-xs w-full px-4 py-2 mt-auto">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 items-start">
        {/* Tentang Kami */}
        <div>
          <h2 className="font-semibold mb-1">Tentang Kami</h2>
          <p className="text-white/80 leading-tight">
            PT Maju Bersama adalah perusahaan distribusi dan manajemen gudang modern.
          </p>
        </div>

        {/* Navigasi */}
        <div>
          <h2 className="font-semibold mb-1">Navigasi</h2>
          <ul className="space-y-0.5">
            <li><a href="/staffgudang" className="hover:underline">Dashboard</a></li>
            <li><a href="/staffgudang/riwayat" className="hover:underline">Riwayat Transaksi</a></li>
            <li><a href="/staffgudang/masuk" className="hover:underline">Barang Masuk</a></li>
            <li><a href="/staffgudang/keluar" className="hover:underline">Barang Keluar</a></li>
          </ul>
        </div>

        {/* Sosial Media */}
        <div>
          <h2 className="font-semibold mb-1">Ikuti Kami</h2>
          <div className="flex space-x-2 text-[12px]">
            <a href="#" className="hover:text-purple-300"><FaFacebookF /></a>
            <a href="#" className="hover:text-purple-300"><FaTwitter /></a>
            <a href="#" className="hover:text-purple-300"><FaInstagram /></a>
            <a href="#" className="hover:text-purple-300"><FaLinkedin /></a>
          </div>
          <p className="mt-1 text-white/70">support@majubersama.com</p>
        </div>
      </div>

      <div className="text-center mt-2 border-t border-white/20 pt-1 text-white/60">
        &copy; {new Date().getFullYear()} PT Maju Bersama. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
