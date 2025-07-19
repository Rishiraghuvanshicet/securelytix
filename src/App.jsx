// src/App.jsx
import GalaxyBackground from './components/GalaxyBackground';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden' }}>
      <GalaxyBackground />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
