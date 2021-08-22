import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box } from "@material-ui/core"
import { Title } from "./index"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "70%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    [theme.breakpoints.down("xs")]: {
      top: "60%",
    },
  },
}))

const FormContainer = ({ title, handleSubmit, children }) => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Title title={title} />
      <form className={classes.form} onSubmit={handleSubmit}>
        {children}
      </form>
    </Box>
  )
}

export default FormContainer
