import React, {useEffect, useState} from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
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

export default function CrearAuidiovisual(props) {
    const classes = useStyles();
    const history = useHistory();
    let { id } = useParams();
    const { handleLoader, openSnackbarByType } = props

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [url, setUrl] = useState("")

    const submit = (e) => {
        e.preventDefault()
        handleLoader(true)
        if(id === "0"){
            const entity = {
                title: title,
                description: description,
                url: url
            }
            axios.post(process.env.REACT_APP_ENDPOINT+"/audiovisuals", entity).then(res => {
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
                title: title,
                description: description,
                url: url
            }
            axios.put(process.env.REACT_APP_ENDPOINT+"/audiovisuals", entity).then(res => {
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
            axios.get(process.env.REACT_APP_ENDPOINT+"/audiovisuals/"+id).then(res => {
                setTitle(res.data.response.title)
                setDescription(res.data.response.description)
                setUrl(res.data.response.url)
                handleLoader(false)
            }).catch(e => {
                openSnackbarByType(true, "error", "Some error ocurred")
                handleLoader(false)
            })
        }
    }, [])

    return (
        <Grid container spacing={3}>
            <Grid item xs={8}>
                <Paper>
                    Agregar audiovisual
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
                                <TextField id="filled-basic" label="Título" variant="filled" 
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}/>
                            </div>
                            <div>
                                <TextField
                                    id="filled-multiline-static"
                                    label="Texto"
                                    multiline
                                    rows={10}
                                    variant="filled"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)} 
                                />
                            </div>
                            <div>
                                <TextField id="filled-basic" label="Enlace a Drive (público)" variant="filled" value={url}
                                onChange={(e) => setUrl(e.target.value)}/>
                            </div>
                            <Button variant="contained" color="primary" onClick={(e) => submit(e)}>
                                Agregar
                            </Button>
                        </form>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}
