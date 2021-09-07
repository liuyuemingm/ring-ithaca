import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { alpha, makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      // width: `calc(100% - ${drawerWidth}px)`,
      // marginLeft: drawerWidth,
    },
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#181818'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    elevation: 5,
    backgroundColor: '#222222',

  },
  content: {
    flexGrow: 1,
    // width: `calc(100% - ${drawerWidth}px)`,
    // padding: theme.spacing(3),
  },
  menuBtn: {
    color: '#C08FFF',
    position: 'relative',
    left: '10px',
    textShadow: '0 0 10px #7000ff',
  },
  background: {
    display: 'none', //remember to change this
    height: '100vh',
    position: 'fixed',
    [theme.breakpoints.down('sm')]: {
      left: '120px'
    },
    [theme.breakpoints.down('xs')]: {
      left: '-100px',

    },
  },
  search: {
    position: 'absolute',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    right: '20px',
    width: '80%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '30ch',
      },
    },
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List style={{ position: 'absolute', top: '120px', width: '100%' }}>
        {['Home', 'Syllabus', 'Weapons', 'Glossary', 'Contact'].map((text, index) => (
          <Link to={`../${text}`} key={text} style={{
            textDecoration: 'none'
          }}>
            <ListItem button >
              <ListItemText primary={text} className={classes.menuBtn} />
            </ListItem>
            <Divider />
          </Link>
        ))}
      </List>

    </div >
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar} >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Hidden xsDown implementation="css">
            <img src='/images/RingItahcaLogo.png' style={{ position: 'absolute', top: '1px', left: '30px', width: '120px' }} />
          </Hidden>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="The world is deceptive..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}

          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            PaperProps={{ elevation: 12 }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav><main className={classes.content}>
        {/* <img src='/images/summer1.jpg' className={classes.background} /> */}
        <div className={classes.toolbar} />
        {props.children}
      </main>

    </div>
  );
}


export default ResponsiveDrawer;
export { drawerWidth };
