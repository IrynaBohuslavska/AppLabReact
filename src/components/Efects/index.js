import './style.css';
import HeaderChapter from "../reusedComponents/HeaderChapter";

function Efects() {
    return (
        <div className="Efects">
            <div className="container margEfects">
                <div className="row">
                    <div className="col-md-4">
                        <div className="margEfectsPhoto">
                            <img src="../pictures/icons/icon-4.png" height="58" width="58"/>
                        </div>
                        <HeaderChapter
                            title="Automatic Payouts"
                            text="Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh
                            ultricies
                            vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent
                            commodo
                            cursus
                            magna."
                            align="left"
                            sizeHeader="small"
                            sizeChap="small"
                        />
                    </div>
                    <div className="col-md-4">
                        <div className="margEfectsPhoto">
                            <img src="../pictures/icons/icon-5.png" height="58" width="58"/>
                        </div>

                        <HeaderChapter
                            title="Network Efect"
                            text="Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
                            elit. Cras
                            mattis
                            consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris
                            condimentum
                            nibh."
                            align="left"
                            sizeHeader="small"
                            sizeChap="small"
                        />
                    </div>
                    <div className="col-md-4">
                        <div className="margEfectsPhoto">
                            <img src="../pictures/icons/icon-6.png" height="58" width="58"/>
                        </div>

                        <HeaderChapter
                            title="Bigger Rewards Method"
                            text="Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum
                            id ligula
                            porta
                            felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
                            nibh, ut
                            fermentum
                            massa justo sit amet risus."
                            align="left"
                            sizeHeader="small"
                            sizeChap="small"
                        />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Efects;
