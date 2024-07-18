export default function ProductDetails({params, 

}: {
    params:{ productID: string};
}){
    return <h1>Details about product {params.productID}</h1>
}

