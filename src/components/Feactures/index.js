import './style.css';
import HeaderChapter from "../reusedComponents/HeaderChapter";
import Button from "../reusedComponents/button";

function Features() {
    return (
        <div className="Features">
            <div className="container margFeasch">
                <div className="row container">
                    <div className="col-md-6 order-md-2 padChapter margFeasch">
                        <HeaderChapter
                            title="Design & build with the least of code integration"
                            text="Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula
                            porta felis euismod
                            semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus,
                            tellus ac cursus
                            commodo."

                            align="left"
                            sizeHeader = "big"
                            sizeChap = "big"
                        />
                        <Button
                            title="Learn More"
                            link="#"
                            color = "blue"
                        />
                    </div>
                    <div className="col-md-6 order-md-1">
                        <img className="img-fluid mx-auto" src="../pictures/main/integration.png"/>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default Features;
