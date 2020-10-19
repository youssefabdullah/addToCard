import { Button, Card, Grid, TextField } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Card1 from './Card1'
import { storeRef, db } from '../config/fire';
import Nav from './Nav'
function Home() {
  const [name, setname] = useState('');
  const [category, setcategory] = useState('');
  const [price, setprice] = useState('');
  const [image, setimage] = useState('');
  const [imageURl, setimageURl] = useState('');
  //image

  if (image) {
    console.log("Being")

    var uploadTask = storeRef.ref(`Product/${image.name}`).put(image)
    uploadTask.on('state_changed', () => { },
      (error) => {
        console.log(error)
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((d) => {
          console.log(d)
          setimageURl(d)
        })
      }
    )
  }
  const handleOnClick = (e) => {
   

    db.collection('Product')
      .add({
        image: imageURl,
        name: name,
        price: price,
        category: category,

      })
    console.log("add data")
    // setprice('')
    // setcategory('')
    // setimage('')
    // setname('')
  }

  const [Product, setProduct] = useState([]);

  useEffect(() => {
    db.collection('Product')
      .onSnapshot(snapshot => {
        const Product = [];
        snapshot.forEach(doc => {
          const data = doc.data();
          // console.log(data)
          data['id'] = doc.id
          Product.push(data)
        })
        setProduct(Product)
      })

  }, []);
  console.log(Product.length)
  return (
    <div className="App">
      
      <Grid
        container
        direction="column"
        justify="space-evenly"
        alignItems="center"
      >
      <div style={{margin:20,fontSize:40,color:"blue"}}>
          Add Product
      </div>
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <div id="add-img">
          <div>
            picture
          </div>
          <input type="file" onChange={e => setimage(e.target.files[0])} />
        </div>
        <TextField id="outlined-basic" label="Name" variant="outlined" onChange={e => setname(e.target.value)} />
        <TextField id="outlined-basic" label="category" variant="outlined" onChange={e => setcategory(e.target.value)} />
        <TextField id="outlined-basic" label="price" variant="outlined" onChange={e => setprice(e.target.value)} />


      </Grid>
      <Grid
        container
        direction="column"
        justify="space-evenly"
        alignItems="center"
      >
        <Button onClick={handleOnClick} variant="contained" color="primary" style={{ marginBottom: 12 }}>
          Save
        </Button>
        </Grid>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        {
          Product.map((data) => {
            return (
              <div id="card-cont" key={Math.random()}>
                <Card1 data={data} />
              </div>
            )
          })
        }
      </Grid>
    </div>
  );
}

export default Home;
