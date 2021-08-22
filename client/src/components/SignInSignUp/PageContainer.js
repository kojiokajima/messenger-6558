import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100vw",
    display: "flex",

    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
}))

const PageContainer = ({ children }) => {
  const classes = useStyles()

  return <Box className={classes.root}>{children}</Box>
}

export default PageContainer
