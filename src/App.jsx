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

// Lazy-load layouts & pages
const StaffLayout = lazy(() => import("./layouts/StaffLayout"));
const Dashboard = lazy(() => import("./pages/StaffGudang/Dashboard"));
const BarangMasuk = lazy(() => import("./pages/StaffGudang/BarangMasuk"));
const BarangKeluar = lazy(() => import("./pages/StaffGudang/BarangKeluar"));
const RiwayatTransaksi = lazy(() =>
  import("./pages/StaffGudang/RiwayatTransaksi")
);

// Auth Pages
const Profile = lazy(() => import("./pages/auth/Profile"));
const EditProfile = lazy(() => import("./pages/auth/EditProfile"));
const Settings = lazy(() => import("./pages/auth/Settings"));
const Logout = lazy(() => import("./pages/auth/Logout"));
const Register = lazy(() => import("./pages/auth/Register"));
const ForgotPassword = lazy(() => import("./pages/auth/ForgotPassword"));
const NotFound = lazy(() => import("./pages/NotFound"));

const Loading = () => <div className="text-center mt-10">Loading...</div>;

// Komponen terpisah agar bisa gunakan useLocation & useNavigate
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
        <Route path="/" element={<div />} /> {/* Modal login */}
        {/* Halaman staff gudang */}
        <Route path="/staffgudang" element={<StaffLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="masuk" element={<BarangMasuk />} />
          <Route path="keluar" element={<BarangKeluar />} />
          <Route path="riwayat" element={<RiwayatTransaksi />} />
        </Route>
        {/* Halaman akun dan pengaturan */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/logout" element={<Logout />} />
        {/* Tambahan halaman register dan forgot password */}
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        {/* Not Found */}
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
