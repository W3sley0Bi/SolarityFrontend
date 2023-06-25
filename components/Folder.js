import { Link, Container, Row, Spacer, Button } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFun } from "../js/fetchFun";

export default function Folder(prop) {
  const router = useRouter();
  const uid = useSelector((state) => state.uid.value);
  const role = useSelector((state) => state.role.value);
  const token = useSelector((state) => state.token.value);
  const [deleteButton, setDeleteButton] = useState();
  const [editButton, setEditButton] = useState();

  async function deleteProject(id) {
    let conf = confirm("Are you sure you wanna delete the project?");
    if (!conf) return;
    const res = await fetchFun("/deleteProject", "POST", { id }, token);
    //console.log(res)
    location.reload();
  }

  async function deleteProduct(id) {
    let conf = confirm("Are you sure you wanna delete this product?");
    if (!conf) return;
    const res = await fetchFun("/deleteProduct", "POST", { id }, token);
    //console.log(res)
    location.reload();
  }

  async function startClosingProcess(id) {
    let conf = confirm("Are you sure you wanna close this project? this product?");
    if (!conf) return;
    const res = await fetchFun("/startCalculations", "POST", { id }, token)
    console.log(res)
    //console.log(res)
    location.reload();
  }





  useMemo(() => {
    /* to do 
      - check if the prop.status is 0
      */
    if ((role == 1 || prop.Uid == uid) && role != 4) {
      setDeleteButton(
        <>
          {" "}
          <Spacer y={0.5} />
          <img
            onClick={() => deleteProject(prop.id)}
            src="https://cdn-icons-png.flaticon.com/512/1828/1828851.png"
            width="50px"
            height="50px"
            alt="delete"
          />
        </>
      );
      setEditButton(
        <>
          {" "}
          <Spacer y={0.5} />
          <img
            onClick={() =>
              router.push(`/userFolder/${prop.Uid}/${prop.id}/ModifyContent`)
            }
            src="https://cdn-icons-png.flaticon.com/128/420/420140.png"
            width="50px"
            height="50px"
            alt="delete"
            style={{ marginRight: "10px" }}
          />
        </>
      );
    } else {
      setDeleteButton(
        <>
          {" "}
          <Spacer y={0.5} />
          <img
            onClick={() => deleteProduct(prop.id)}
            src="https://cdn-icons-png.flaticon.com/512/1828/1828851.png"
            width="50px"
            height="50px"
            alt="delete"
          />
        </>
      );
    }
  }, []);

  return (
    <>
      <Row>
        {editButton}
        <Container
          key={prop.id}
          style={{
            backgroundColor: "#1F2122",
            borderRadius: "15px",
            marginBottom: "10px",
          }}
        >
          <Link
            onClick={() => router.push(`/userFolder/${prop.Uid}/${prop.id}`)}
          >
            {role == 4 ? (
              <img
                src="https://cdn-icons-png.flaticon.com/128/3463/3463399.png"
                style={{ width: "35%", marginRight: "10%", padding: "10px" }}
              />
            ) : (
              <img
                src="https://cdn-icons-png.flaticon.com/512/716/716784.png"
                style={{ width: "15%", marginRight: "10%" }}
              />
            )}

            <div style={{ flexDirection: "column" }}>
              <p style={{ color: "white" }}>ID: {prop.id}</p>
              <p style={{ color: "white" }}>Name: {prop.name}</p>
            </div>
          </Link>
  
          <Button disabled={prop.disabled} onClick={()=> startClosingProcess(prop.id)} style={{ float: "right", marginTop:"3%" }} > {prop.closeProjectButtonText} </Button>
        </Container>
        {deleteButton}
      </Row>
    </>
  );
}
