// src/App.jsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Suspense, lazy } from "react";
import "./assets/tailwind.css";
import LoginModal from "./components/LoginModal";
import FAQPage from "./pages/Guest/FAQPage";

// Layouts
const StaffLayout = lazy(() => import("./layouts/StaffLayout"));
const MainLayout = lazy(() => import("./layouts/MainLayout")); // Guest layout

// Staff Pages
const Dashboard = lazy(() => import("./pages/StaffGudang/Dashboard"));
const BarangMasuk = lazy(() => import("./pages/StaffGudang/BarangMasuk"));
const BarangKeluar = lazy(() => import("./pages/StaffGudang/BarangKeluar"));
const RiwayatTransaksi = lazy(() =>
  import("./pages/StaffGudang/RiwayatTransaksi")
);
const Aset = lazy(() => import("./pages/StaffGudang/Aset"));
const Supplier = lazy(() => import("./pages/StaffGudang/Supplier"));
const Customer = lazy(() => import("./pages/StaffGudang/Customer"));
const LaporanStok = lazy(() => import("./pages/StaffGudang/LaporanStok"));
const LaporanMasuk = lazy(() => import("./pages/StaffGudang/LaporanMasuk"));
const LaporanKeluar = lazy(() => import("./pages/StaffGudang/LaporanKeluar"));
const Pengguna = lazy(() => import("./pages/StaffGudang/Pengguna"));

// Guest Pages
const Front = lazy(() => import("./pages/Guest/Front"));
const About = lazy(() => import("./pages/Guest/About"));
const Contact = lazy(() => import("./pages/Guest/Contact"));
const Articles = lazy(() => import("./pages/Guest/Articles"));

// Auth Pages
const Profile = lazy(() => import("./pages/auth/Profile"));
const EditProfile = lazy(() => import("./pages/auth/EditProfile"));
const Settings = lazy(() => import("./pages/auth/Settings"));
const Logout = lazy(() => import("./pages/auth/Logout"));
const Register = lazy(() => import("./pages/auth/Register"));
const ForgotPassword = lazy(() => import("./pages/auth/ForgotPassword"));
const Notifikasi = lazy(() => import("./pages/auth/Notifikasi"));
const NotFound = lazy(() => import("./pages/NotFound"));

const Loading = () => <div className="text-center mt-10">Loading...</div>;

// Routing Wrapper (for modal login logic)
function AppRoutes() {
  const location = useLocation();
  const navigate = useNavigate();

  const isLoginModalOpen = location.pathname === "/";

  const handleCloseLogin = () => {
    navigate("/staffgudang"); // redirect ke dashboard setelah login
  };

  return (
    <>
      {/* Tampilkan modal login jika di path "/" */}
      {isLoginModalOpen && <LoginModal onClose={handleCloseLogin} />}

      <Routes>
        {/* Route kosong untuk modal login */}
        <Route path="/" element={<div />} />

        {/* ======== STAFF ROUTES ======== */}
        <Route path="/staffgudang" element={<StaffLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="masuk" element={<BarangMasuk />} />
          <Route path="keluar" element={<BarangKeluar />} />
          <Route path="riwayat" element={<RiwayatTransaksi />} />
          <Route path="aset" element={<Aset />} />
          <Route path="supplier" element={<Supplier />} />
          <Route path="customer" element={<Customer />} />
          <Route path="laporan/stok" element={<LaporanStok />} />
          <Route path="laporan/masuk" element={<LaporanMasuk />} />
          <Route path="laporan/keluar" element={<LaporanKeluar />} />
          <Route path="pengguna" element={<Pengguna />} />
        </Route>

        {/* ======== GUEST ROUTES ======== */}
        <Route path="/guest" element={<MainLayout />}>
          <Route index element={<Front />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="articles" element={<Articles />} />
        </Route>

        {/* ======== AUTH ROUTES ======== */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/notifikasi" element={<Notifikasi />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<ForgotPassword />} />

        {/* Catch-all NotFound */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <AppRoutes />
      </Suspense>
    </Router>
  );
}

export default App;
