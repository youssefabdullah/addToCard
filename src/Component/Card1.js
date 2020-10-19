import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { db } from '../config/fire';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
export default function Card1(props) {
  const classes = useStyles();
  const [card, setcard] = useState([])
  const [boolean, setboolean] = useState(true)
  const [old, setOld] = useState(parseInt(props.data.price))
  const handelOnClick = (e) => {
    e.preventDefault();

    db.collection('Card')
      .onSnapshot(snapshot => {
        const Card = [];
        snapshot.forEach(doc => {
          const data = doc.data();
          // console.log(data)

          Card.push(data)
          
          if (data.id === props.data.id) {
            console.log("object")
            setboolean(false)
            db.collection('Card').doc(doc.id).update ({
             
              price: parseInt(data.price) ,
             n:data.n ++,
    
            })
            
          console.log("add to card")
          }
        })
        setcard(Card)
      })
    if (boolean) {
      db.collection('Card')
        .add({
          image: props.data.image,
          name: props.data.name,
          price: props.data.price,
          category: props.data.category,
          id: props.data.id,
          n:1

        })
      console.log("add to card")
    }
  }

  return (
    <Card className={classes.root} style={{marginBottom:20}}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.data.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.data.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.data.price}$
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handelOnClick}>
          Add to Cart
        </Button>
        <Button size="small" color="primary">
         
        </Button>
      </CardActions>
    </Card>
  );
}