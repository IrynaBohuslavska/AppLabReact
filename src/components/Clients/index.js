import './style.css';


function Clients() {

    function client1() {
        document.getElementById("name").innerHTML = "Tom Tomas Ceo";
        document.getElementById("im").src = "./pictures/clients/client-1.png";
        document.getElementById("text").innerHTML = "Donec ullamcorper nulla non metus auctor fringilla." +
            "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. " +
            "Cras mattis consectetur purus sit amet fermentum. Fusce dapibus."
    }

    function client2() {
        document.getElementById("name").innerHTML = "Jack Jackson DevOps";
        document.getElementById("im").src = "./pictures/clients/user-3.png";
        document.getElementById("text").innerHTML = "Bring to the table win-win survival strategies to ensure proactive domination.\n" +
            "                At the end of the day, going forward, a new normal that has. \n" +
            "                At the end of the day, going forward, a new normal that has."
    }

    return (
        <div className="Clients">
            <div className="container  margClients">
                <div className="row">
                    <div className="col-md-6 order-md-2">
                        <h5>Meet clients satisfaction using product</h5>
                        <div className="container padChapter">
                            <span id="rateMe1"></span>
                        </div>

                        <link rel="stylesheet"
                              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                        </link>
                        <div className="starMarg">
                            <span className="fa fa-star checked "></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                        </div>
                        <h6>
                            User friendly & Customisable
                        </h6>
                        <p id="text">
                            Donec ullamcorper nulla non metus auctor fringilla.
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem
                            nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus.
                        </p>
                        <div className="row">
                            <div className="col-md-5 order-md-2">
                                <h6 id="name">Tom Tomas Ceo</h6>
                            </div>
                            <div className="col-md-5 order-md-1">
                                <img id="im" className="img-fluid mx-auto"
                                     src="./pictures/clients/client-1.png"/>
                            </div>
                        </div>

                        <div className="row order-md-3 button-please ">

                            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                <label className="btn border" onClick={client1}>
                                    prew
                                </label>
                                <label className="btn border" onClick={client2}>next
                                </label>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6 order-md-1  marg">
                        <img className="img-fluid mx-auto" src="./pictures/main/testimonials.png"
                             height="625"
                             width="955"/>
                    </div>
                </div>
                <a name="ask"></a>
            </div>
        </div>
    );
}

export default Clients;
