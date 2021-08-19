import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';

export default function Disertacion(props) {

    const [disertation, setDisertation] = useState([
        {
            id:1,
            title: "Disertación 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis tempor ornare. Cras sit amet ligula dictum, auctor mi sed, euismod enim. Vestibulum rhoncus, nulla ut finibus tincidunt, erat tellus eleifend nisi, sit amet tristique diam leo sed quam. Suspendisse aliquam sem eros, a maximus turpis dapibus vel. Vivamus condimentum bibendum libero, ultrices malesuada nibh porta lacinia. Donec tempus vitae enim et vestibulum. Nam sed facilisis ante. Maecenas euismod sodales egestas. Nulla varius sodales odio et laoreet. Nulla aliquam, enim sed congue tempor, magna ipsum aliquam eros, id euismod felis erat sed ex.",
        },
        {
            id:1,
            title: "Disertación 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis tempor ornare. Cras sit amet ligula dictum, auctor mi sed, euismod enim. Vestibulum rhoncus, nulla ut finibus tincidunt, erat tellus eleifend nisi, sit amet tristique diam leo sed quam. Suspendisse aliquam sem eros, a maximus turpis dapibus vel. Vivamus condimentum bibendum libero, ultrices malesuada nibh porta lacinia. Donec tempus vitae enim et vestibulum. Nam sed facilisis ante. Maecenas euismod sodales egestas. Nulla varius sodales odio et laoreet. Nulla aliquam, enim sed congue tempor, magna ipsum aliquam eros, id euismod felis erat sed ex.",
        },
        {
            id:1,
            title: "Disertación 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis tempor ornare. Cras sit amet ligula dictum, auctor mi sed, euismod enim. Vestibulum rhoncus, nulla ut finibus tincidunt, erat tellus eleifend nisi, sit amet tristique diam leo sed quam. Suspendisse aliquam sem eros, a maximus turpis dapibus vel. Vivamus condimentum bibendum libero, ultrices malesuada nibh porta lacinia. Donec tempus vitae enim et vestibulum. Nam sed facilisis ante. Maecenas euismod sodales egestas. Nulla varius sodales odio et laoreet. Nulla aliquam, enim sed congue tempor, magna ipsum aliquam eros, id euismod felis erat sed ex.",
        },
        {
            id:1,
            title: "Disertación 4",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis tempor ornare. Cras sit amet ligula dictum, auctor mi sed, euismod enim. Vestibulum rhoncus, nulla ut finibus tincidunt, erat tellus eleifend nisi, sit amet tristique diam leo sed quam. Suspendisse aliquam sem eros, a maximus turpis dapibus vel. Vivamus condimentum bibendum libero, ultrices malesuada nibh porta lacinia. Donec tempus vitae enim et vestibulum. Nam sed facilisis ante. Maecenas euismod sodales egestas. Nulla varius sodales odio et laoreet. Nulla aliquam, enim sed congue tempor, magna ipsum aliquam eros, id euismod felis erat sed ex.",
        },
        {
            id:1,
            title: "Disertación 5",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis tempor ornare. Cras sit amet ligula dictum, auctor mi sed, euismod enim. Vestibulum rhoncus, nulla ut finibus tincidunt, erat tellus eleifend nisi, sit amet tristique diam leo sed quam. Suspendisse aliquam sem eros, a maximus turpis dapibus vel. Vivamus condimentum bibendum libero, ultrices malesuada nibh porta lacinia. Donec tempus vitae enim et vestibulum. Nam sed facilisis ante. Maecenas euismod sodales egestas. Nulla varius sodales odio et laoreet. Nulla aliquam, enim sed congue tempor, magna ipsum aliquam eros, id euismod felis erat sed ex.",
        }
    ])

    return (
        <Grid container spacing={3}>
            <Grid item xs={8}>
                <Paper>
                    Disertación
                </Paper>
            </Grid>
            <Grid item xs={4}>
                {props.auth && (<Button variant="contained" color="primary" component={RouterLink} to="/disertacion/crear/0">
                    Agregar disertación
                </Button>)}
            </Grid>
            {disertation && disertation.length > 0 && 
                disertation.map(d => 
                <Grid item xs={4}>
                    <Card>
                    <CardActionArea>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        {d.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          {d.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        Ver más..
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
                )
            }
        </Grid>
    )
}
