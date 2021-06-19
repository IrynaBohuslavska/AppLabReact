import './style.css';
import Button from "../reusedComponents/button";
import HeaderChapter from "../reusedComponents/HeaderChapter";

function BestApp() {
    return (
        <div className="BestApp bg1">
            <div className="container margHead">
                <div className="row">
                    <div className="col-md-7 margHead">
                        <div className= "margImg">
                            <img src="../pictures/main/1.PNG" height="30"/>
                        </div>
                        <HeaderChapter
                            title="Best app for your modern life style"
                            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Adipisci, blanditiis cum."
                            align="left"
                            sizeHeader = "big"
                            sizeChap = "big"
                        />
                        <p className="text-muted"></p>
                        <div className="row">
                            <div className="col-md-3">
                                <Button
                                    title={"Try for free"}
                                    link="#"
                                    color = "blue"
                                />
                            </div>
                            <div className="col-md-6">
                                <Button
                                    title={"Watch demo video"}
                                    link={"#"}
                                    color = "white"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <img className="mx-auto" src="../pictures/main/home.png"
                             height="600"/>
                    </div>
                    <div id="photo"></div>
                </div>
            </div>
        </div>
    );
}

export default BestApp;
