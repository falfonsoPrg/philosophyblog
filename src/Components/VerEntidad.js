import React, {useEffect, useState} from 'react'
import { useHistory, useParams } from "react-router-dom";
import axios from 'axios'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';


export default function VerEntidad(props) {
    let { type,id } = useParams();
    const history = useHistory();

    const [entity, setEntity] = useState({
        title: "Default title",
        description: "Default description",
        url: "www.google.com"
    })

    const {handleLoader, openSnackbarByType} = props

    useEffect(() => {
        handleLoader(true)
        let urlToGet = process.env.REACT_APP_ENDPOINT
        if(type === "audiovisual") urlToGet += "/audiovisuals/"
        if(type === "resenias") urlToGet += "/resenias/"
        if(type === "disertacion") urlToGet += "/disertacions/"

        axios.get(urlToGet +""+ id).then(res => {
            setEntity(res.data.response)
            handleLoader(false)
        }).catch(e => {
            handleLoader(false)
            openSnackbarByType(true, "error", "Some error ocurred")
        })

    }, [])

    return (
        <Grid container>
            <Grid item xs={12}>
                <Paper>
                    <Grid container item xs={12} justify="center">
                            <Typography variant="h5" style={{marginTop:50,fontWeight:"bold", fontFamily:"cursive"}} >
                                {entity.title}
                            </Typography>
                            
                    </Grid>
                    <Grid container item xs={12} justify="center" style={{marginTop:10}}>
                        <Link href="#" onClick={(e) => {
                            e.preventDefault()
                            if(!entity.url.includes("https")){
                                setEntity({...entity, url: "https://"+entity.url})
                                window.open("https://"+entity.url, "_blank")
                            }else{
                                window.open(entity.url, "_blank")
                            }
                        }}>
                            Ver completo en su formato original
                        </Link>
                    </Grid>
                    <Grid container item xs={12} justify="center">
                        <Paper>
                            <Typography style={{margin:10, fontFamily:"initial", fontSize:20}} >
                                {entity.description}
                            </Typography>
                        </Paper> 
                    </Grid>
                        <Button variant="contained" color="primary" style={{margin:10}} onClick={() => history.goBack()}>
                        Volver
                    </Button>
                </Paper>
            </Grid>
        </Grid>
    )
}
