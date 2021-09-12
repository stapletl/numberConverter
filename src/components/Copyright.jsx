import { Typography, Link } from "@material-ui/core";

const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            { 'Copyright © ' }
            <Link color="inherit" href="https://stapletl.github.io/numberConverter/">
                stapletl.github.io/numberConverter
            </Link>{ ' ' }
            { new Date().getFullYear() }
            { '.' }
        </Typography>
    );
}

export default Copyright;