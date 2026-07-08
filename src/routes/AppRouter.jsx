import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import Home from "../pages/public/Home";
import Events from "../pages/public/Events";
import EventDetail from "../pages/public/EventDetail";
import Artists from "../pages/public/Artists";
import ArtistDetail from "../pages/public/ArtistDetail";
import Gallery from "../pages/public/Gallery";
import Bookings from "../pages/public/Bookings";
import Contact from "../pages/public/Contact";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/eventos" element={<Events />} />
          <Route path="/eventos/:slug" element={<EventDetail />} />
          <Route path="/artistas" element={<Artists />} />
          <Route path="/artistas/:slug" element={<ArtistDetail />} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/contacto" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
