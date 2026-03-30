import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";
import { Outlet } from "react-router";

// Layout To be used for each page.
const Layout = () => {

    return (
        <>
            <Header />
                <Outlet />
            <Footer />
        </>
    )
}

export default Layout;