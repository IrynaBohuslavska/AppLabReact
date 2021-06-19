import './style.css';
import HeaderChapter from "../reusedComponents/HeaderChapter";

function ChoseOurApp() {
    return (
        <div className="ChoseOurApp">
            <a name="pricing"></a>
            <div className="container margWhy">
                <div className="row">
                    <div className="col-md">
                        <HeaderChapter
                            title="Why you should choose our app"
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

                <div className="container">
                    <div className="row margWhy">
                        <div className="col-md-4">
                            <div className="text-center">
                                <img className="rounded-circle" src="../pictures/icons/1.PNG" height="141"
                                     width="151"/>
                            </div>

                            <HeaderChapter
                                title="Heading"
                                text="Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id
                                        dolor id nibh ultricies
                                        vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at
                                        eros. Praesent commodo
                                        cursus
                                        magna."
                                align="center"
                            />
                        </div>
                        <div className="col-md-4">
                            <div className="text-center">
                                <img className="rounded-circle" src="../pictures/icons/2.PNG" height="142"
                                     width="151"/>
                            </div>
                            <HeaderChapter
                                title="Heading"
                                text="Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id
                                        dolor id nibh ultricies
                                        vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at
                                        eros. Praesent commodo
                                        cursus
                                        magna."
                                align="center"
                            />
                        </div>
                        <div className="col-md-4">
                            <div className="text-center">
                                <img className="rounded-circle" src="../pictures/icons/3.PNG" height="136"
                                     width="138"/>
                            </div>
                            <HeaderChapter
                                title="Heading"
                                text="Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id
                                        dolor id nibh ultricies
                                        vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at
                                        eros. Praesent commodo
                                        cursus
                                        magna."
                                align="center"
                            />
                        </div>
                    </div>
                    <div className="row margWhy">
                        <div className="col-md-4">
                            <div className="text-center">
                                <img className="rounded-circle" src="../pictures/icons/4.PNG" height="141"
                                     width="154"/>
                            </div>
                            <HeaderChapter
                                title="Heading"
                                text="Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id
                                        dolor id nibh ultricies
                                        vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at
                                        eros. Praesent commodo
                                        cursus
                                        magna."
                                align="center"
                            />
                        </div>
                        <div className="col-md-4">
                            <div className="text-center">
                                <img className="rounded-circle" src="../pictures/icons/5.PNG" height="137"
                                     width="141"/>
                            </div>
                            <HeaderChapter
                                title="Heading"
                                text="Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id
                                        dolor id nibh ultricies
                                        vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at
                                        eros. Praesent commodo
                                        cursus
                                        magna."
                                align="center"
                            />
                        </div>
                        <div className="col-md-4">
                            <div className="text-center">
                                <img className="rounded-circle" src="../pictures/icons/6.PNG" height="145"
                                     width="156"/>
                            </div>
                            <HeaderChapter
                                title="Heading"
                                text="Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id
                                        dolor id nibh ultricies
                                        vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at
                                        eros. Praesent commodo
                                        cursus
                                        magna."
                                align="center"
                            /><a name="testimal"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChoseOurApp;
