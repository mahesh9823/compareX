import * as React from 'react';
import { AppBar, Toolbar, IconButton, Typography,  Button, Grid } from "@mui/material";
import { MenuSharp, MoreVert } from "@mui/icons-material";

import { isMobile } from 'react-device-detect';


export default function MenuAppBar(props) {

    return (

        <AppBar position="fixed" color='secondary' elevation={4}>
            <Toolbar >
                {isMobile &&
                    <IconButton
                        color='inherit'
                        onClick={props.handleHamburgerMenu}
                    >
                        <MenuSharp />
                    </IconButton>}

                <Grid container pl={isMobile ? 2 : 13} pr={isMobile ? 2 : 8}>
                    <Grid item sm={8} lg={10}>
                        <Typography variant="h4" component="div" sx={{ flexGrow: 1, marginLeft: "10px" }}>
                            Marketplace Comparison
                        </Typography>
                    </Grid>
                    <Grid item sm={4} lg={2}>
                        <Button fullWidth={true} style={{ backgroundColor: "#f73626" }} color="error" variant="contained">Download Report</Button>
                    </Grid>
                </Grid>

                <IconButton
                    color='inherit'
                >
                    <MoreVert />
                </IconButton>

            </Toolbar>
        </AppBar>

    );
}
