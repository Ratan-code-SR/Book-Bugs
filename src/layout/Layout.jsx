import Nav from "../components/Header/Nav";
import Home from "../pages/Home";



const Layout = () => {
    return (
        <>
            <header className="container mx-auto px-4">
                <Nav />
            </header>
            <main>
                <Home />
            </main>
        </>
    );
};

export default Layout;