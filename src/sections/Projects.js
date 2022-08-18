import accountManager from "../assets/AccountManager.png";
import calculator from "../assets/Calculator.png";
import ticTacToe from "../assets/TicTacToe.png";
import toDo from "../assets/ToDoApp.png";
import { v4 as uuidv4 } from 'uuid';

const Projects = () => {
    // list of all my projects with img src
    const projects = [
        {}
    ];


    return (
        <div id="Projects" className="container" style={{color: "white"}}>
            <div className="row d-flex justify-content-center">
                <div className="col">
                    <h1 className="text-center">Projects</h1>
                </div>
            </div>
        </div>
    );
};

export default Projects;
