import Topic from "../components/Topic";
import { v4 as uuidv4 } from 'uuid';
import sideLogo from "../assets/MCVSide.png";

// about section of the page
const About = () => {
    const topicsToAnswers = [
        {topicName: "School:", answer: "George Mason University"},
        {topicName: "Major:", answer: "Computer Science"},
        {topicName: "Interests:", answer: "Coding, Gaming, Anime"},
    ];

    return (
        <div className="container" style={{color: "white"}}>
            <div className="row" style={{margin: "1em 0"}}>
                <div className="col">
                    <h1 className="text-center">
                        Michael Coca-Vargas
                    </h1>
                </div>
            </div>

            <div className="row">
                <div className="col d-none d-md-inline-flex justify-content-center align-items-center">
                    <img src={sideLogo} alt="Side view of logo" style={{width: "6em", height: "6em"}}/>
                </div>
            
                <div className="col" >
                    {/** iter thru the list of topics and put in topics comp */}
                    {topicsToAnswers.map((topic) => {
                        return <Topic key={uuidv4} topicName={topic.topicName} answer={topic.answer} />
                    })}
                </div>
            </div>

        </div>
    );
};

export default About;