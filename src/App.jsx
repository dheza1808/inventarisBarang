// src/App.jsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Suspense, lazy } from "react";
import "./assets/tailwind.css";

// Protected Route
import ProtectedRoute from "./components/ProtectedRoute";

// Layouts
const StaffLayout = lazy(() => import("./layouts/StaffLayout"));
const MainLayout = lazy(() => import("./layouts/MainLayout")); // Guest layout

// Guest Pages
const Front = lazy(() => import("./pages/Guest/Front"));
const About = lazy(() => import("./pages/Guest/About"));
const Contact = lazy(() => import("./pages/Guest/Contact"));
const FAQPageGuest = lazy(() => import("./pages/Guest/FAQPage"));
const Articles = lazy(() => import("./pages/Guest/Articles"));
const DetailArticles = lazy(() => import("./pages/Guest/DetailArticles"));
const DetailPage = lazy(() => import("./pages/Guest/DetailPage"));
const AdvancedSearch = lazy(() => import("./pages/Guest/AdvancedSearch"));

// Staff Pages (Protected)
const Dashboard = lazy(() => import("./pages/StaffGudang/Dashboard"));
const BarangMasuk = lazy(() => import("./pages/StaffGudang/BarangMasuk"));
const PersetujuanPeminjaman = lazy(() => import("./pages/StaffGudang/PersetujuanPeminjaman"));
const RiwayatTransaksi = lazy(() => import("./pages/StaffGudang/RiwayatTransaksi"));
const Aset = lazy(() => import("./pages/StaffGudang/Aset"));
const Customer = lazy(() => import("./pages/StaffGudang/Customer"));
const Pengguna = lazy(() => import("./pages/StaffGudang/Pengguna"));
const FaqPageStaff = lazy(() => import("./pages/StaffGudang/FaqPage"));

// Auth Pages
const Login = lazy(() => import("./pages/auth/Login"));
const Register = lazy(() => import("./pages/auth/Register"));
const ForgotPassword = lazy(() => import("./pages/auth/ForgotPassword"));
const Profile = lazy(() => import("./pages/auth/Profile"));
const EditProfile = lazy(() => import("./pages/auth/EditProfile"));
const Settings = lazy(() => import("./pages/auth/Settings"));
const Logout = lazy(() => import("./pages/auth/Logout"));
const Notifikasi = lazy(() => import("./pages/auth/Notifikasi"));

// Not Found
const NotFound = lazy(() => import("./pages/NotFound"));

// Fallback loading
const Loading = () => <div className="text-center mt-10 text-lg">Loading...</div>;

function AppRoutes() {
  return (
    <Routes>
      {/* ======== GUEST ROUTES (default) ======== */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Front />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<FAQPageGuest />} />
        <Route path="articles" element={<Articles />} />
        <Route path="articles/:id" element={<DetailArticles />} />
        <Route path="detail/:id" element={<DetailPage />} />
        <Route path="advanced" element={<AdvancedSearch />} />
      </Route>

      {/* ======== STAFF ROUTES (Protected) ======== */}
      <Route
        path="/staffgudang"
        element={
          <ProtectedRoute>
            <StaffLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="masuk" element={<BarangMasuk />} />
        <Route path="peminjaman" element={<PersetujuanPeminjaman />} />
        <Route path="riwayat" element={<RiwayatTransaksi />} />
        <Route path="aset" element={<Aset />} />
        <Route path="customer" element={<Customer />} />
        <Route path="pengguna" element={<Pengguna />} />
        <Route path="faq" element={<FaqPageStaff />} />
      </Route>

      {/* ======== AUTH ROUTES ======== */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot" element={<ForgotPassword />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/editprofile" element={<EditProfile />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/notifikasi" element={<Notifikasi />} />

      {/* ======== NOT FOUND ROUTE ======== */}
      <Route path="*" element={<NotFound />} />
    </Routes>
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
