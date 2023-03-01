import Form from "../../components/form";

export default function Edit({brands, colors, sizes, product}:any) {
    console.log(product)
    return (
      <div>
        <Form brands={brands} colors={colors} sizes={sizes} edit={product}/>
      </div>
    )
}

export async function getServerSideProps(context:any) {
  const { id } = context.query
    const productRes = await fetch(`http://localhost:3000/api/product/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const product = await productRes.json();
    const brandRes = await fetch(`http://localhost:3000/api/brands`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const brands = await brandRes.json();
    const colorRes = await fetch(`http://localhost:3000/api/colors`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const colors = await colorRes.json();
    const siezesRes = await fetch(`http://localhost:3000/api/sizes`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const sizes = await siezesRes.json();
    return {
        props: {
            product,
            brands,
            colors,
            sizes
        }
    }
}
