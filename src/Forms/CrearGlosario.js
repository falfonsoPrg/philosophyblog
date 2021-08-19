import React from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory, useParams } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

export default function CrearGlosario() {
    const classes = useStyles();
    const history = useHistory();
    let { id } = useParams();

    return (
        <Grid container spacing={3}>
            <Grid item xs={8}>
                <Paper>
                    Agregar palabra
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Button variant="contained" color="primary" onClick={() => history.goBack()}>
                    Volver
                </Button>
            </Grid>
            <Grid item xs={12}>
                <Paper>
                    <Grid container justifyContent="center" alignItems="center" direction="row">
                        <form className={classes.root} noValidate autoComplete="off">
                            <div>
                                <TextField id="filled-basic" label="Palabra" variant="filled" />
                            </div>
                            <div>
                            <TextField
                                id="filled-multiline-static"
                                label="Descripción"
                                multiline
                                rows={10}
                                variant="filled"
                            />
                            </div>
                            <Button variant="contained" color="primary">
                                Agregar
                            </Button>
                        </form>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}
