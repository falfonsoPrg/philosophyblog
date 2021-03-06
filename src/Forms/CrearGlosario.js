import React, {useEffect, useState} from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory, useParams } from "react-router-dom";
import axios from 'axios'


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

export default function CrearGlosario(props) {
    const classes = useStyles();
    const history = useHistory();
    let { id } = useParams();
    const { handleLoader, openSnackbarByType } = props

    const [word, setWord] = useState("")
    const [definition, setDefinition] = useState("")

    const submit = (e) => {
        e.preventDefault()
        handleLoader(true)
        if(id === "0"){
            const entity = {
                word: word,
                definition: definition,
            }
            axios.post(process.env.REACT_APP_ENDPOINT+"/glosarios", entity).then(res => {
                openSnackbarByType(true, "success", "Succesfully created")
                handleLoader(false)
                history.goBack()
            }).catch(e => {
                openSnackbarByType(true, "error", "Some error ocurred")
                handleLoader(false)
            })
        }else{
            const entity = {
                id: id,
                word: word,
                definition: definition,
            }
            axios.put(process.env.REACT_APP_ENDPOINT+"/glosarios", entity).then(res => {
                openSnackbarByType(true, "success", "Succesfully updated")
                handleLoader(false)
                history.goBack()
            }).catch(e => {
                openSnackbarByType(true, "error", "Some error ocurred")
                handleLoader(false)
            })
        }
    }

    useEffect(() => {
        if(id !== "0"){
            handleLoader(true)
            axios.get(process.env.REACT_APP_ENDPOINT+"/glosarios/"+id).then(res => {
                setWord(res.data.response.word)
                setDefinition(res.data.response.definition)
                handleLoader(false)
            }).catch(e => {
                openSnackbarByType(true, "error", "Some error ocurred")
                handleLoader(false)
            })
        }
    }, [])

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
            <Paper>
                <Grid container style={{padding:10}}>
                    <Grid item xs={5}></Grid>
                    <Grid item xs>
                            <Typography variant="h5" style={{fontWeight:"bold", fontFamily:"cursive"}} >
                            Agregar palabra
                            </Typography>
                    </Grid>
                    <Grid item xs>
                    <Button variant="contained" color="primary" onClick={() => history.goBack()}>
                    Volver
                </Button>
                    </Grid>
                </Grid>
            </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper>
                    <Grid container justifyContent="center" alignItems="center" direction="row">
                        <form className={classes.root} noValidate autoComplete="off">
                            <div>
                                <TextField id="filled-basic" label="Palabra" variant="filled" value={word} onChange={(e) => setWord(e.target.value)} />
                            </div>
                            <div>
                            <TextField
                                id="filled-multiline-static"
                                label="Descripci??n"
                                multiline
                                rows={10}
                                variant="filled"
                                value={definition}
                                onChange={(e) => setDefinition(e.target.value)} 
                            />
                            </div>
                            <Button variant="contained" color="primary" onClick={submit}>
                                Agregar
                            </Button>
                        </form>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}
