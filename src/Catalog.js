import React, {useState} from 'react';
import dishes from "./dishes.js"
import Rating from "./Rating";
import Forum from "./Forum";

const Catalog = () => {
    const [catalog,setCatalog] = useState(dishes)
    return (
       <div className="container">
           <div className="row">
               {
                   catalog.map((el) =>
                       <div className="col-4" key={el.id}>
                           <div className="box">
                               <img src={el.img} width={300}/>
                               <h2 className="title">{el.title}</h2>
                               <h2 className="title__price">Price:{el.price}</h2>
                               <p className="info">Desc:{el.desc}</p>
                               <Rating rating={el.rating} />

                           </div>

                       </div>
                   )
               }
           </div> <Forum />
       </div>
    )
}
export default Catalog