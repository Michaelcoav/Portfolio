
const Skill = ({skill, level}) => {

    const progressBarProps = {
        backgroundColor: "#0EB583", 
        width: `${level}0%`,
        borderRadius: "2em"
    };

    return (
        <div className="row justify-content-center" style={{marginBottom: ".5em"}}>
            <div className="col-3">
                {skill}
            </div>

            <div className="col-md-7 col-6">
                {/** creates a row with a col that displays a green bar indicating my level */}
                <div className="row" >
                    <div className="col">    
                        <div className="col" style={progressBarProps}>
                            {level}/10 
                        </div>     
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Skill;