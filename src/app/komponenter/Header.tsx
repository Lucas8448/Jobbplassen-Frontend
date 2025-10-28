export default function Header(){
    return (
    <header className="bg-blue-600 text-white p-4">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl font-bold">JobbPlassen</h1>

        {/* Navigasjon */}
        <nav className="space-x-6">
        <a href="#" className="hover:text-gray-200">Arbeid</a>
        <a href="#" className="hover:text-gray-200">Ledige stillinger</a>
        <a href="#" className="hover:text-gray-200">Mine jobber</a>
        <a href="#" className="hover:text-gray-200">Logg inn</a>
        </nav>
    </div>
    </header>
    )
}