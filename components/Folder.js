
import {
    Link,
    Container,
    Row,
    Spacer
  } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFun } from "../js/fetchFun";

export default function Folder(prop){
    const router = useRouter()
    const uid = useSelector((state) => state.uid.value);
    const role = useSelector((state) => state.role.value);
    const token = useSelector((state) => state.token.value);
    const [deleteButton, setDeleteButton] = useState();
  

    async function deleteProject(idProject) {
      let conf = confirm("Are you sure you wanna delete the project?");
      if(!conf) return
       const res = await fetchFun("/deleteProject", "POST", {idProject}, token);
       //console.log(res)
       location.reload()
   }
   

    useMemo(() => {
      /* to do 
      - check if the prop.status is 0
      */
      if (role == 1 || prop.Uid == uid) {
        setDeleteButton(
          <>        <Spacer y={.5}/>
          <img onClick={() => deleteProject(prop.idProject)}
            src="https://cdn-icons-png.flaticon.com/512/1828/1828851.png"
            width="50px"
            height="50px"
            alt="delete"
          />
          </>
        );
      }
    },[])

    return(
<>
<Row>
    <Container
              key={prop.idProject}
              style={{
                backgroundColor: "#1F2122",
                borderRadius: "15px",
                marginBottom: "10px",
              }}
            >
              <Link onClick={() => router.push(`/userFolder/${prop.Uid}/${prop.idProject}`)}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/716/716784.png "
                  style={{ width: "15%", marginRight: "10%" }}
                />
                <div style={{ flexDirection: "column" }}>
                  <p style={{ color: "white" }}>ID: {prop.idProject}</p>
                  <p style={{ color: "white" }}>Name: {prop.name}</p>
                </div>
              </Link>
            </Container>
            {deleteButton}
            </Row>
            </>
            )
}