import { AppBar, Toolbar, Typography } from "@mui/material";

const NavBar = () => {
    return (
        <AppBar
            elevation={0}
        >
            <Toolbar>
                <Typography
                    variant='h3'
                >
                    Omelette
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
 
export default NavBar;