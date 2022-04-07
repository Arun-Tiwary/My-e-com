export const products = [
    {
      id: 1,
      name: "aam",
      price: 1000,
    },
    {
      id: 2,
      name: "ba daam",
      price: 500,
    },
    {
      id: 3,
      name: "shaz aam",
      price: 50,
    },
    {
      id: 4,
      name: "kaam",
      price: 10000,
    },
  ];

  

  export const ProductCard = ({data:{id,name,price,quantity}}) =>{
      return(
          <>
          <div className="card" style ={{}}>
              <h4>{name}</h4>
              <small>{price}</small>

          </div>
          </>
      )
  }