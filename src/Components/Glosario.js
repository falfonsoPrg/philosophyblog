import React, {useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as RouterLink } from 'react-router-dom';

export default function Glosario(props) {

    const [words, setWords] = useState([])

    useEffect(() => {
        setWords([
            {
                id:1,
                word:"Palabra 1",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper faucibus lacus, sit amet accumsan sem. Proin et vestibulum ipsum, id sodales nibh. Fusce tellus turpis, blandit et faucibus eget, interdum vitae nulla. Suspendisse et metus libero. Curabitur id massa sed nunc auctor auctor ac at diam. Nunc viverra dolor eget felis bibendum, at volutpat justo ullamcorper. Maecenas efficitur velit sed purus sagittis, in porttitor dolor accumsan. Nullam fringilla imperdiet lectus, et tempor ante. Aliquam ante tellus, consectetur a luctus nec, iaculis et odio. Maecenas nec sem id massa pellentesque vulputate. Nullam volutpat orci diam, nec mattis lacus porttitor ut. Morbi eleifend malesuada enim sagittis malesuada. Maecenas vel nisi egestas, luctus nibh at, ullamcorper massa."
            },
            {
                id:1,
                word:"Palabra 2",
                description: "Descripcion por la palabra 2"
            }
        ])
    }, [])

    return (
        <Grid container spacing={3}>
            <Grid item xs={8}>
                <Paper>
                    Glosario
                </Paper>
            </Grid>
            <Grid item xs={4}>
                {props.auth && (<Button variant="contained" color="primary" component={RouterLink} to="/glosario/crear/0">
                    Agregar palabra
                </Button>)}
            </Grid>

            <Grid item xs={12}>

                {words && words.length > 0 &&
                    words.map(w =>  
                        (<Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <Typography>{w.word}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {w.description}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>)
                    )
                }

                
            </Grid>
        </Grid>
    )
}
