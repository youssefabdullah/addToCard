import { Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { db } from '../config/fire'
import Card1 from './Card1'
import Card2 from './Card2'

export default function ViewCards() {
    const [card, setcard] = useState([])
useEffect(() => {
    db.collection('Card')
    .onSnapshot(snapshot => {
      const Card = [];
      snapshot.forEach(doc => {
        const data = doc.data();
        // console.log(data)
        data['id'] = doc.id
        Card.push(data)
        
      })
      setcard(Card)
    })
}, [])
    return (
        <div>
             <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        style={{marginTop:20}}
      >
            {
          card.map((data) => {
            return (
              <div id="card-cont" key={Math.random()}>
                <Card2 data={data} />
              </div>
            )
          })
        }
        </Grid>
        </div>
    )
}
