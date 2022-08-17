// topic comp takes a topic name and the topic answer
const Topic = ({topicName, answer}) => {
    return (
        <div className="row">
            <div className="col">
                <h5>{topicName}</h5>
            </div>

            <div className="col">
                <h5>{answer}</h5>
            </div>
        </div>
    );
};

export default Topic;