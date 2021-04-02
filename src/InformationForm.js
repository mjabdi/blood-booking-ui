import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";

import FormControl from "@material-ui/core/FormControl";
import GlobalState from "./GlobalState";
import * as EmailValidator from "email-validator";

import {
  DatePicker,
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import PersonsBox from "./PersonsBox";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import AntiBodyComponent from "./AntiBodyComponent";

import { format, addMinutes } from "date-fns";

import dateformat from "dateformat";
import { enGB } from "date-fns/locale";
import DateField from "./DateField";
import Alert from "@material-ui/lab/Alert";
import Fade from "react-reveal/Fade";


class UTCUtils extends DateFnsUtils {
  locale = enGB;
  // format(date, formatString) {
  //   return format(new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000 ), formatString,enGB);
  // }

  // getCalendarHeaderText(date){
  //   return dateformat(date, 'mmmm yyyy');
  // }

  // getDayText(date)
  // {
  //   return dateformat(date, 'd');
  // }
}

const useStyles = makeStyles((theme) => ({
  formControl: {
    textAlign: "left",
  },

  FormTitle: {
    marginTop: "20px",
    marginBottom: "20px",
  },
  Box: {
    backgroundColor: "#f1f1f1",
    padding: "10px",
    //maxWidth: "300px",
    borderRadius: "10px",
    boxShadow: "2px 4px #ddd",
    marginTop: "5px",
    marginBottom: "15px",
    textAlign: "left",
  },

  pageTitle: {
    color: theme.palette.primary.main,
    marginBottom: "15px",
  },
}));

export default function InformationForm() {
  const classes = useStyles();
  const [state, setState] = React.useContext(GlobalState);
  const [fullname, setFullname] = React.useState(state.fullname ?? "");
  const [email, setEmail] = React.useState(state.email ?? "");

  const [birthDate, setBirthDate] = React.useState(state.birthDate ?? null);


  const [retypeEmail, setRetypeEmail] = React.useState(state.retypeEmail ?? "");
  const [emailConfirmed, setEmailConfirmed] = React.useState(
    state.emailConfirmed ?? false
  );

  const [phone, setPhone] = React.useState(state.phone ?? "");


  const birthDateChanged = (dateStr) =>
  {

      setBirthDate(dateStr);
      setState(state => ({...state, birthDate: dateStr}));
      setState(state => ({...state, birthDateError : false}));
  }  


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const emailConfirmedChanged = (event) => {
    setEmailConfirmed(event.target.checked);
    setState((state) => ({ ...state, emailConfirmed: event.target.checked }));
    setState((state) => ({ ...state, emailConfirmedError: false }));
  };

  const fullnameChanged = (event) => {
    setFullname(event.target.value);
    setState((state) => ({ ...state, fullname: event.target.value }));
    if (event.target.value && event.target.value.trim().length > 0) {
      setState((state) => ({ ...state, fullnameError: false }));
    }
  };

  const emailChanged = (event) => {
    setEmail(event.target.value);
    setState((state) => ({ ...state, email: event.target.value }));
    if (event.target.value && EmailValidator.validate(event.target.value)) {
      setState((state) => ({ ...state, emailError: false }));
    }
  };

  const retypeEmailChanged = (event) => {
    setRetypeEmail(event.target.value);
    setState((state) => ({ ...state, retypeEmail: event.target.value }));
    if (event.target.value && EmailValidator.validate(event.target.value)) {
      setState((state) => ({ ...state, retypeEmailError: false }));
    }
  };

  const phoneChanged = (event) => {
    setPhone(event.target.value);
    setState((state) => ({ ...state, phone: event.target.value }));
    if (event.target.value && event.target.value.trim().length >= 6) {
      setState((state) => ({ ...state, phoneError: false }));
    }
  };

  const checkNOGPClicked = (event) =>
  {
    setState(state=>({...state,check_nogp: event.target.checked}))
    if (event.target.checked)
    {
      setState(state=>({...state,check_nogp_error:false}))
    }
  }

  const checkWithGPClicked = (event) =>
  {
    setState(state=>({...state,check_withgp: event.target.checked}))
  }


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom className={classes.pageTitle}>
        Enter your Info
      </Typography>

      
      <Grid
        container
        spacing={4}
        alignItems="baseline"
        style={{ marginTop: "10px" }}
      >
        <Grid item xs={12} md={6}>
          <TextField
            error={state.fullnameError ? true : false}
            required
            id="fullname"
            label="Full Name"
            fullWidth
            autoComplete="name"
            value={fullname}
            onChange={fullnameChanged}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            error={state.phoneError ? true : false}
            required
            id="phone"
            label="Mobile Number"
            fullWidth
            autoComplete="tel"
            value={phone}
            onChange={phoneChanged}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            error={state.emailError ? true : false}
            required
            id="email"
            label="Email Address"
            fullWidth
            autoComplete="email"
            type="email"
            value={email}
            onChange={emailChanged}
            // helperText = 'This email address is where you will receive your results. Please tick the box below to confirm that this is a private email address to which you are happy for us to send your results.'
          />
        </Grid>

        <Grid item xs={12} md={12}>
               <DateField
                error={state.birthDateError}
                title="Date of Birth"
                value={birthDate}
                dateChanged={birthDateChanged}
             >

             </DateField>
        </Grid>

        <Grid item xs={12} >

          <FormControlLabel style={{textAlign:"justify"}}
            control={<Checkbox color="primary" name="check1" checked={state.check_nogp} onChange={(event => checkNOGPClicked(event))} />}
            label={<span style={{ fontSize: '0.9rem', fontWeight:"500", color: state.check_nogp_error ? "red" : "#555" }}>{`I am requesting these tests on a self-referral basis, and am aware that the results of my test cannot be interpreted by Medical Express Clinic without undergoing a full consultation with the doctor.`}
            </span>}
          />
        </Grid>

        <Grid item xs={12}>
        <div style={{ textAlign: "left", fontWeight: "500", fontSize: "0.9rem", padding: "10px", border: "1px solid #999", borderRadius: "8px", lineHeight: "1.5rem", backgroundColor: "#eee", marginTop: "0px" }}>

        <FormControlLabel style={{textAlign:"justify"}}
            control={<Checkbox color="primary" name="check1" checked={state.check_withgp} onChange={(event => checkWithGPClicked(event))} />}
            label={<span style={{ fontSize: '1rem' }}>Add Full Doctor Consultation - <span style={{fontWeight:"700"}}> £150</span> 
            </span>}
          />


        </div>

        </Grid>



      </Grid>
    </React.Fragment>
  );
}
