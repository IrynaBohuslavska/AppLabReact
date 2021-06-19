import './style.css';
import HeaderChapter from "../reusedComponents/HeaderChapter";

function Dounload() {
    return (
        <div className="Dounload">
            <div className="row col-md marg">
                <div className="col-md-3">
                </div>
                <div className="col-md-3">
                    <HeaderChapter
                        title="Douload our app now!"
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Adipisci, blanditiis cum."
                        align = "left"
                        sizeHeader = "big"
                        sizeChap = "big"
                    />
                    <p className="row d-flex flex-row">
                        <img className="comLogo" src="../pictures/icons/googleplay.png" height="40"/>
                        <img src="../pictures/icons/ios.png" height="40"/>

                    </p>
                </div>

                <div className="col-md-4">
                    <img className="img-fluid mx-auto" src="../pictures/main/download.png" height="472"
                         width="844"/>
                </div>
            </div>
        </div>
    );
}

export default Dounload;
