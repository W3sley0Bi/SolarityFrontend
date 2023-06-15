import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Input } from "@nextui-org/react";
import RedirectHandler from "../../../components/RedirectHandler";
import Folder from "../../../components/Folder";
import {Container,} from "@nextui-org/react";
import { useSelector, useDispatch } from "react-redux";
import { setToken } from "../../../stores/store";
import Layout from "../../../components/Layout";
import { fetchFun } from "../../../js/fetchFun"
import Loader from "../../../components/Loader"
import NoData from "../../../components/NoData";
import { ActioKeyNav } from "../../../js/ActioKeyNav";

export default function UserFolders() {
  const router = useRouter();
  const { Uid } = router.query;
  const [folders, setFolders] = useState(<Loader></Loader>);
  const token = useSelector((state) => state.token.value);
  const uid = useSelector((state) => state.uid.value);
  const role = useSelector((state) => state.role.value);

  async function deleteProfile(){
    let conf = confirm("Are you sure you wanna cancel your profile?");
    if(conf == false){
        return
    }
    const res = await fetchFun(`/deleteProfile`, "POST", {Uid}, token);
    alert(res.message)
    ActioKeyNav("logout")
  }

  useEffect(() => {
    if (!router.isReady) return;

    (async () => {
      //user role
      if(role == 1 ){
        let addProjectButton = <RedirectHandler route={`${Uid}/CreateProject`}> + Create Project </RedirectHandler>
        setProject(addProjectButton)
      }

      if (Uid == uid || role == 1) {
        const res = await fetchFun(`/showProfile`, "POST", {Uid}, token);
        if (res === 401) {
          router.push("/Login");
        } else {
            console.log(res)
          if(res.result.length >= 0){
          const data = res.result.map((item) => (
            <div key={Uid} >
                <p>username: {item.name}</p>
                <p>access_token: {item.access_token}</p>
                <p>password: {item.password}</p>
                <p>role: {item.role_fk}</p>
                <button onClick={deleteProfile} >Delete</button>
            </div>
            
          ));
          setFolders(data);
          }else{
            setFolders(<NoData></NoData>);
          }
        }
      } else {
        router.push(`/userFolder/${uid}`);
      }
    })();
  }, [router.isReady,router]);

  return (
    <>
      <Layout>
        {/* {coditional rendering here for the button if the he has the role. then chek also the} */}
        
        <Container gap={2} style={{ flexDirection: "column" }}>
          <br />
          {folders}
        </Container>
      </Layout>
    </>
  );
}
