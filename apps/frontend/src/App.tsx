import Footer from "./components/common/footer/Footer";
import './App.css'
import Header from "./components/common/header/Header";
import TaskDashboard from "./components/pages/TaskDashboard";
import DepartmentDashboard from "./components/pages/DepartmentDashboard";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<TaskDashboard />} />
        <Route path="/task-dashboard" element={<TaskDashboard />} />
        <Route path="/department-dashboard" element={<DepartmentDashboard />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
