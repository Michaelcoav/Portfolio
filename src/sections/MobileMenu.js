import { v4 as uuidv4 } from 'uuid';

// component will be the mobile menu
const MobileMenu = ({links, setOverlay}) => {
    // props used to style the overlay used for mobile menu
    const overlayProps = {
        backgroundColor: "black",
        height: "100vh",
        width: "100%",
        opacity: "90%",
        zIndex: "2",
    };

    const linkProps = {
        fontSize: "2em",
        color: "white"
    }

    return (
        <div id="overlay" className="d-flex justify-content-center align-items-center  d-md-none" style={overlayProps}>
            <div className="row justify-content-center" style={{marginBottom: "2em"}}>
                {links.map((currentLink) => {
                    return (<div key={uuidv4} className="col-7 text-center" style={{marginTop: "2em"}}>
                        {/** when the link is clicked it will go to the link and close the mobile menu */}
                        <a onClick={() => (setOverlay(false))} href={currentLink.link} target={currentLink.target} style={linkProps}>{currentLink.linkName}</a>
                    </div>);
                })}
            </div>
        </div>
    );
};

export default MobileMenu;