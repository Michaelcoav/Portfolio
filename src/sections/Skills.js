import Skill from '../components/Skill';
import { v4 as uuidv4 } from 'uuid';


// skills section of the page demonstrating my skills
const Skills = () => {

    // list of strengths
    const strengths = [
        {skill: "Object Oriented Programming", level: 8},
        {skill: "Data Structures", level: 8},
        {skill: "JavaScript", level: 7},
        {skill: "React", level: 6},
        {skill: "CSS", level: 6},
        {skill: "HTML", level: 5}
    ];
    
    return (
        <div className="container" style={{color: "white"}}>
            <div className="col" style={{marginBottom: "1em"}}>
                <h1 className="text-center">Skills</h1>
            </div>

            <div className="row d-flex justify-content-center align-items-center">
                {/** col size is 4 on xl screens and larger the order is 1st only on xl screens and larger */}
                <div className="col-xl-4 order-2 order-xl-1">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi vitae, dolorem nam iusto enim ea quos similique quisquam eius dicta recusandae laborum? Voluptatibus quisquam maxime, voluptatum sed est odit omnis.</p>
                </div>

                {/** col size is 7 on xl screens and larger and order is 2nd only on xl screens and larger */}
                <div className="col-xl-7 order-1 order-xl-2" style={{marginBottom: "1em"}}>
                    {strengths.map((strength) => {
                        return <Skill key={uuidv4()}skill={strength.skill} level={strength.level} />
                    })}
                </div>
            </div>
            
        </div>
    );
};

export default Skills;