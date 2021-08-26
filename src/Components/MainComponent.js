import React, {useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import TextField from '@material-ui/core/TextField';

import axios from 'axios';

export default function MainComponent(props) {
    const { handleLoader, openSnackbarByType } = props
    const [comment, setComment] = useState("")
    const [comments, setComments] = useState([])

    const getComments = () => {
        handleLoader(true)
        axios.get(process.env.REACT_APP_ENDPOINT + "/comentarios").then(res => {
            setComments(res.data.response)
            handleLoader(false)
        }).catch(e => {
            setComments([])
            handleLoader(false)
        })
    }

    const submitComment = () => {
        handleLoader(true)
        const data = {
            title: "Comment",
            description: comment
        }
        axios.post(process.env.REACT_APP_ENDPOINT + "/comentarios", data).then(res => {
            handleLoader(false)
            getComments()
            setComment("")
        }).catch(e => {
            openSnackbarByType(true, "error", "Couldn't create the comment")
            handleLoader(false)
        })
    }
    const deleteComment = (id) => {
        axios.delete(process.env.REACT_APP_ENDPOINT + "/comentarios/"+id).then(res => {
            handleLoader(false)
            getComments()
        }).catch(e => {
            openSnackbarByType(true, "error", "Couldn't delete the comment")
            handleLoader(false)
        })
    }

    useEffect(() => {
        getComments()
    }, [])

    return (
        <Grid container spacing={3}>
            <Grid item xs={8}>
                <Paper>
                    <Card>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Bienvenido a mi Blog
                        </Typography>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis tempor ornare. Cras sit amet ligula dictum, auctor mi sed, euismod enim. Vestibulum rhoncus, nulla ut finibus tincidunt, erat tellus eleifend nisi, sit amet tristique diam leo sed quam. Suspendisse aliquam sem eros, a maximus turpis dapibus vel. Vivamus condimentum bibendum libero, ultrices malesuada nibh porta lacinia. Donec tempus vitae enim et vestibulum. Nam sed facilisis ante. Maecenas euismod sodales egestas. Nulla varius sodales odio et laoreet. Nulla aliquam, enim sed congue tempor, magna ipsum aliquam eros, id euismod felis erat sed ex.

                        </p>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Perfil</Button>
                    </CardActions>
                    </Card>
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper>
                <Card >
                <CardActionArea>
                    <CardMedia
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    Lorem ipsum
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis tempor ornare. Cras sit amet ligula dictum, auctor mi sed, euismod enim. Vestibulum rhoncus, nulla ut finibus tincidunt, erat tellus eleifend nisi, sit amet tristique diam leo sed quam. Suspendisse aliquam sem eros, a maximus turpis dapibus vel. Vivamus condimentum bibendum libero, ultrices malesuada nibh porta lacinia. Donec tempus vitae enim et vestibulum. Nam sed facilisis ante. Maecenas euismod sodales egestas. Nulla varius sodales odio et laoreet. Nulla aliquam, enim sed congue tempor, magna ipsum aliquam eros, id euismod felis erat sed ex.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                    <Button size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions>
                </Card>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="filled-multiline-static"
                    label="Comentar..."
                    multiline
                    rows={3}
                    variant="filled"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)} 
                    style={{width: '100%'}}
                />
                <Button variant="contained" color="primary" style={{marginTop:10}} onClick={() => submitComment()}>Comentar</Button>
            </Grid>

            <Grid item xs={12}>
                <Typography>
                    Comentarios
                </Typography>
                {comments && comments.length > 0 && 
                comments.map(c => 
                    <Paper style={{marginTop: 10}}>
                        <Typography color="textSecondary" gutterBottom
                        style={{padding:20}}>
                            {c.description}
                        </Typography>

                        {props.auth && <Button style={{marginBottom:20, marginLeft:20}} variant="contained" color="secondary" onClick={() => deleteComment(c.id)}>Delete</Button>}
                    </Paper>
                    )
                }

                
            </Grid>
        </Grid>
    )
}
