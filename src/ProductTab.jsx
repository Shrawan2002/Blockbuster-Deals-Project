import Product from "./Product.jsx";

function ProductTab(){
    let style={
        display:"flex",
        flexWrap:"wrap",
        jistifyContent:"center",
        alignItems:"center",

    }
    return (
        <div style={style}>
        <Product title="Logitech Mx Master" idx={0} />
        <Product title="Apple Pencil (2nd gen)"idx={1} />
        <Product title="Zebronics Zeb-transformer" idx={2} />
        <Product title="Petronics Toad 24"idx={3} />
        </div>

    )


}

export default ProductTab;