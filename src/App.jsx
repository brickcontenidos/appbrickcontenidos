import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-800 text-white">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        {/* El contenido de tus páginas irá aquí */}
        <h1 className="text-4xl font-bold">¡Mi Esqueleto de App Funciona!</h1>
      </main>
      <Footer />
    </div>
  )
}

export default App;

