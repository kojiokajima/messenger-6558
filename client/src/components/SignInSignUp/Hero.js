import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Typography } from "@material-ui/core"
import Bg from "../../assets/images/bg-img.png"
import BubbleIcon from "../..//assets/images/bubble.svg"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "calc(41.5vw - 12%)",
    display: "flex",
    padding: "0 6%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: `linear-gradient(to top, rgba(58, 141, 255, .85), rgba(134, 185, 255, .85)), url(${Bg})`,
    backgroundSize: "cover",

    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "40%",
    },
  },
  text: {
    marginTop: theme.spacing(4),
    color: "#FFF",
    fontSize: "26px",
    textAlign: "center",
  },
}))

const Hero = () => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <img src={BubbleIcon} alt="Bubble Icon" />
      <Typography className={classes.text}>
        Converse with anyone with any language
      </Typography>
    </Box>
  )
}

export default Hero
