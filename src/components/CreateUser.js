import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Helmet } from "react-helmet";
import { Redirect } from 'react-router-dom';
import Navbar from "./Navbar"
import { useSelector, useDispatch } from "react-redux";

function Copyright() {

    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function CreateUser(props) {
    // const dispatch = useDispatch();

    const userLogin = async (userInfo, password) => {
        console.log(userInfo)
        try {
            const res = await fetch("https://localhost:5000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email: userInfo.email, password: password })
            });

            const data = await res.json()
            console.log(data)
            // if we get user object from response, it means token is correct, we save it back to storage, as well as setState our user to the value we just got from the response
            if (data.status === "success") {
                localStorage.setItem("token", data.data.token);
                console.log('Succesfully login')
            } else {
                // token is not valid, clear the token so that we don't have to check again
                localStorage.removeItem("token");
            }

        } catch (err) {
            console.log(err);
        }
    }

    const CreateNewUser = async (e) => {
        e.preventDefault()
        console.log("email:", e.target.email.value, "password:", e.target.password.value)
        try {
            let password = e.target.password.value
            const res = await fetch("https://localhost:5000/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name: e.target.name.value, email: e.target.email.value, password: e.target.password.value })
            });

            const data = await res.json()
            console.log(data)
            // if we get user object from response, it means token is correct, we save it back to storage, as well as setState our user to the value we just got from the response
            if (data.status === "ok") {
                // dispatch({ type: "SETUSER", payload: { name: data.data.user.name, email: data.data.user.email } })
                props.setUser({ name: data.data.name, email: data.data.email })
                console.log('Succesfully create account')
                userLogin(props.user, password)
            }
            else if (data.status === "failed" && data.error.includes('duplicate key')) {
                alert('User already exists')
            }
            else if (data.status === "failed" && data.error.includes('validation')) {
                alert('Please fill out all fields')
            }
            else {
                // token is not valid, clear the token so that we don't have to check again
                localStorage.removeItem("token");
            }

        } catch (err) {
            console.log(err);
        }
    }
    const classes = useStyles(props);

    if (props.user != null) {
        return <Redirect to="/" />
    }

    return (<div>
        <Navbar user={props.user} />

        <Container component="main" maxWidth="xs">
            <Helmet>
                <title>Login</title>
            </Helmet>
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Create new account
        </Typography>
                <form className={classes.form} noValidate onSubmit={(e) => { CreateNewUser(e) }}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="User Name"
                        name="name"
                        autoComplete="name"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        // className={classes.submit}
                        className="mt-1">
                        Create Account
          </Button>
                    <Grid container>
                        {/* <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid> */}
                        <Grid item>
                            <Link href="/login" variant="body2" onClick={() => props.setNewUser(!props.newUser)}>
                                {"I have an account!"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8} className="text-center">
                Copyright © 2020 Talent Solution<br />EA License No: 16C7981
      </Box>
        </Container>
    </div>
    );
}