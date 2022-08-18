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
        <div id="About" className="container" style={{color: "white", marginBottom: "1em"}}>
            <div className="row" style={{margin: "1em 0"}}>
                <div className="col">
                    <h1 className="text-center">
                        Michael Coca-Vargas
                    </h1>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-2 d-none d-md-inline-flex justify-content-between align-items-center">
                    <img src={sideLogo} alt="Side view of logo" style={{width: "6em", height: "6em"}}/>
                </div>

                {/** the col size 6 on md screens and larger */}
                <div className="col-md-6" >
                    {/** iter thru the list of topics and put in topics comp */}
                    {topicsToAnswers.map((topic) => {
                        return <Topic key={uuidv4()} topicName={topic.topicName} answer={topic.answer} />
                    })}
                </div>
            </div>

        </div>
    );
};

export default About;