import './style.css';
import HeaderChapter from "../reusedComponents/HeaderChapter";
import Button from "../reusedComponents/button";

function Buy() {


    function monthly()
    {
        document.getElementById("changeTextM").innerHTML = "$0/month";
        document.getElementById("changeTextY").innerHTML = "$99/month"
    }

    function annually() {
        document.getElementById("changeTextM").innerHTML = "$8.99/month";
        document.getElementById("changeTextY").innerHTML = "$199/month"
    }


    return (
        <div className="Buy">

            <a name="try"></a>
            <div className="container  margBuy ">
                <div className="row  text-center">
                    <div className="col-md">
                        <HeaderChapter
                            title="Take extra features without extra charges"
                            text="Quickly build an effective pricing table for your potential customers with
                            this Bootstrap
                            example. It's built with default Bootstrap components and utilities with little
                            customization."
                            align="center"
                            sizeHeader="big"
                            sizeChap="big"
                        />
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row text-center margBuyChapt">
                    <div className="col-md">
                        <div className="btn-group btn-group-toggle" data-toggle="buttons">
                            <label className="btn btn-primary active" onClick={monthly}>
                                Monthly
                            </label>
                            <label className="btn border" onClick={annually}>Annually
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container marg">
                <div className="row text-center d-flex justify-content-center">
                    <div className="col-md-4">
                        <div className="card mb-2 rounded-3 shadow">
                            <div className="card-header py-3 gradient-head">
                                <h1 className="my-0 fw-normal" id="changeTextM"> $0/month</h1>
                                <h4><b>Buisiness Class</b></h4>
                                <h5>For small teans or office</h5>
                            </div>
                            <div className="card-body">
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>Drag & Drop Builder</li>
                                    <li className="padChapter">1.000's of Templates</li>
                                    <li className="padChapter">Blog support Tools</li>
                                    <li className="padChapter">eCommerce Store</li>
                                </ul>
                                <Button
                                    title="Start free tril"
                                    link="#"
                                    color="blue"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-2 rounded-3 shadow">
                            <div className="card-header py-3 gradient-head">
                                <h1 className="my-0 fw-normal" id="changeTextY">$99/month</h1>
                                <h4><b>Pro Master</b></h4>
                                <h5>For best opportunities</h5>
                            </div>
                            <div className="card-body">
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>Drag & Drop Builder</li>
                                    <li className="padChapter">1.000's of Templates</li>
                                    <li className="padChapter">Blog support Tools</li>
                                    <li className="padChapter">eCommerce Store</li>
                                </ul>
                                <Button
                                    title="Start free tril"
                                    link="#"
                                    color="blue"
                                />
                                <div className="padChapter margButton">
                                    <Button
                                        title="Or Start 14 days trail"
                                        link="#"
                                        color="white"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Buy;
