import { Route, Routes, Navigate } from "react-router-dom"

import Swap from "./pages/Swap"
import Dashboard from "./pages/Dashboard"
import PairPage from "./pages/Dashboard/Pair"
import Migrate from "./pages/Migrate"

export default () => (
  <Routes>
    <Route index element={<Dashboard />} />
    <Route path="/swap" element={<Swap />} />
    <Route path="/migration" element={<Migrate />} />
    <Route path="/pairs/:address" element={<PairPage />} />
    <Route element={<Navigate to="/" replace />} />
  </Routes>
)
