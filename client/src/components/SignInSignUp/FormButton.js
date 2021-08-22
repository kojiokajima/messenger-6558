import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Button } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "2.5%",
    padding: "3.2% 12.3%",
    left: "50%",
    transform: "translateX(-50%)",
    fontFamily: "proxima-nova, Montserrat, Arial",
    fontSize: "90px",
    color: "#FFFF",
    backgroundColor: theme.palette.primary.main,
    ...theme.typography.button,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
    "& > span": {
      fontFamily: "proxima-nova, Montserrat, Arial",
    },
  },
}))

const FormButton = (props) => {
  const classes = useStyles()
  return (
    <Button className={classes.root} type="submit" variant="contained">
      {props.label}
    </Button>
  )
}

export default FormButton
