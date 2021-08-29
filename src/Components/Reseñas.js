import React, {useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios';

export default function Resenias(props) {
    const [summary, setSummary] = useState([])
    const { handleLoader, openSnackbarByType } = props

    const deleteEntity = (id) => {
      handleLoader(true)
      axios.delete(process.env.REACT_APP_ENDPOINT+"/resenias/"+id).then(res => {
        handleLoader(false)
        loadData()
      }).catch(e => {
        openSnackbarByType(true, "error", "Some error ocurred")
        handleLoader(false)
      })
    }

    const loadData = () => {
      handleLoader(true)
        axios.get(process.env.REACT_APP_ENDPOINT+"/resenias").then(res => {
          setSummary(res.data.response)
          handleLoader(false)
        }).catch(e => {
          openSnackbarByType(true, "error", "Some error ocurred")
          setSummary([])
          handleLoader(false)
        })
    }

    useEffect(() => {
      loadData()
    }, [])
    return (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper>
                <Grid container style={{padding:10}}>
                    <Grid item xs={5}></Grid>
                    <Grid item xs>
                            <Typography variant="h4" style={{fontWeight:"bold", fontFamily:"cursive"}} >
                            Reseñas
                            </Typography>
                    </Grid>
                    <Grid item xs>
                    {props.auth && (<Button variant="contained" color="primary" component={RouterLink} to="/resenias/crear/0">
                    Agregar reseña
                </Button>)}
                    </Grid>
                </Grid>
            </Paper>
            </Grid>
            {summary && summary.length > 0 && 
                summary.map(d => 
                <Grid item xs={4}>
                    <Card>
                    <CardActionArea>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        {d.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        {d.description.substring(0,500)}...
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary" component={RouterLink} to={"/ver/resenias/"+d.id}>
                        Ver más..
                      </Button>
                      {props.auth && 
                      <Button size="small" color="primary" component={RouterLink} to={"/resenias/crear/"+d.id}>
                        Editar
                      </Button>}
                      {props.auth && 
                      <Button size="small" color="danger" onClick={() => deleteEntity(d.id)}>
                        Delete
                      </Button>}
                    </CardActions>
                  </Card>
                </Grid>
                )
            }
        </Grid>
    )
}
