import { Outlet } from "react-router-dom";
import Nav from "../components/Header/Nav";


const Layout = () => {
    return (
        <>
            <header className="container mx-auto px-4">
                <Nav />
            </header>
            <main className="container mx-auto px-4">
                <Outlet/>
            </main>
        </>
    );
};

export default Layout;