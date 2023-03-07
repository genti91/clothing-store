import Form from "../components/form";
import Title from "../components/title";

export default function Create({brands, colors, sizes, categories}:any) {
  return (
    <div>
        <Title title="Add Product"/>
      <Form brands={brands} colors={colors} sizes={sizes} categories={categories}/>
    </div>
  )
}

export async function getServerSideProps() {
    const res = await fetch(`http://localhost:3000/api/brands`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const brands = await res.json();

    const categoryRes = await fetch(`http://localhost:3000/api/categories`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const categories = await categoryRes.json();

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
            brands,
            categories,
            colors,
            sizes
        }
    }
}
