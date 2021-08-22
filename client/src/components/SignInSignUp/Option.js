import React from "react"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Typography } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "88%",
    display: "flex",
    justifyContent: "flex-end",
    position: "absolute",
    top: "5%",
    right: "12%",

    [theme.breakpoints.down("xs")]: {
      width: "50%",
      right: "6%",
    },
  },
  text: {
    marginRight: "4%",
    color: theme.palette.secondary.main,
    fontWeight: "600",
  },
  link: {
    color: theme.palette.primary.main,
  },
}))

const Option = (props) => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Typography className={classes.text}>{props.text}</Typography>
      <Link to={props.link}>
        <Typography className={classes.link}>{props.linkText}</Typography>
      </Link>
    </Box>
  )
}

export default Option
