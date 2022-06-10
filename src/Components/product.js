export const products = [
    {
      id: 1,
      name: "aam",
      price: 1000,
      image: "http://192.168.29.159:5500/src/Images/manngo.png",
      quantity: 44
    },
    {
      id: 2,
      name: "ba daam",
      image: "https://5.imimg.com/data5/YX/NT/MY-61431345/aam-28mango-29-500x500.png",
      price: 500,
    },
    {
      id: 3,
      name: "shaz aam",
      image: "https://c7.alamy.com/comp/3/78568a50a36949679a7f30e3e0cd76ba/rxhfma.jpg",
      price: 50,
    },
    {
      id: 4,
      name: "kaam",
      image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      price: 10000,
      
    },
  ];

  

  export const ProductCard = ({data:{id = null,name = "noname",price = 0,quantity = 0, image = null}}) =>{
      return(
          <>
          <div className="card" style ={{margin:"auto"}}>
            <img className="card-image" alt="product-img" src={image} ></img>
              <h4 className="card-heading">Name: {name}</h4>
              <p className="card-description">₹ {price}</p>
              {quantity >0 && (<><small>Quantity: {quantity}</small></>)}

          </div>
          </>
      )
  }