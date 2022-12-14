import "./ProductCard.css";
//   <a><img src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg"  alt="..."></img></a>   */}
function ProductCard(values) {
    // let stars = [];
    // for (let i = 0; i < Number(values.item.rating.rate); i++) {
    //   stars[i] = 1;
    // }
  
   
    return (
      <div className="card">
        
        <img src={values.item.image} alt="..."></img>
        <hr />
        <div className="card-body">
        <h5 className="card-title">{values.item.name}</h5>
          <p className="card-text">&#8377;{values.item.price}</p>
          <p className="card-text">{values.item.details}</p>
         
          <a href="#" className="btn btn-success flex-box">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-bag-plus"
              viewBox="0 0 16 16">
              <path
                fill-rule="evenodd"
                d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
              />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg>
            &nbsp;Cart
          </a>
        </div>
      </div>
    );
  }
  
  export default ProductCard;