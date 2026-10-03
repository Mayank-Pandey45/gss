import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Notifications from './pages/Notifications.jsx';
import Events from './pages/Events.jsx';
import Company from './pages/Company.jsx';
import Careers from './pages/Careers.jsx';
import Contact from './pages/Contact.jsx';
import Login from './pages/Login.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/events" element={<Events />} />
        <Route path="/company" element={<Company />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team-login" element={<Login />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
