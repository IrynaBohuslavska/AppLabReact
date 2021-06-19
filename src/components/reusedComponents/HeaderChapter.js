import './HeaderChapter.css';

function HeaderChapter(props) {
    return (
        <div className="HeaderChapter ">
            <div className={`title ${props.align == "center" ? "center" : "left"}`}>
                <h2 className={`title ${props.sizeHeader == "big" ? "bigH" : "smallH"}`}> {props.title}</h2>
                <p className={`title ${props.sizeChap == "big" ? "big" : "small"}`}>
                    {props.text}
                </p>
            </div>
        </div>
    );
}

export default HeaderChapter;
