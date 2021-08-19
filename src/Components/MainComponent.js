import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';

export default function MainComponent(props) {
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
        </Grid>
    )
}
