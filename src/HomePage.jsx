function HomePage({ onNavigate }) {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-6">
      <h1 className="text-3xl font-bold">Página de inicio</h1>
      <div className="flex flex-col space-y-2">
        <button
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
          onClick={() => onNavigate('calendar')}
        >
          Calendario
        </button>
        <button
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
          onClick={() => onNavigate('packages')}
        >
          Paquetes
        </button>
        <button
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
          onClick={() => onNavigate('brands')}
        >
          Marcas
        </button>
        <button
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
          onClick={() => onNavigate('quiz')}
        >
          Quiz
        </button>
      </div>
    </div>
  );
}

export default HomePage;
