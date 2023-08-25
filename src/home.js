import React, { useEffect, useState } from 'react'
import { Box, Button, Grid, InputAdornment, MenuItem, Paper, Select, TextField, Typography } from "@mui/material"
import CompareX from "./compareX.json"
import {  Search, BugReport, Password } from "@mui/icons-material"
import moment from "moment"
import { isMobile } from 'react-device-detect'
export default function Home() {
  const currentMonth = moment().format("MMMM")
  const [product1, setProduct1] = useState("A")
  const [product2, setProduct2] = useState("B")
  const monthData = CompareX.monthly_comparison[currentMonth].CompareAB
  const [currentMonthMaster, setCurrentMonthMaster] = useState(monthData)
  const [currentMonthFilter, setCurrentMonthFilter] = useState(monthData)
  const [overallFilter, setOverFilter] = useState([])
  const [overallMaster, setOverMaster] = useState([])
  const [search, setSearch] = useState("")


  useEffect(() => {
    let tempOverall = []
    const meta = CompareX.monthly_comparison
    Object.keys(meta).map(month => {

      if (moment(month, "MMMM").isSameOrBefore(moment()) === true) {

        tempOverall = [...tempOverall, ...meta[month][`Compare${product1}${product2}`]]
      }

      return null
    })

    setOverMaster(tempOverall)
    setOverFilter(tempOverall)

  }, [])


  useEffect(() => {

    const meta = CompareX.monthly_comparison[currentMonth]
    const id = `Compare${product1}${product2}`

    if (Object.keys(meta).includes(id)) {
      setCurrentMonthMaster(meta[id])
      setCurrentMonthFilter(meta[id])
    } else {
      setCurrentMonthMaster([])
      setCurrentMonthFilter([])
    }

    let tempOverall = []
    const meta1 = CompareX.monthly_comparison
    Object.keys(meta1).map(month => {
      if (Object.keys(meta1[month]).includes(id)) {
        if (moment(month, "MMMM").isSameOrBefore(moment()) === true) {
          tempOverall = [...tempOverall, ...meta1[month][id]]
        }
      }
      return null
    })

    setOverMaster(tempOverall)
    setOverFilter(tempOverall)

    setSearch("")


  }, [product1, product2])




  const handleSearch = () => {
    if (search !== "") {
      const monthly = currentMonthMaster.filter(item => item.toLowerCase().includes(search.toLowerCase()))
      setCurrentMonthFilter(monthly)
      const overall = overallMaster.filter(item => item.toLowerCase().includes(search.toLowerCase()))
      setOverFilter(overall)
    } else {
      setCurrentMonthFilter(currentMonthMaster)
      setOverFilter(overallMaster)
    }

  }


  return (
    <Grid container spacing={2} pt={2} pb={2} pl={isMobile ? 10 : 10} pr={isMobile ? 10 : 16}>
      <Grid item xs={12}>
        <Typography variant='h5'>
          What would you like to compare today?
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item lg={2} sm={3} xs={6}>

            <Select
              id="product1"
              value={product1}
              fullWidth={true}
              size='small'
              sx={{
                "& fieldset": { border: 'none' },
              }}
              style={{ backgroundColor: '#ffffff', borderRadius: "10px", border: "0px" }}
              onChange={(event) => {

                if (event.target.value === product2) {
                  alert("Same product cannot be selected")
                } else {
                  setProduct1(event.target.value)
                }
              }}
            >
              <MenuItem value="A">Product A</MenuItem>
              <MenuItem value="B">Product B</MenuItem>
              <MenuItem value="C">Product C</MenuItem>
            </Select>


          </Grid>
          <Grid item lg={2} sm={3} xs={6}>
            <Select
              id="product2"
              value={product2}
              fullWidth={true}
              size='small'
              sx={{
                "& fieldset": { border: 'none' },
              }}
              style={{ backgroundColor: '#ffffff', borderRadius: "10px", border: "0px" }}
              onChange={(event) => {

                if (event.target.value === product1) {
                  alert("Same product cannot be selected")
                } else {
                  setProduct2(event.target.value)
                }
              }

              }
            >

              <MenuItem value="B">Product B</MenuItem>
              <MenuItem value="C">Product C</MenuItem>
              <MenuItem value="D">Product D</MenuItem>
            </Select>


          </Grid>

        </Grid>

      </Grid>

      <Grid item xs={12}>
        <Box display={"flex"}>

          <TextField
            fullWidth
            variant="standard"
            placeholder='What can we help you find?'
            value={search}
            sx={{
              backgroundColor: '#ffffff',
              padding: "5px",
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px"
            }}
            onChange={(event) => setSearch(event.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
              disableUnderline: true,
            }}

          />
          <Button style={{
            backgroundColor: "#f73626", boxShadow: "none", borderTopRightRadius: "10px",
            borderBottomRightRadius: "10px"
          }} color="error" variant="contained" onClick={handleSearch}>Search</Button>
        </Box>


      </Grid>


      <Grid item xs={12}>
        <Paper elevation={0} sx={{ p: 2, pt: 4, borderRadius: "10px" }} >

          <Typography variant='h5' pb={2} ml={1}>
            {currentMonth} Comparison
          </Typography>

          {
            currentMonthFilter.length > 0 ?
              currentMonthFilter.map((item, index) => (
                <Box key={index} display={"flex"} sx={{ borderBottom: "1px solid #dbdbdb", m: 1,  }} >
                  {item.toLowerCase().includes("reported") ? <BugReport color="error" sx={{ mr: 4, ml: 4 }} /> : <Password color="success" sx={{ mr: 4, ml: 4 }} />}
                  <Typography variant="subtitle1" >
                    {item}
                  </Typography>
                </Box>

              )) : <Typography variant="subtitle1" >
                No result...
              </Typography>

          }

        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper elevation={0} sx={{ p: 2, pt: 4, borderRadius: "10px" }} >

          <Typography variant='h5' pb={2} ml={1}>
            Overall Comparison
          </Typography>

          {
            overallFilter.length > 0 ?
              overallFilter.map((item, index) => (
                <Box key={index} display={"flex"} sx={{ borderBottom: "1px solid #dbdbdb", m: 1,  }} >
                  {item.toLowerCase().includes("reported") ? <BugReport color="error" sx={{ mr: 4, ml: 4 }} /> : <Password color="success" sx={{ mr: 4, ml: 4 }} />}
                  <Typography variant="subtitle1" >
                    {item}
                  </Typography>
                </Box>

              )) : <Typography variant="subtitle1" >
                No result...
              </Typography>

          }

        </Paper>
      </Grid>

    </Grid>
  )
}
