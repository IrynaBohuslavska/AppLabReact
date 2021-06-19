import './style.css';

function Companies() {
    return (
        <div className="Companies">
            <div className="container">
                <div className="pt-md-5 mx-auto text-center">
                    <h5 className="display-5 padChapter">Trusted by companies like</h5>

                    <div className="row-md-5">
                        {/*D:\React\reactjs\public\pictures\companies\company-1.png*/}
                        <img className="col-md-0 comp" src="../pictures/companies/company-1.png" width="200"/>
                        <img className="col-md-0 comp" src="../pictures/companies/company-2.png" width="200"/>
                        <img className="col-md-0 comp" src="../pictures/companies/company-3.png" width="200"/>
                        <img className="col-md-0 comp" src="../pictures/companies/company-4.png" width="200"/>
                        <img className="col-md-0 comp" src="../pictures/companies/company-5.png" width="200"/>
                        <a name="key"></a>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Companies;
