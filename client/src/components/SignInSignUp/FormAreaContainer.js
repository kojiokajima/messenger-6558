import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "58.5%",
    position: "relative",

    [theme.breakpoints.down("xs")]: {
      width: "120%",
      height: "60%",
    },
  },
}))

const FormAreaContainer = ({ children }) => {
  const classes = useStyles()
  return <Box className={classes.root}>{children}</Box>
}

export default FormAreaContainer
