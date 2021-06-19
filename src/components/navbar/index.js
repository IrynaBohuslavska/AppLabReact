
import './style.css';
import Button from "../reusedComponents/button";

function NavBar() {
    return (
        <div className="Navbar">
            <div
                className="fixed-top d-flex flex-column flex-md-row flex-sm-row align-items-center p-3 bg-white box-shadow">
                <h5 className="mr-md-auto font-weight-normal margin">
                    <img src="../pictures/main/logo.png" height="41" width="125"/></h5>
                <nav className="row">
                    <a className="p-2 text-dark" href="#">Home</a>
                    <a className="p-2 text-dark" href="#key">Key Features</a>
                    <a className="p-2 text-dark" href="#pricing">Pricing</a>
                    <a className="p-2 text-dark" href="#testimal">Testimal</a>
                    <a className="p-2 text-dark" href="#ask">FQA</a>
                    <div className="button-navvbar">
                        <Button
                            title = {"Try for free"}
                            link = {"#try"}
                            color = "blue"
                        />
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default NavBar;
