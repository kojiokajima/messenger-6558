import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box, FormControl, TextField, FormHelperText } from "@material-ui/core"

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    marginBottom: "10%",
  },
}))

const FormInput = (props) => {
  const classes = useStyles()

  return (
    <Box>
      {props.hasValidation ? (
        <FormControl
          className={classes.root}
          error={!!props.formErrorMessage.confirmPassword}
        >
          <TextField
            label={props.label}
            aria-label={props.ariaLabel}
            type={props.type}
            name={props.name}
            required={props.isReqiored}
          />
          <FormHelperText>
            {props.formErrorMessage.confirmPassword}
          </FormHelperText>
        </FormControl>
      ) : (
        <FormControl className={classes.root}>
          <TextField
            className={classes.field}
            label={props.label}
            aria-label={props.ariaLabel}
            type={props.type}
            name={props.name}
            required={props.isReqiored}
          />
        </FormControl>
      )}
    </Box>
  )
}

export default FormInput
