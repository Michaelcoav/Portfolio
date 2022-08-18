// project comp displaying the project img and a description of proj
const Project = ({img, alt, desc}) => {
    // project image properties
    const projectProps = {
        width: "15rem",
        height: "15rem",
        borderRadius: "10%"
    };


    return (
        <div className="row">
            <div className="col" style={projectProps}>
                <img src={img} alt={alt} />
            </div>
            <div className="col">
                <p>{desc}</p>
            </div>
        </div>
    );
};