import React from "react";
import Typography from "@material-ui/core/Typography/Typography";

const Footer = () => {
    return (
        <footer flex="none" className="my-footer">
            <div>Here will be a few things about the footer</div>
            <Typography variant="h6" gutterBottom >
                Social:
            </Typography>
            <a display="block" variant="body1" href="#" key={"Facebook"}>
                Facebook
            </a>
        </footer>
    );
}

export default Footer;