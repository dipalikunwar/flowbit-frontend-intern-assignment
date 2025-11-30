AOI Creation — Frontend Engineer Internship Assignment

A single-page React application built according to Flowbit’s Figma design.
The app includes a sidebar UI, WMS satellite imagery, geocoding search, and an interactive map using Leaflet.

🚀 Tech Stack

React (TypeScript)

Vite

Tailwind CSS

Leaflet + React-Leaflet

Playwright (E2E Testing)

📦 Project Setup
1. Clone the repository
git clone <your_repo_url>
cd flowbit-aoi

2. Install dependencies
npm install

3. Start development server
npm run dev


The app runs at:
👉 http://localhost:5173

🗺️ Map Library Choice: Why Leaflet?
✔ Why I selected Leaflet

Very lightweight (~40kb)

Excellent WMS support

Simple React integration via react-leaflet

High performance for tile-based maps

Easy to extend (drawing tools, markers, layers)

✔ Alternatives considered
Alternative	Why not chosen
MapLibre GL	Great for vector tiles, but WMS support weaker & heavier
OpenLayers	Extremely powerful but too complex for a 1-page assignment
react-map-gl	Works best with Mapbox, not ideal for a public WMS endpoint

Conclusion:
Leaflet gives the best balance of performance + simplicity + WMS support.

🧱 Architecture Decisions
✔ Component-Based Structure
src/
 ├─ components/
 │   ├─ MapView.tsx
 │   └─ Sidebar.tsx (inside App)
 ├─ App.tsx
 └─ index.tsx

✔ State Management

Used React useState because:

App is simple

Only map center, search query, and sidebar interactions

No need for Redux/MobX

✔ MapView Component

Receives coords prop

Re-renders only when user searches a location

WMS TileLayer is isolated inside MapView

✔ Sidebar

Pure UI component

Matches Figma (colors, spacing, icons, typography)

⚡ Performance Considerations

Flowbit specifically mentioned:
➡ Must consider future support for 1000+ polygons/points

✔ My solution:

Lazy rendering → Map updates only when center changes

WMS layer → Tiles served by remote server, not rendered locally

Memoized components

Separation of WMS + base map

Future-proof:

Use GeoJSON Layer with clustering

Virtualized marker rendering

Debounced map events

Add-on performance ideas:

Server-side tile caching

Using WebGL through MapLibre only for very heavy layers

Background worker for shape parsing

🔍 Testing Strategy (Playwright)
✔ What is tested

App loads (UI + sidebar + map container)

Map renders with WMS tile layer

Search feature updates map position using Nominatim

✔ Why these tests?

Covers most important user flow:
“User searches → Map updates → WMS loads”

Ensures app is stable end-to-end

Shows understanding of real E2E testing

✔ If I had more time

Component unit tests with React Testing Library

Map tile load mocking

Visual regression tests

Accessibility tests

⚖️ Tradeoffs Made
1. Used Leaflet instead of MapLibre/OpenLayers

Easier + faster → great for assignment deadline

Tradeoff: advanced WebGL performance is not available

2. Using client-side search

Nominatim rate limits exist

But no backend required → fits assignment requirement

3. WMS layer directly added

No server proxy used

Simpler architecture

Tradeoff: CORS limitations if server changed behavior

🏭 Production Readiness (future improvements)
✔ What I would add for production:

Global state (Zustand / Redux Toolkit)

Layer toggle panel

Draw tools for:

Polygons

Circles

Freehand AOI

CORS-safe backend proxy for WMS calls

Loading skeletons for map

Autosave AOIs in:

localStorage

or cloud storage

Error boundaries

Form validation

Rate-limit fallback for geocoder

⏱️ Time Spent
Task	Time
Environment Setup	1 hour
Tailwind UI Layout	2.5 hours
Map Integration + WMS	2 hours
Geocoding Search	1 hour
Icons & Figma pixel-perfect work	2 hours
Testing (Playwright)	1 hour
README + Documentation	1 hour
Total	~10 hours
📹 Demo Video Checklist

When recording your 3–5 min video:

Show:

✔ App open
✔ Map load
✔ WMS tiles
✔ Sidebar UI
✔ Search box working (map moves)
✔ Tests running
✔ Code structure explanation

✔ Final Deliverables

 Working SPA

 WMS layer

 Search + geocoder

 Playwright tests

 Pixel-perfect sidebar UI

 README (this file)

 GitHub repo

