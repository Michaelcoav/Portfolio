// this comp will create a rounded button that will be used in the navbar
const LinkButton = ({linkName, link, letter, target}) => {

    // css prop used to make rounded button
    const roundedButtonProps = {
        backgroundColor: "#302B2B",
        color: "white",
        borderRadius: "5em",
        padding: ".2em .6em",
    };

    const linkProps = {
        padding: ".3em .3em"
    };

    return (
        <li className="d-inline-flex" style={{marginLeft: ".2em"}}>
            <button style={roundedButtonProps} children={letter}/>
            <a href={link} style={linkProps} target={target}>{linkName}</a>
        </li>
    );
};

export default LinkButton;