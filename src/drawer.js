import * as React from 'react';
import { Toolbar, Drawer, Box, List, ListItemButton, ListItemIcon, Typography, Popover } from "@mui/material";
import Icon from "@mui/material/Icon";
import SvgIcon from '@mui/material/SvgIcon';
import { useNavigate } from "react-router-dom"
import { isMobile } from 'react-device-detect';


export default function AppDrawer(props) {
    const navigate = useNavigate()

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event, id) => {
        setAnchorEl((prev) => ({
            [id]: event.currentTarget
        }))
    };

    const handleClose = () => {
        setTimeout(() => {
            setAnchorEl(null);
        }, 100)

    };


    const drawerWidth = 60;

    const drawerState = props.drawerState;

    

    return (

        <Drawer
            color='primary'
            open={drawerState}
            onClose={props.handleDrawerToggle}
            variant={isMobile ? "temporary" : "permanent"}
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
        >
            <Typography textAlign={"center"} variant='h5' mt={2}>CX</Typography>
            <Toolbar />



            <Box sx={{ overflow: 'auto' }}>
                <List>
                    <ListItemButton aria-describedby="homePopover" onMouseLeave={handleClose} onMouseEnter={(event) => handleClick(event, "homePopover")}
                        onClick={() => {
                            navigate("/")

                        }}  >
                        <ListItemIcon sx={{ minWidth: 40, color: "#f73622" }}>
                            <Icon>house</Icon>
                        </ListItemIcon>
                    </ListItemButton>
                    <Popover
                        color='primary'
                        id="homePopover"
                        style={{ pointerEvents: 'none', }}
                        open={anchorEl ? anchorEl.homePopover ? true : false : false}
                        anchorEl={anchorEl ? anchorEl.homePopover : null}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        disableRestoreFocus
                    >
                        <Typography sx={{ p: 1 }}>Home</Typography>
                    </Popover>
                </List>
                <List>
                    <ListItemButton aria-describedby="pythonPopover" onMouseLeave={handleClose} onMouseEnter={(event) => handleClick(event, "pythonPopover")}>
                        <ListItemIcon sx={{ minWidth: 40, color: "inherit" }}>
                            <SvgIcon><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
                                <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}><g transform="scale(10.66667,10.66667)"><path d="M10,2c-1.75,0 -3,1.25 -3,3v2h5v1h-7c-1.8125,0 -3,1.28125 -3,3v3c0,1.78125 1.1875,3 3,3h2v-4c0,-1.10156 0.89844,-2 2,-2h5c1.10156,0 2,-0.89844 2,-2v-4c0,-1.75 -1.21875,-3 -3,-3zM9,4c0.55078,0 1,0.44922 1,1c0,0.55078 -0.44922,1 -1,1c-0.55078,0 -1,-0.44922 -1,-1c0,-0.55078 0.44922,-1 1,-1zM17,6v4c0,1.10156 -0.89844,2 -2,2h-5c-1.10156,0 -2,0.89844 -2,2v4c0,1.75 1.21875,3 3,3h3c1.75,0 3,-1.25 3,-3v-2h-5v-1h7c1.8125,0 3,-1.28125 3,-3v-3c0,-1.78125 -1.1875,-3 -3,-3zM15,17c0.55078,0 1,0.44922 1,1c0,0.55078 -0.44922,1 -1,1c-0.55078,0 -1,-0.44922 -1,-1c0,-0.55078 0.44922,-1 1,-1z"></path></g></g>
                            </svg></SvgIcon>
                        </ListItemIcon>
                    </ListItemButton>

                    <Popover
                        color='primary'
                        id="pythonPopover"
                        style={{ pointerEvents: 'none' }}
                        open={anchorEl ? anchorEl.pythonPopover ? true : false : false}
                        anchorEl={anchorEl ? anchorEl.pythonPopover : null}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        onClose={handleClose}
                        disableRestoreFocus
                    >
                        <Typography sx={{ p: 1 }}>Python</Typography>
                    </Popover>

                </List>
                <List>
                    <ListItemButton aria-describedby="rlangPopover" onMouseLeave={handleClose} onMouseEnter={(event) => handleClick(event, "rlangPopover")}>
                        <ListItemIcon sx={{ minWidth: 40, color: "inherit" }}>
                            <SvgIcon>

                                <svg viewBox="0 0 48 48" version="1" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 48 48" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle fill="#ffffff" cx="24" cy="24" r="21"></circle> <path fill="#000000" d="M25,26.8h-4.5v9h-4V12.5h8.2c1.3,0,2.5,0.2,3.6,0.5c1,0.3,1.9,0.8,2.6,1.3c0.7,0.6,1.3,1.3,1.6,2.2 s0.6,1.9,0.6,3c0,1.6-0.4,2.9-1.1,3.9c-0.8,1-1.8,1.9-3.1,2.4l5.2,9.7v0.2h-4.3L25,26.8z M20.5,23.6h4.2c0.7,0,1.4-0.1,1.9-0.3 c0.5-0.2,1-0.5,1.4-0.8c0.4-0.3,0.6-0.7,0.8-1.2c0.2-0.5,0.3-1,0.3-1.6c0-0.6-0.1-1.1-0.3-1.6c-0.2-0.5-0.4-0.9-0.8-1.2 c-0.4-0.3-0.8-0.6-1.4-0.8c-0.5-0.2-1.2-0.3-2-0.3h-4.1V23.6z"></path> </g></svg>

                            </SvgIcon>
                        </ListItemIcon>
                    </ListItemButton>
                    <Popover
                        color='primary'
                        id="rlangPopover"
                        style={{ pointerEvents: 'none' }}
                        open={anchorEl ? anchorEl.rlangPopover ? true : false : false}
                        anchorEl={anchorEl ? anchorEl.rlangPopover : null}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        onClose={handleClose}
                        disableRestoreFocus
                    >
                        <Typography sx={{ p: 1 }}>R Language</Typography>
                    </Popover>
                </List>
                <List>
                    <ListItemButton  aria-describedby="javaPopover" onMouseLeave={handleClose} onMouseEnter={(event) => handleClick(event, "javaPopover")}>
                        <ListItemIcon sx={{ minWidth: 40, color: "inherit" }}>
                            <SvgIcon>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
                                    <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}><g transform="scale(5.12,5.12)"><path d="M28.1875,0c2.75,6.36328 -9.85937,10.29297 -11.03125,15.59375c-1.07422,4.87109 7.49219,10.53125 7.5,10.53125c-1.30078,-2.01562 -2.25781,-3.67578 -3.5625,-6.8125c-2.20703,-5.30469 13.44141,-10.10547 7.09375,-19.3125zM36.5625,8.8125c0,0 -11.0625,0.71094 -11.625,7.78125c-0.25,3.14844 2.91016,4.80469 3,7.09375c0.07422,1.87109 -1.875,3.4375 -1.875,3.4375c0,0 3.54688,-0.67578 4.65625,-3.53125c1.23047,-3.16797 -2.39844,-5.30859 -2.03125,-7.84375c0.35156,-2.42578 7.875,-6.9375 7.875,-6.9375zM19.1875,25.15625c0,0 -10.125,-0.14453 -10.125,2.71875c0,2.99219 13.25391,3.21484 22.71875,1.375c0,0 2.51563,-1.73047 3.1875,-2.375c-6.20312,1.26563 -20.34375,1.40625 -20.34375,0.3125c0,-1.00781 4.5625,-2.03125 4.5625,-2.03125zM38.65625,25.15625c-0.99219,0.07813 -2.0625,0.46094 -3.03125,1.15625c2.28125,-0.49219 4.21875,0.92188 4.21875,2.53125c0,3.625 -5.25,7.03125 -5.25,7.03125c0,0 8.125,-0.92187 8.125,-6.875c0,-2.70312 -1.87891,-4.01562 -4.0625,-3.84375zM16.75,30.71875c-1.55469,0 -3.875,1.21875 -3.875,2.375c0,2.32422 11.6875,4.11328 20.34375,0.71875l-3,-1.84375c-5.86719,1.87891 -16.67187,1.26563 -13.46875,-1.25zM18.1875,35.9375c-2.12891,0 -3.53125,1.28516 -3.53125,2.25c0,2.98438 12.71484,3.28516 17.75,0.25l-3.1875,-2.03125c-3.76172,1.58984 -13.20312,1.83203 -11.03125,-0.46875zM11.09375,38.625c-3.46875,-0.07031 -5.71875,1.48828 -5.71875,2.78125c0,6.875 35.5,6.55859 35.5,-0.46875c0,-1.16797 -1.34766,-1.73437 -1.84375,-2c2.90234,6.71875 -29.0625,6.18359 -29.0625,2.21875c0,-0.90234 2.35156,-1.76562 4.53125,-1.34375l-1.84375,-1.0625c-0.54297,-0.08203 -1.06641,-0.11328 -1.5625,-0.125zM44.625,43.25c-5.39844,5.11719 -19.07812,6.97266 -32.84375,3.8125c13.76172,5.63281 32.77734,2.47266 32.84375,-3.8125z"></path></g></g>
                                </svg>
                            </SvgIcon>
                        </ListItemIcon>
                    </ListItemButton>
                    <Popover
                        color='primary'
                        id="javaPopover"
                        style={{ pointerEvents: 'none' }}
                        open={anchorEl ? anchorEl.javaPopover ? true : false : false}
                        anchorEl={anchorEl ? anchorEl.javaPopover : null}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        onClose={handleClose}
                        disableRestoreFocus
                    >
                        <Typography sx={{ p: 1 }}>Java</Typography>
                    </Popover>
                </List>
                <List>
                    <ListItemButton  aria-describedby="calenderPopover" onMouseLeave={handleClose} onMouseEnter={(event) => handleClick(event, "calenderPopover")}>
                        <ListItemIcon sx={{ minWidth: 40, color: "inherit" }}>
                            <Icon>calendar_month</Icon>
                        </ListItemIcon>
                    </ListItemButton>
                    <Popover
                        color='primary'
                        id="calenderPopover"
                        style={{ pointerEvents: 'none' }}
                        open={anchorEl ? anchorEl.calenderPopover ? true : false : false}
                        anchorEl={anchorEl ? anchorEl.calenderPopover : null}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        onClose={handleClose}
                        disableRestoreFocus
                    >
                        <Typography sx={{ p: 1 }}>Calender</Typography>
                    </Popover>
                </List>
                <Toolbar />
                <Toolbar />

                <List>
                    <ListItemButton  >
                        <ListItemIcon sx={{ minWidth: 40, color: "inherit" }}>
                            <Icon>textsms</Icon>
                        </ListItemIcon>
                    </ListItemButton>
                </List>
                <List>
                    <ListItemButton  >
                        <ListItemIcon sx={{ minWidth: 40, color: "inherit" }}>
                            <Icon>logout</Icon>
                        </ListItemIcon>
                    </ListItemButton>
                </List>
            </Box>
        </Drawer >

    );
}
