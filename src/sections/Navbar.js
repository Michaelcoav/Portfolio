import LinkButton from "../components/LinkButton";


// this section will be the navbar
const Navbar = () => {
    // arr of objects that will be used to create the links
    const links = [
        {linkName: "Projects", link: "#Projects", letter: "A"},
        {linkName: "Skills", link: "#Skills", letter: "B"},
        {linkName: "Github", link: "https://github.com/Michaelcoav", letter: "X"},
        {linkName: "Contact", link: "#Contact", letter: "Y"}
    ];

    return (
        <div style={{backgroundColor: "#FFF3F3", padding: ".5em 1em"}}>
            <div className="container">
                {/** Makes the row a flex box and justify content between */}
                <div className="row d-flex justify-content-between">
                    <div className="col-1">Logo</div>

                    {/** display only when md breakpoint and above */}
                    <div className="d-none d-md-inline-flex col-6">
                        {links.map((currentLink) => {
                            return <LinkButton linkName={currentLink.linkName} link={currentLink.link} letter={currentLink.letter}/>
                        })}
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;