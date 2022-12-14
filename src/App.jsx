import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import UploadPage from "./pages/UploadPage/UploadPage";
import PageHeader from "./components/PageHeader/PageHeader";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* PAGE HEADER */}
        <PageHeader />
        {/* APPLY ROUTES */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/videos" element={<HomePage />} />
          <Route path="/videos/:id" element={<HomePage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="*" element={<h1>PLEASE USE THE RIGHT URL</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
