import "./HeroStyle.css";

function Hero(props)
{
 return(
    <>
   <div className={props.cName}>
    <img src={props.heroimg}
    alt="Heroimg" />

    <div className="hero-text">
      <h1>{props.title}</h1>
      <p>{props.text}</p>
     <div id="btn"> <a href={props.url} className={props.btnClass}>
         {props.buttonText} </a>  
    </div>
    </div>
   </div>
    </>
 );
}
export default Hero;