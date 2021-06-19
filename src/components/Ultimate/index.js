import './style.css';
import HeaderChapter from "../reusedComponents/HeaderChapter";
import Button from "../reusedComponents/button";

function Ultimate() {
    return (
        <div className="Ultimate">
            <div className="container marginUlt">
                <div className="row bg">
                    <div className="col-md-5">
                        <HeaderChapter
                        title = "Best app for your modern life style"
                        text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Adipisci, blanditiis cum, delectus dicta doloribus ea est exercitationem hic
            magni nostrum qui quia soluta tenetur veniam vero voluptas voluptatem voluptatibus? Cumque."
                        align = "left"
                        sizeHeader = "big"
                        sizeChap = "big"
                        />
                        <div className="row marginParag">
                            <div className="col-md-6">
                                <img className="rounded-circle" src="../pictures/icons/7.PNG" height="141" width="151"/>
                                <HeaderChapter
                                    title = "Heading"
                                    text = "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor
                                    id nibh
                                    ultricies
                                    vehicula ut id elit."
                                    align = "left"
                                />
                            </div>
                            <div className="col-md-6">
                                <img className="rounded-circle" src="../pictures/icons/8.PNG" height="142" width="151"/>
                                <HeaderChapter
                                    title = "Heading"
                                    text = "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor
                                    id nibh
                                    ultricies
                                    vehicula ut id elit."
                                    align = "left"
                                />
                            </div>
                        </div>

                        <div className="row marginParag">
                            <div className="col-md-6">
                                <img className="rounded-circle" src="../pictures/icons/9.PNG" height="141" width="151"/>
                                <HeaderChapter
                                    title = "Heading"
                                    text = "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor
                                    id nibh
                                    ultricies
                                    vehicula ut id elit."
                                    align = "left"
                                />
                            </div>
                            <div className="col-md-6">
                                <img className="rounded-circle" src="../pictures/icons/10.PNG" height="142"
                                     width="151"/>
                                <HeaderChapter
                                    title = "Heading"
                                    text = "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor
                                    id nibh
                                    ultricies
                                    vehicula ut id elit."
                                    align = "left"
                                />
                            </div>
                        </div>
                        <div className="marginParag">
                            <Button
                                title = "Try for free"
                                link = "#"
                                color = "blue"
                            />
                        </div>
                    </div>
                    <div className="col-md marginImg">
                        <img className="img-fluid mx-auto" src="../pictures/main/features.PNG"/>
                    </div>
                </div>
            </div>

            <a name="try"></a>
        </div>
    );
}

export default Ultimate;
