import MenuIcon from '@mui/icons-material/Menu';
import { MenuBox, MyToolbar } from './NavBar.styles';
import {Typography,Button,AppBar,IconButton} from '@mui/material';
import { Link } from 'react-router-dom';

const pages=[{name:"Home",path:'/'},{name:"Users",path:'/'}]
function NavBar() {
  return (
    <AppBar position="static">
    <MyToolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
  <MenuBox>
    {
      pages.map((page,i)=>
        <Link to={page.path} key={i} ><Typography variant='h6' component='p' >{page.name}</Typography></Link>
        )
    }
      
      
        </MenuBox>
      <Button variant='contained' color="primary">Login</Button>
    </MyToolbar>
  </AppBar>
  )
}

export default NavBar