import { Paper, Typography, Box, TextField, Grid } from '@mui/material'
import React from 'react'
import { Add, AccountCircle } from "@mui/icons-material"

export default function ChatBot() {
    return (
        <Paper elevation={6} sx={{ position: "fixed", bottom: 60, right: 16 }}>
            <Box width={"250px"} height={"280px"} >
                <Typography p={1} sx={{ borderBottom: "2px solid #c4c4c4" }} variant='h6'>AI Assistant</Typography>

                <Grid container spacing={2} mt={2}>
                    <Grid item xs={12}>
                        <Box display={"flex"} p={1} alignItems={"center"} >
                            <AccountCircle fontSize="large" color="success" />
                            <Paper sx={{ backgroundColor: "#d3d8e4", ml: 1 }}>
                                <Typography p={1} variant="subtitle1">Hey! How can i help today?&#128512;</Typography>
                            </Paper>

                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box display={"flex"} p={1} alignItems={"center"} >

                            <Paper sx={{ backgroundColor: "#d3d8e4", mr: 1 }}>
                                <Typography p={1} variant="subtitle1">Hi, can you help me understand new features in Product A </Typography>
                            </Paper>
                            <AccountCircle fontSize="large" color="info" />
                        </Box>
                    </Grid>


                </Grid>
            </Box>
            <Box display={"flex"} p={1} alignItems={"center"} sx={{ borderTop: "2px solid #c4c4c4" }}>
                <Add />
                <TextField variant="standard" InputProps={{
                    disableUnderline: true,
                }} sx={{ ml: 1, boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;" }} fullWidth={true} size="small"></TextField>
            </Box>

        </Paper>
    )
}
