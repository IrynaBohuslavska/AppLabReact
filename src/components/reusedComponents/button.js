import './button.css';

function Button (props) {
    return (
        <div className="Button">
            <a className={`title ${props.color == "blue" ? "btn margin btn-primary" : "btn margin text-blue"}`}
               href={props.link}>{props.title}</a>
        </div>
    );
}

export default Button;
