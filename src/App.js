import React from 'react';
import { useEffect } from 'react';
import clsx from 'clsx';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

//ICONS
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import MailIcon from '@material-ui/icons/Mail';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import IconButton from '@material-ui/core/IconButton';
import SecurityIcon from '@material-ui/icons/Security';

import AppRoutes from './AppRoutes'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  title: {
    flexGrow: 1,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState(false);

  const [auth, setAuth] = React.useState(false)

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openLoader, setOpenLoader] = React.useState(false);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [snackBarType, setSnackBarType] = React.useState("error");
  const [snackBarMessage, setSnackBarMessage] = React.useState("Default Message!");

  const handleCloseLoader = () => {
    //setOpenLoader(false);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const handleCloseSnackBar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };

  const openSnackbarByType = (pBool, pType, pMessage) => {
    setSnackBarType(pType)
    setOpenSnackbar(pBool)
    setSnackBarMessage(pMessage)
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography variant="h2" className={classes.title} noWrap>
            <IconButton color="inherit" fontSize="large" component={RouterLink} to="/">
            Blog Introducción a la Filosofia 
            </IconButton>
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={openMenu}
                onClose={handleClose}
              >
                <MenuItem onClick={()=>{
                    setAnchorEl(null);
                    setOpenMenu(false);
                    setAuth(false);
                    openSnackbarByType(true,"info","Logout successfully!");
                    }}>Log out</MenuItem>
              </Menu>
            </div>
          )}
          {!auth && (
              <div>
                  Log in
                {/* <IconButton component={RouterLink} to="/login"> */}
                <IconButton onClick={() => setAuth(true)}>
                    <VpnKeyIcon style={{ color: 'white' }} />
                </IconButton>
              </div>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
            <ListItem button key={"Glosario"} component={RouterLink} to="/glosario">
              <ListItemIcon ><MailIcon /></ListItemIcon>
              <ListItemText primary={"Glosario"} />
            </ListItem>
            <ListItem button key={"Disertación"} component={RouterLink} to="/disertacion">
              <ListItemIcon ><SecurityIcon /></ListItemIcon>
              <ListItemText primary={"Disertación"} />
            </ListItem>
            <ListItem button key={"Reseñas"} component={RouterLink} to="/resenias">
              <ListItemIcon ><SecurityIcon /></ListItemIcon>
              <ListItemText primary={"Reseñas"} />
            </ListItem>
            <ListItem button key={"Audiovisual"} component={RouterLink} to="/audiovisual">
              <ListItemIcon ><SecurityIcon /></ListItemIcon>
              <ListItemText primary={"Audiovisual"} />
            </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Backdrop className={classes.backdrop} open={openLoader} onClick={handleCloseLoader}>
            <CircularProgress color="inherit" />
        </Backdrop>
        <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackBar} anchorOrigin={ {vertical: 'bottom', horizontal: 'right'} }>
          <div>
            {snackBarType === "success" && (
              <Alert onClose={handleCloseSnackBar} severity="success">
                {snackBarMessage}
              </Alert>
            )}
            {snackBarType === "error" && (
              <Alert onClose={handleCloseSnackBar} severity="error">
                {snackBarMessage}
              </Alert>
            )}
            {snackBarType === "warning" && (
              <Alert onClose={handleCloseSnackBar} severity="warning">
                {snackBarMessage}
              </Alert>
            )}
            {snackBarType === "info" && (
              <Alert onClose={handleCloseSnackBar} severity="info">
                {snackBarMessage}
              </Alert>
            )}
          </div>
        </Snackbar>
        <AppRoutes auth={auth} handleAuth={setAuth} handleLoader={setOpenLoader} openSnackbarByType={openSnackbarByType}/>
      </main>
    </div>
  );
}
