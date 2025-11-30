import { useState } from "react";
import MapView from "./components/MapView";

export default function App() {
  const [query, setQuery] = useState("");
  const [coords, setCoords] = useState<[number, number]>([50.94, 6.95]);

  // ------ Search Function ------
  const handleSearch = async () => {
    if (!query.trim()) return;

    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${query}`;
    const res = await fetch(url);
    const data = await res.json();

    if (data.length > 0) {
      const lat = parseFloat(data[0].lat);
      const lon = parseFloat(data[0].lon);
      setCoords([lat, lon]); // update map center
    }
  };

  return (
    <div className="flex h-screen w-full">

      {/* LEFT ICON BAR */}
      <div className="w-[60px] bg-[#E4CDB6] flex flex-col items-center py-6 space-y-6 shadow-inner">

        <img src="/icons/back.svg" className="w-6 h-6 cursor-pointer" />
        <img src="/icons/home.svg" className="w-6 h-6 cursor-pointer" />
        <img src="/icons/grid.svg" className="w-6 h-6 cursor-pointer" />
        <img src="/icons/mail.svg" className="w-6 h-6 cursor-pointer" />

      </div>

      {/* LEFT PANEL CONTENT */}
      <div className="w-[350px] bg-[#F8EFE6] px-6 py-8 border-r border-[#E8D9C8]">

        {/* TITLE */}
        <h2 className="text-[22px] font-semibold text-[#CF702F] mb-4">
          Define Area of Interest
        </h2>

        {/* SUBTEXT */}
        <p className="text-[15px] text-[#3A3A3A] leading-relaxed mb-6">
          <span className="font-semibold">Define the area(s)</span> where you will apply
          your object count & detection model.
        </p>

        <h3 className="text-[16px] font-semibold mb-2">Options:</h3>

        {/* SEARCH SECTION */}
        <div className="bg-[#F4E7DA] rounded-xl p-4 mb-4 border border-[#E8D9C8]">

          <p className="text-[15px] text-[#5C5C5C] mb-3">
            🔍 <span className="font-medium">Search for a city, town…</span>
            <br /> or draw area on map
          </p>

          <input
            type="text"
            placeholder="Enter location…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full p-2 rounded-lg bg-white border outline-none"
          />

          <button
            onClick={handleSearch}
            className="mt-3 bg-[#CF702F] text-white py-2 w-full rounded-lg hover:bg-[#b85e23] transition"
          >
            Search
          </button>

        </div>

        {/* UPLOAD SHAPEFILE */}
        <div className="bg-[#F4E7DA] rounded-xl p-4 border border-[#E8D9C8]">
          <p className="text-[15px] text-[#5C5C5C]">
            📁 <span className="font-medium">Upload a shape file</span>
          </p>
        </div>
      </div>

      {/* MAP */}
      <div className="flex-1 h-full">
        <MapView coords={coords} />
      </div>
    </div>
  );
}
