

function Card({details}){
    return(
        <div className="card" style={{width: "18rem", background:"orange",flexGrow:"1"}}>
  <img className="card-img-top" src={details.picture?.large} alt="Card image cap" style={{height:"250px", marginInline:"auto"}}/>
  <div className="card-body">
    <h5 className="card-title">{details.name?.first}-{details.phone}</h5>
    <p className="card-text">{details.id?.name} <br /> {details.id?.value}</p>
    <a href="#" className="btn btn-primary">{details.login?.username}</a>
  </div>
</div>


    )
};
export default Card;