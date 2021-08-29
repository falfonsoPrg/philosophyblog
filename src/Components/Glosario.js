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
import axios from 'axios';
export default function Glosario(props) {

    const [words, setWords] = useState([])
    const { handleLoader, openSnackbarByType } = props

    const deleteEntity = (id) => {
        handleLoader(true)
        axios.delete(process.env.REACT_APP_ENDPOINT+"/glosarios/"+id).then(res => {
          handleLoader(false)
          loadData()
        }).catch(e => {
          openSnackbarByType(true, "error", "Some error ocurred")
          handleLoader(false)
        })
      }

      const loadData = () => {
        handleLoader(true)
        axios.get(process.env.REACT_APP_ENDPOINT+"/glosarios").then(res => {
            setWords(res.data.response)
          handleLoader(false)
        }).catch(e => {
          openSnackbarByType(true, "error", "Some error ocurred")
          setWords([])
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
                                Glosario
                            </Typography>
                    </Grid>
                    <Grid item xs>
                    {props.auth && (<Button variant="contained" color="primary" component={RouterLink} to="/glosario/crear/0">
                        Agregar palabra
                    </Button>)}
                    </Grid>
                </Grid>
            </Paper>
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
                                    {w.definition}
                                </Typography>
                            </AccordionDetails>
                            {props.auth && 
                                <Button size="small" color="primary" component={RouterLink} to={"/glosario/crear/"+w.id}>
                                    Editar
                                </Button>}
                                {props.auth && 
                      <Button size="small" color="danger" onClick={() => deleteEntity(w.id)}>
                        Delete
                      </Button>}
                        </Accordion>)
                    )
                }

                
            </Grid>
        </Grid>
    )
}
