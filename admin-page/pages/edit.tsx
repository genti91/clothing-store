import { Container } from "@mui/material";
import EditTable from "../components/editTable";
import Title from "../components/title";

export default function Edit() {
    return (
      <Container>
        <Title title="Edit Product"/>
        <EditTable/>
      </Container>
    )
  }