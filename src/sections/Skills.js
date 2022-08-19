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
        <div id="Skills" className="container" style={{color: "white"}}>
            <div className="col" style={{marginBottom: "1em"}}>
                <h1 className="text-center">Skills</h1>
            </div>

            <div className="row d-flex justify-content-center align-items-center">
                {/** col size is 4 on xl screens and larger the order is 1st only on xl screens and larger */}
                <div className="col-xl-4 order-2 order-xl-1">
                    <p>I have completed courses at George Mason University on topics such as Data Structures, Object-Oriented Programming, and Low-Level Programming. While I have not learned my front end knowledge from university I have taken the time to learn on my own time through projects.</p>
                    <p>I have also participated in multiple programs that have helped prepare me to become a software engineer and master my data strucutres and algorithsm such as the Uber Career Prep Program and IBM Accelerate Software Developer Track.</p>
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