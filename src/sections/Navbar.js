import LinkButton from "../components/LinkButton";
import logo from "../assets/MCVFront.png";
import { v4 as uuidv4 } from 'uuid';

// this section will be the navbar
const Navbar = ({links, overlay, setOverlay}) => {

    const toggleMobileMenu = () => {
        console.log(overlay)

        // if the overlay value is 0, turn on the overlay
        if (overlay) {
            setOverlay(false);
        // if the overlay value is 1, turn off the overlay
        } else {
            setOverlay(true);
        }
    };

    // menu button
    const menu = (<button onClick={toggleMobileMenu} style={{borderStyle: "none", backgroundColor: "#FFF3F3"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>                        
                </button>);

    // when menu button is clicked X button will appear instead of menu
    const mobileButtonX = (<button id="mobileX" onClick={toggleMobileMenu} style={{borderStyle: "none", backgroundColor: "#FFF3F3"}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
        </svg>
    </button>);

    



    

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

                    {/** Display only when md breakpoint and above */}
                    <div className="d-none d-md-inline-flex col-lg-6 col-7">
                        {links.map((currentLink) => {
                            return <LinkButton key={uuidv4()} linkName={currentLink.linkName} link={currentLink.link} letter={currentLink.letter} target={currentLink.target}/>
                        })}
                        
                    </div>


                    {/** Display none on md size screen and larger */}
                    <div className="d-md-none col-3">
                        {overlay ? mobileButtonX : menu}
                    </div>
                    
                </div>


                {/** Displays the responsive menu if overlay is true 
                {overlay && <MobileMenu links={links} />}
                */}
            </div>
        </div>
    );
};

export default Navbar;
