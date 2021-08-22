import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: "7%",
    fontSize: "26px",
    fontWeight: "600",
  },
}))

const Title = (props) => {
  const classes = useStyles()

  return <Typography className={classes.root}>{props.title}</Typography>
}

export default Title
