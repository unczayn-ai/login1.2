import Navbar from "../components/Navbar";

function MainLayout({children}) {

    return(
        <>
            <Navbar />
            <div className="container">
                {children}
            </div>
        </>
    );
}

export default MainLayout;