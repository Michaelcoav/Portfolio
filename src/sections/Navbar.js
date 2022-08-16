import LinkButton from "../components/LinkButton";
import logo from "../assets/MCVFront.png";

// this section will be the navbar
const Navbar = () => {
    // arr of objects that will be used to create the links
    const links = [
        {linkName: "Projects", link: "#Projects", letter: "A", target: "_self"},
        {linkName: "Skills", link: "#Skills", letter: "B", target: "_self"},
        {linkName: "Github", link: "https://github.com/Michaelcoav", letter: "X", target: "_blank"},
        {linkName: "Contact", link: "#Contact", letter: "Y", target: "_self"}
    ];

    return (
        <div style={{backgroundColor: "#FFF3F3", padding: ".5em 1em"}}>
            <div className="container">
                {/** Makes the row a flex box and justify content between */}
                <div className="row d-flex justify-content-between">
                    <div className="col-1">
                        <a href="index.html">
                            <img src={logo} alt="MCV Front View Sprite" style={{width: "2em", height: "2em"}} />
                        </a>
                    </div>

                    {/** display only when md breakpoint and above */}
                    <div className="d-none d-md-inline-flex col-6">
                        {links.map((currentLink) => {
                            return <LinkButton linkName={currentLink.linkName} link={currentLink.link} letter={currentLink.letter} target={currentLink.target}/>
                        })}
                    </div>


                    {/** display none on md size screen and larger */}
                    <div className="d-md-none col-3">
                        <button style={{borderStyle: "none", backgroundColor: "#FFF3F3"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                            </svg>                        
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;