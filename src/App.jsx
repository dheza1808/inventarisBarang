// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./assets/tailwind.css";

const Loading = () => <div className="text-center mt-10">Loading...</div>;

// Layout
const StaffLayout = lazy(() => import("./layouts/StaffLayout"));

// Pages
const Login = lazy(() => import("./pages/auth/Login"));
const Dashboard = lazy(() => import("./pages/StaffGudang/Dashboard"));
const BarangMasuk = lazy(() => import("./pages/StaffGudang/BarangMasuk"));
const BarangKeluar = lazy(() => import("./pages/StaffGudang/BarangKeluar"));
const RiwayatTransaksi = lazy(() => import("./pages/StaffGudang/RiwayatTransaksi"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/login" element={<Login />} />

          {/* Nest all /staffgudang routes */}
          <Route path="/staffgudang" element={<StaffLayout />}>
            <Route index element={<Dashboard />} /> {/* Ini untuk /staffgudang */}
            <Route path="masuk" element={<BarangMasuk />} />
            <Route path="keluar" element={<BarangKeluar />} />
            <Route path="riwayat" element={<RiwayatTransaksi />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
