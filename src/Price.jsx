export default function Price({oldPrice,newPrice }){
    let oldStyle= {
        textDecorationLine:"line-through",
    };
    let newStyle={
        fontWeight:"bold"
    }
    let style={
        backgroundColor:"#e0c367",
        height:"30px",
        width:"200px",
        borderBottomLeftRadius:"14px",
        borderBottomRightRadius:"14px",
        marginLeft:"10px",
    }
    return(
        <div style={style} >
            <span style={oldStyle}>{oldPrice}</span>
            &nbsp; &nbsp; &nbsp;
            <span style={newStyle}>{newPrice}</span>
        </div>
    )
}