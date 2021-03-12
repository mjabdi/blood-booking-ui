import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import GlobalState from "./GlobalState";
import PersonsBox from "./PersonsBox";
import AntiBodyComponent from "./AntiBodyComponent";
import {
  Button,
  DialogActions,
  DialogTitle,
  FormControl,
  FormLabel,
  Icon,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Checkout from "./checkout";
import { faMars, faVenus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dialog from "@material-ui/core/Dialog";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import CheckIcon from "@material-ui/icons/Check";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";

const useStyles = makeStyles((theme) => ({
  formControl: {
    textAlign: "justify",
  },

  FormTitle: {
    marginTop: "20px",
    marginBottom: "20px",
  },

  packageBox: {
    border: "2px solid",
    borderRadius: "4px",
    width: "100%",
    padding: "20px 5px",

    transition: "all 0.4s ease-in-out",
    boxShadow: " 0 0 10px rgb(0 0 0 / 20%)",
    [theme.breakpoints.up("sm")]: {
      minHeight: "200px",
    },

    cursor: "pointer",
  },

  pageTitle: {
    color: theme.palette.primary.main,
    marginBottom: "15px",
  },
}));

export const Packages = [
  {
    packageName: "SLIVER BLOOD TEST",
    title: "SLIVER BLOOD TEST",
    malePrice: "£85.00",
    femalePrice: "£85.00",
    color: "#aaa",
    descriptions: [
      "Kidney Function",
      "Uric Acid",
      "Bone Metabolism",
      "Nutrition and Immunity",
      "Liver Function",
      "Cholesterol Profile",
      "Blood Sugar (Glucose)",
      "Haematology - Anaemia, Red & White Blood Cell count",
      "Inflammatory Markers",
    ],
    suitableFor:
      "General check-up usually for healthy people to determine normal body function. Very helpful in indicating deficiencies and identifying problems.",
  },
  {
    packageName: "SLIVER PLUS BLOOD TEST",
    title: "SLIVER PLUS BLOOD TEST",
    malePrice: "£155.00",
    femalePrice: "£155.00",
    color: "#00a1c5",
    descriptions: [
      "Kidney Function",
      "Uric Acid",
      "Bone Metabolism",
      "Nutrition and Immunity",
      "Liver Function",
      "Cholesterol Profile",
      "Blood Sugar (Glucose)",
      "Haematology - Anaemia, Red & White Blood Cell count",
      "Inflammatory Markers",
      "Iron Levels",
      "CK and LDH to look at muscle function",
    ],
    suitableFor:
      " Young, healthy and active people looking to monitor or improve physical activity and daily health. Very helpful in indicating deficiencies and identifying problems.",
  },
  {
    packageName: "GOLD BLOOD TEST",
    title: "GOLD BLOOD TEST",
    malePrice: "£210.00",
    femalePrice: "£210.00",
    color: "#ff7a11",
    descriptions: [
      "Kidney Function",
      "Uric Acid",
      "Bone Metabolism",
      "Nutrition and Immunity",
      "Liver Function",
      "Cholesterol Profile",
      "Blood Sugar (Glucose)",
      "Haematology - Anaemia, Red & White Blood Cell count",
      "Inflammatory Markers",
      "Iron Levels",
      "CK and LDH to look at muscle function",
      "Thyroid Function Test",
    ],
    suitableFor:
      " All ages to have a blood assessment of overall health and organ function. Generally good to perform annually in order to monitor changes in levels. This screening tool can also be used to confirm certain diagnoses.",
    prefix: "Early detection of diabetes - HBA1C Test",
    suffix:
      "A PSA test can be performed for men over the age of 50, the cost is £80.",
  },
  {
    packageName: "PLATINIUM BLOOD TEST",
    title: "PLATINIUM BLOOD TEST",
    malePrice: "£390.00",
    femalePrice: "£390.00",
    color: "#333",
    descriptions: [
      "Kidney Function",
      "Uric Acid",
      "Bone Metabolism",
      "Nutrition and Immunity",
      "Liver Function",
      "Cholesterol Profile",
      "Blood Sugar (Glucose)",
      "Haematology - Anaemia, Red & White Blood Cell count",
      "Inflammatory Markers",
      "Iron Levels",
      "CK and LDH to look at muscle function",
      "Thyroid Function Test",
      "Early detection of diabetes - HBA1C Test",
      "Vitamin D, B12 and Folic Acid",
    ],
    suitableFor:
      "High performance athletes or those desiring a detailed and comprehensive insight into their biochemistry, organ function and muscoskeletal functions.",
  },
];

export const Packages2 = [
  {
    packageName: "BLOOD SAMPLE AND URINE",
    title: "BLOOD_SAMPLE_AND_URINE",
    desc: "HIV I&II, Syphilis IgM/IgG, Chlamydia, Gonorrhoea",
    price: "£350.00",
    color: "#3fc566",
  },
  {
    packageName: "BLOOD SAMPLE AND URINE OR SWAB",
    title: "BLOOD_SAMPLE_AND_URINE_OR_SWAB",
    desc:
      "HIV I&II, Hepatitis B, Hepatitis C Antibodies, Hepatitis C Antigen, Syphilis IgM/IgG -",
    price: "£450.00",
    color: "#94b8dd",
  },
];

const Individuals = [
  {
    packageName: "HIV TESTING",
    desc: "HIV I & II",
    price: "£49.00",
  },
  {
    packageName: "CHLAMYDIA TESTING",
    price: "£69.00",
  },
  {
    packageName: "SYPHILIS BLOOD TESTING",
    price: "£55.00",
  },
  {
    packageName: "HERPES TESTING",
    desc: "Herpes I & II",
    price: "£92.50",
  },
  {
    packageName: "GONORRHOEA TESTING",
    price: "£69.00",
  },
  {
    packageName: "HEPATITIS A PROFILE TESTING",
    desc: "A",
    price: "£87.00",
  },
  {
    packageName: "HEPATITIS B PROFILE TESTING",
    desc: "B",
    price: "£109.50",
  },
  {
    packageName: "HEPATITIS C ANTIBODIES TESTING",
    desc: "C",
    price: "£89.00",
  },
  {
    packageName: "HPV TESTING",
    price: "£200.00",
  },
  {
    packageName: "BACTERIAL SWAB TESTING",
    price: "£68.50",
  },
];

const IndividualsCombo = [
  {
    packageName: "CHLAMYDIA, GONORRHOEA AND TRICHOMONAS",
    price: "£114.00",
  },
  {
    packageName: "HIV I & II WITH SYPHILIS",
    price: "£190.00",
  },
];

const WhiteRadio = withStyles({
  root: {
    color: "#fff",
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

export default function PackageForm() {
  const classes = useStyles();
  const [state, setState] = React.useContext(GlobalState);

  const [packageName, setPackageName] = React.useState(state.packageName || "");
  const [packagePrice, setPackagePrice] = React.useState(
    state.packagePrice || 0
  );

  const [notes, setNotes] = React.useState(
    state.packageName && state.packageName.indexOf("(Blood Test)") > 0
      ? state.packageName.substr(
          0,
          state.packageName.indexOf("(Blood Test)") - 1
        )
      : ""
  );

  const notesChanged = (event) => {
    setNotes(event.target.value);

    if (event.target.value && event.target.value.length > 0) {
      const _packageName = `${event.target.value} (Blood Test)`;
      const price = 0;
      setPackageName(`${_packageName}`);
      setPackagePrice({ ...state, packagePrice: price });

      setState((state) => ({
        ...state,
        packageName: `${_packageName}`,
        packagePrice: price,
      }));
    }

    // setState((state) => ({ ...state, notes: event.target.value }));
    // setState((state) => ({ ...state, notesError: false }));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const packageClicked = (_packageName, price) => {
    setPackageName(`${_packageName}`);
    setPackagePrice({ ...state, packagePrice: price });

    setNotes("");

    setState((state) => ({
      ...state,
      packageName: `${_packageName}`,
      packagePrice: price,
    }));
  };

  const package2Clicked = (_packageName, price) => {
    setPackageName(`${_packageName}`);
    setPackagePrice({ ...state, packagePrice: price });

    setState((state) => ({
      ...state,
      packageName: `${_packageName}`,
      packagePrice: price,
    }));
  };

  const indivisualClicked = (checked, _packageName, price) => {
    if (checked) {
      setPackageName(`Indivisual Tests`);
      setPackagePrice({ ...state, packagePrice: 0 });
      setState((state) => ({
        ...state,
        packageName: `Indivisual Tests`,
        packagePrice: 0,
      }));

      const _temp = state.indivisualTests;
      if (_temp.findIndex((e) => e.packageName === _packageName) < 0) {
        _temp.push({
          packageName: _packageName,
          price: price,
        });
      }

      setState((state) => ({ ...state, indivisualTests: _temp }));
    } else {
      setState((state) => ({
        ...state,
        indivisualTests: state.indivisualTests.filter(
          (e) => e.packageName !== _packageName
        ),
      }));
    }
  };

  const indivisualComboClicked = (checked, _packageName, price) => {
    if (checked) {
      setPackageName(`Combo STD Checks`);
      setPackagePrice({ ...state, packagePrice: 0 });
      setState((state) => ({
        ...state,
        packageName: `Combo STD Checks`,
        packagePrice: 0,
      }));

      const _temp = state.indivisualCombos;
      if (_temp.findIndex((e) => e.packageName === _packageName) < 0) {
        _temp.push({
          packageName: _packageName,
          price: price,
        });
      }
      setState((state) => ({ ...state, indivisualCombos: _temp }));
    } else {
      setState((state) => ({
        ...state,
        indivisualCombos: state.indivisualCombos.filter(
          (e) => e.packageName !== _packageName
        ),
      }));
    }
  };

  const [infoItem, setInfoItem] = React.useState(null);
  const [showInfoDialog, setShowInfoDialog] = React.useState(false);

  const handleCloseDialog = () => {
    setShowInfoDialog(false);
  };

  const showMoreInfoDialog = (item) => {
    setInfoItem(item);
    setShowInfoDialog(true);
  };

  return (
    <React.Fragment>
      <Typography className={classes.pageTitle} variant="h6" gutterBottom>
        Choose your Package
      </Typography>

      <div
        style={{
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0px 0px 20px #dadada",
        }}
      >
        <div
          style={{
            textAlign: "center",
            fontSize: "1.2rem",
            fontWeight: "500",
            color: "#777",
            marginBottom: "20px",
          }}
        >
          Popular Blood Test Packages
        </div>

        <Grid
          container
          spacing={1}
          alignItems="baseline"
          style={{ marginTop: "10px" }}
        >
          {Packages.map((item) => (
            <Grid item xs={12} sm={6}>
              <div
                className={classes.packageBox}
                style={
                  packageName?.startsWith(item.packageName)
                    ? {
                        borderColor: item.color,
                        color: "#fff",
                        backgroundColor: item.color,
                      }
                    : { borderColor: item.color, color: item.color }
                }
              >
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={1}
                >
                  <div
                    onClick={() =>
                      packageClicked(item.packageName, `${item.malePrice}`)
                    }
                    style={{ width: "97%" }}
                  >
                    <Grid item xs={12}>
                      <div style={{ fontWeight: "500", fontSize: "1.2rem" }}>
                        {item.title}
                      </div>
                    </Grid>

                    <Grid item xs={12}>
                      <div style={{ marginTop: "10px" }}>
                        {item.malePrice === item.femalePrice && (
                          <div
                            style={{
                              fontSize: "1.5rem",
                              marginTop: "15px",
                              marginBottom: "25px",
                              fontWeight: "600",
                            }}
                          >
                            {item.malePrice}
                          </div>
                        )}

                        {item.malePrice !== item.femalePrice && (
                          <React.Fragment>
                            <div
                              style={{
                                fontSize: "2rem",
                                fontWeight: "600",
                                marginTop: "10px",
                              }}
                            >
                              <FontAwesomeIcon
                                icon={faMars}
                                style={{ fontSize: "2rem" }}
                                transform="left-4 down-1"
                              />{" "}
                              {item.malePrice}
                            </div>
                            <div
                              style={{
                                fontSize: "2rem",
                                fontWeight: "600",
                                marginTop: "10px",
                                marginBottom: "20px",
                              }}
                            >
                              <FontAwesomeIcon
                                icon={faVenus}
                                style={{ fontSize: "2rem" }}
                                transform="left-4 down-1"
                              />{" "}
                              {item.femalePrice}
                            </div>
                          </React.Fragment>
                        )}
                      </div>
                    </Grid>

                    <Grid item xs={12} md={12}>
                      <Button
                        fullWidth
                        variant="contained"
                        onClick={() =>
                          packageClicked(item.packageName, `${item.malePrice}`)
                        }
                      >
                        Select
                      </Button>
                    </Grid>
                  </div>

                  <Grid item xs={12} md={12} style={{ marginTop: "10px" }}>
                    <Button
                      fullWidth
                      variant="contained"
                      onClick={() => showMoreInfoDialog(item)}
                    >
                      More Info
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          ))}

          <div
            style={{
              textAlign: "center",
              width: "100%",
              fontSize: "1.2rem",
              fontWeight: "600",
              color: "#333",
              marginBottom: "20px",
              marginTop: "20px",
            }}
          >
            Looking for a specific blood test? Write to us below.
          </div>

          <div
            style={{
              textAlign: "center",
              width: "100%",
              fontWeight: "400",
              color: "#777",
            }}
          >
            <TextField
              style={{ marginTop: "10px" }}
              id="notes"
              // error={state.notesError && state.package === "Others"}
              fullWidth
              // required={state.package === "Others"}
              label=""
              value={notes}
              onChange={notesChanged}
              placeholder="Enter blood test"
              variant="outlined"
            />
          </div>
        </Grid>
      </div>

      {infoItem && (
        <Dialog onClose={handleCloseDialog} open={showInfoDialog}>
          <div style={{ position: "relative" }}>
            <div
              style={{
                fontSize: "1.2rem",
                fontWeight: "500",
                backgroundColor: "#333",
                color: "#fff",
                margin: "0",
                padding: "20px",
              }}
            >
              {infoItem.title}
            </div>

            <div style={{ position: "absolute", right: "10px", top: "10px" }}>
              <IconButton onClick={handleCloseDialog}>
                <CloseIcon style={{ color: "#fff" }} />
              </IconButton>
            </div>

            <div
              style={
                {
                  // padding: "20px",
                }
              }
            >
              <div
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  backgroundColor: "#fff",
                  color: "#333",
                  margin: "0",
                  padding: "20px 10px",
                }}
              >
                {`${infoItem.title} - ${infoItem.malePrice}`}
              </div>

              <div>
                <ul style={{ listStyle: "none" }}>
                  {infoItem.descriptions.map((desc) => (
                    <li
                      style={{
                        fontSize: "0.95rem",
                        lineHeight: "1rem",
                        fontWeight: "400",
                        marginTop: "10px",
                      }}
                    >
                      <CheckCircleRoundedIcon
                        style={{
                          fontSize: "0.95rem",
                          marginLeft: "-20px",
                          color: "#ff7a11",
                        }}
                      />
                      <span style={{ paddingLeft: "10px" }}>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {infoItem.prefix && (
                <div
                  style={{
                    padding: "20px",
                    paddingBottom: "0px",
                    marginTop: "5px",
                    color: "#555",
                    fontSize: "0.85rem",
                    lineHeight: "1.4rem",
                  }}
                >
                  {infoItem.prefix}
                </div>
              )}

              <div
                style={{
                  padding: "20px",
                  marginTop: "5px",
                  color: "#555",
                  fontSize: "0.85rem",
                  lineHeight: "1.4rem",
                }}
              >
                Suitable for : {infoItem.suitableFor}
              </div>

              {infoItem.suffix && (
                <div
                  style={{
                    padding: "0px 20px",
                    marginTop: "5px",
                    marginBottom: "20px",
                    color: "#555",
                    fontSize: "0.85rem",
                    lineHeight: "1.4rem",
                  }}
                >
                  {infoItem.suffix}
                </div>
              )}
            </div>
          </div>
        </Dialog>
      )}
    </React.Fragment>
  );
}
