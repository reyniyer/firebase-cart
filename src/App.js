import { useEffect, useState } from "react";
import { db, fs } from './firebase'

function App() {
  useEffect(() => {
    db.collection("cart")
      .onSnapshot((querySnapshot) => {
        var p = [];
        querySnapshot.forEach((doc) => {
          p.push(doc.data());
          products.map((i) => {
            if (i.id == doc.data().id) {
              i.cart = true
            }
          })
        });

        setCart(p)
      });

  }, []);
  const [cart, setCart] = useState([])
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Dictionary",
      price: 4,
      url:
        "https://i0.wp.com/lorimaracademix.com/wp-content/uploads/2021/09/9786214510061s.jpg",
      cart: false,
      quantity: 1,
    },
    {
      id: 2,
      name: "Linguistics",
      price: 2,
      url:
        "https://cf.shopee.ph/file/ebcbd2b8aca556ec33ca3d0e03363de8",
      cart: false,
      quantity: 1,
    },
    {
      id: 3,
      name: "Algebra",
      price: 3,
      url:
        "https://lzd-img-global.slatic.net/g/p/0fd0c059624138ec0529aa5b29c91626.jpg_720x720q80.jpg_.webp",
      cart: false,
      quantity: 1,
    }
  ])
  function addtocart(item) {


    products.map((i) => {
      if (i.id == item.id) {
        i.cart = true
      }
    })

    db.collection('cart').doc(`${item.id}`).set(item, { merge: true })

  }
  function removetocart(item) {

    products.map((i) => {
      if (i.id == item.id) {
        i.cart = false
      }
    })
    db.collection('cart').doc(`${item.id}`).delete()

  }
  function increase(item) {
    db.collection('cart').doc(`${item.id}`).update("quantity", fs.firestore.FieldValue.increment(1))

  }
  function decrease(item) {
    db.collection('cart').doc(`${item.id}`).update("quantity", fs.firestore.FieldValue.increment(-1))
  }
  function total() {
    let x = 0
    cart.map((i) => {
      x += i.price * i.quantity

    })
    return x
    
  }
 
  
  return (

    
    <div className='container mt-8'>
 

      <div className='row'></div>
   
      <p></p>
      <div className='row justify-content-center'>
      <p></p>
      <center><h4>Book Shop</h4></center>
      <p></p>
        {products.map((item) => (
          <div className='col-3' key={item.id}>
            <p></p>
            <div className="card"  >
              
              <img src={item.url} className="card-img-top" />
              <div className="card-body">
                <h6 className="card-title text-center">
                  {item.name} 
                </h6>
                {
                  item.cart == false
                  &&
                  <button className='btn btn-primary  mx-auto d-block' onClick={() => addtocart(item)}>
                    Add to Cart
                </button>
                }
                {
                  item.cart == true
                  &&
                  <button className='btn btn-success mx-auto d-block' onClick={() => addtocart(item)}>
                    Added
                </button>
                }
              </div>
            </div>
          </div>

        ))}

      </div>

      <div className='row mt-5'>
        <table className="table  text-center">
        
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Preview</th>
              <th scope="col">Book Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Remove</th>
            </tr>
            <p></p>
          

          <tbody>
            {
              cart.map((i, index) => (

                < tr key={i.id}>
                  <th scope="row">{index + 1}</th>
                  <th scope="row">
                    <img src={i.url} style={{ width: '3rem' }} />
                  </th>
                  
                  <td><h6>{i.name}</h6></td>
                  <td>
                    ${i.price}
                  </td>
                  <td>
                    <button
                      onClick={() => decrease(i)}
                      className="btn btn-primary btn-sm minus-btn"
                    >
                        -   
                      </button>
                    {i.quantity}
                    <button
                      onClick={() => increase(i)}

                      className="btn btn-primary btn-sm add-btn"
                      size="sm"
                    >
                       + 
                      </button>
                  </td>

                  <td>
                    <button onClick={() => removetocart(i)} className="btn remove-btn">
                      Remove
                      </button>
                  </td >
                </tr >
              ))
            }
          </tbody>
        </table>
      </div>
      <div className="row">
        <p></p>
        <div className="btn-primary btn-price col text-center">
          <h4>Total Price: ${total()}</h4>
        </div>
      </div>
    </div >
    
  );


}

export default App;
