import { Container } from "@mui/material";
import EditTable from "../components/editTable";
import Title from "../components/title";

export default function Edit({products}:any) {
    return (
      <Container>
        <Title title="Edit Product"/>
        <EditTable products={products} />
      </Container>
    )
  }

export async function getServerSideProps() {
    const res = await fetch(`http://localhost:3001/api/product`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const products = await res.json();
    return {
        props: {
            products,
        }
    }
}
