import accountManager from "../assets/AccountManager.png";
import calculator from "../assets/Calculator.png";
import ticTacToe from "../assets/TicTacToe.png";
import toDo from "../assets/ToDoApp.png";
import Project from "../components/Project";
import { v4 as uuidv4 } from 'uuid';

const Projects = () => {
    // descriptions for all my projects
    const toDoDesc = "The to do app was built using react, and the material mui library. The to do app allows the creation of tasks and the deletion of those tasks. This project helped me feel more confident in using states and creating components. It also helped me plan out how to organize different components of the project."
    const accDesc = "The account manager similar to the one made by google that used Python module tkinter, to build the graphical user interface of the program, and SQLite module to store the name of the account, the username and password on a relational table. It was my first project outside of school where I got to learn about using different python modules.";
    const calcDesc = "The calculator was built again using the Python module tkinter, to build the graphical user interface of the program, and python was used to create the back end functions. The calculator allows the user to perform addition, subtraction, multiplication, and division. It allows you to change the sign of the numbers, add decimals, and delete the most recent number, decimal, or operator from the calculator. It was my second project using tkinter and I felt much more comfortable building it.";
    const ticDesc = "Tic-Tac-Toe was built using the Python module PyGame, to build buttons, draw the shapes, and print the text onto the screen. This was one of my favorite projects because it was very simple and I got to learn about the PyGame module.";

    // list of all my projects with img src
    const projects = [
        {src: toDo, alt: "ToDo App Project", desc: toDoDesc},
        {src: accountManager, alt: "Account Manager Project", desc: accDesc},
        {src: calculator, alt: "Calculator Project", desc: calcDesc},
        {src: ticTacToe, alt: "Account Manager Project", desc: ticDesc},
    ];


    return (
        <div id="Projects" className="container" style={{color: "white"}}>
            <div className="row d-flex justify-content-center">
                <div className="col">
                    <h1 className="text-center">Projects</h1>
                </div>
            </div>
            
            {projects.map((project) => {
                return <Project key={uuidv4()} img={project.src} alt={project.alt} desc={project.desc}/>
            })}
        </div>
    );
};

export default Projects;
