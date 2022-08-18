// project comp displaying the project img and a description of proj
const Project = ({img, alt, desc}) => {
    // project image properties
    const projectProps = {
        width: "15rem",
        height: "15rem",
        margin: "1em",
        borderRadius: "10%"
    };


    return (
        <div className="row justify-content-center align-items-center">
            {/** on md size screens and larger display inline block to avoid centering but on smaller screen display flex
             to center the col and use justify content center*/}
            <div className="col-md-6 col-sm-6 col d-md-inline-block d-flex justify-content-center">
                <img src={img} alt={alt} style={projectProps}/>
            </div>
            <div className="col-md-4 col-12">
                <p className="text-center">{desc}</p>
            </div>
        </div>
    );
};

export default Project;