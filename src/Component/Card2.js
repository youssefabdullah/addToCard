
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
import { TextField } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
export default function Card2(props) {
    const classes = useStyles();
    const [price, setprice] = useState(props.data.price)
    const [n, setn] = useState(props.data.n)
    const handelOnClick=(e)=>{
        db.collection('Card').doc(props.data.id).delete()
    }
    return (
        <div>
            <Card className={classes.root} style={{ marginBottom: 20 }}>
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
                            {price*n}$<br/>
                   {n}     <TextField type="number" id="standard-basic" label="Standard"  onChange={e => setn(e.target.value)}/> ${console.log(price)}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" onClick={e=>db.collection('Card').doc(props.data.id).update({
                        n
                    })}>
                        Update
                    </Button>
                    <Button  color="secondary" onClick={handelOnClick}>
                        Delete
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}
