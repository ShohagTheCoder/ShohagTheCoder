export default function Header() {
    return (
        <header className="bg-slate-600 p-5 flex justify-between align-middle">
            <h1>Shohag the coder</h1>
            <nav className="ms-3">
                <ol className="flex justify-end gap-2">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Projects</a>
                    </li>
                    <li>
                        <a href="#">Clients</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ol>
            </nav>
        </header>
    );
}
