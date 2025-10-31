export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">JobbPlassen</h1>

        <nav className="space-x-10">
          <a href="/" className="hover:text-gray-200">
            Hjemmeside
          </a>
          <a href="/ny" className="hover:text-gray-200">
            Legg til stilling
          </a>
        </nav>
      </div>
    </header>
  );
}
