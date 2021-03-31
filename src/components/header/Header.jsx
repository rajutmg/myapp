import './header.css';

const Header = () => {
    return (
        <>
            <header onClick={() => window.scroll(0, 0)} className="header">
                <h2>Movies App</h2>
            </header>
        </>
    )
}

export default Header;
