import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import Base from '../Base/Base.jsx';
import {Button} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import { all,breakfast,cooldrinks,dessert,dinner,lunch,mojitos,nonveg,veg,pasta,salads,soups} from '../images/images.js';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Filter from '../Filter.jsx';
import '../styles/menu.css'



const images = [
  {
    url: all,
    title: 'All',
    width: '50%',
  },
  {
    url: breakfast,
    title: 'Breakfast',
    width: '50%',
  },
  {
    url: lunch,
    title: 'Lunch',
    width: '50%',
    
  },
  {
    url: dinner,
    title: 'Dinner',
    width: '50%',
  },
  {
    url: pasta,
    title: 'Pasta',
    width: '50%',
  },
  {
    url: salads,
    title: 'Salads',
    width: '50%',
  }, 
  {
    url: soups,
    title: 'Soups',
    width: '50%',
  },
  {
    url: cooldrinks,
    title: 'Cool Drinks',
    width: '50%',
  },
  {
    url: dessert,
    title: 'Dessert',
    width: '50%',
  },
  {
    url: veg,
    title: 'Veg-Meals',
    width: '50%',
  },
  {
    url: nonveg,
    title: 'Non-Veg',
    width: '50%',
  },
  {
    url: mojitos,
    title: 'Mojitos',
    width: '50%',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function Menus() {
  const navigate = useNavigate();
  return (
      <div >
      <div className='menubase'>
      <Base  />
      </div>
      <div>
      <h2 className='heading'>Menus</h2>
      <Filter  />
      <div className='allback1'>
      <Button onClick={() =>navigate("/")}><ArrowBackIosNewIcon /> Back</Button>
      </div>
      </div>
      <br />
      <br />
      <div className='menu'>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '150%' }}>
      {images.map((image) => (
      <ImageButton
          focusRipple
          key={image.title}
          onClick={() =>navigate(`/${image.title}`)}
          style={{
            width: image.width,
          }}
        >
        <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
        <ImageBackdrop className="MuiImageBackdrop-root" />
        <Image>
        <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
        <ImageMarked className="MuiImageMarked-root" />
        </Typography>
        </Image>
        </ImageButton>
        ))}
        </Box>
        </div>
        </div>
  );
}