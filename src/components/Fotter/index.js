import './style.css';

function Fotter() {
    return (
        <div className="Fotter">
            <footer className="dark-brue text-white text-center pad padChapter">
                <div className="container marg">
                    <img src="../pictures/main/logoWhite.PNG" height="30"/>
                    <div className="row col-md pad">
                        <div className="col-md-1"></div>
                        <div className="col-md-2"><a href="#">Home</a></div>
                        <div className="col-md-2"><a href="#key">Key Feachures</a></div>
                        <div className="col-md-2"><a href="#pricing">Pricing</a></div>
                        <div className="col-md-2"><a href="#testimal">Testimal</a></div>
                        <div className="col-md-2"><a href="#try">Faq</a></div>
                    </div>
                    <div className="sosyalbutonlar marg">
                        <a href="http://facebook.com/cahitsoyman.blogspot.com" target="_blank" className="facebook"><i
                            className="fa fa-facebook" aria-hidden="true"></i></a>
                        <a href="http://twitter.com/cahitsoyman.blogspot.com" target="_blank" className="twitter"><i
                            className="fa fa-twitter" aria-hidden="true"></i></a>
                        <a href="http://google-plus.com//cahitsoyman.blogspot.com" target="_blank"
                           className="google-plus"><i
                            className="fa fa-google-plus" aria-hidden="true"></i></a>
                        <a href="http://instagram.com//cahitsoyman.blogspot.com" target="_blank"
                           className="instagram"><i
                            className="fa fa-instagram" aria-hidden="true"></i></a>
                        <a href="http://linkedin.com//cahitsoyman.blogspot.com" target="_blank" className="linkedin"><i
                            className="fa fa-linkedin" aria-hidden="true"></i></a>
                    </div>
                    <div className="marg pad">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                </div>
            </footer>
        </div>
    );
}

export default Fotter;
