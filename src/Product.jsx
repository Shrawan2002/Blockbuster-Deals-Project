
import "./Product.css";
import Price from "./Price";

function Product ({title,idx}){
    let oldPrice=["12495","11,900","1599","599"];
    let newPrice=["8,999","9,199","899","278"];
    let description=[
       [ "8,000 Dip","5 programmable buttons"], ["intuitive surface","designed for ipd pro"],
        ["designed for ipd pro", "intuitive surface"],["wireless","intuitive surface"]]

    return(
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
        </div>
    )
}

export default Product;