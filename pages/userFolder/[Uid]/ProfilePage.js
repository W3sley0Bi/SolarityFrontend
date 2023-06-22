import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Input, Button } from "@nextui-org/react";
import RedirectHandler from "../../../components/RedirectHandler";
import Folder from "../../../components/Folder";
import {Container, Spacer} from "@nextui-org/react";
import { useSelector, useDispatch } from "react-redux";
import { setToken } from "../../../stores/store";
import Layout from "../../../components/Layout";
import { fetchFun } from "../../../js/fetchFun"
import Loader from "../../../components/Loader"
import NoData from "../../../components/NoData";
import { ActioKeyNav } from "../../../js/ActioKeyNav";
import { setRole } from "../../../stores/store";



export default function ProfilePage() {
  const router = useRouter();
  const { Uid } = router.query;
  const [folders, setFolders] = useState(<Loader></Loader>);
  const token = useSelector((state) => state.token.value);
  const uid = useSelector((state) => state.uid.value);
  const role = useSelector((state) => state.role.value);
  const dispatch = useDispatch();

  async function deleteProfile(){
    let conf = confirm("Are you sure you wanna cancel your profile?");
    if(conf == false){
        return
    }
    const res = await fetchFun(`/deleteProfile`, "POST", {Uid}, token);
    alert(res.message)
    ActioKeyNav("logout")
  }


  async function updateToPremium(){
    let conf = confirm("Do you wanna update to premium");
    if(conf == false){
        return
    }
    const res = await fetchFun(`/updateToPremium`, "POST", {uid}, token);
    alert(res.message)
    await dispatch(setRole(3));
    window.location.reload(false);
  }

  async function editProfile(route,value){
    const data = prompt(value)
    if (data) {
      const res = await fetchFun(route, "POST", {uid,data}, token);
      alert(res.message)
      window.location.reload(false)
    }

  }

  useEffect(() => {
    if (!router.isReady) return;

    (async () => {
      //user role
      
      if (Uid == uid || role == 1) {
        const res = await fetchFun(`/showProfile`, "POST", {Uid}, token);
        if (res === 401) {
          router.push("/Login");
        } else {
            console.log(res)
          if(res.result.length >= 0){
          const data = res.result.map((item) => (
            <div key={Uid} >
                <p>username: {item.name} <button onClick={()=> editProfile('/updateUsername', 'edit your username')}> edit </button> </p>
                <p>access_token: {item.access_token}</p>
                <p>password: {item.password}<button onClick={()=> editProfile('/updatePassword', 'edit your password')}> edit </button></p>
                <p>email: {item.email}<button onClick={()=> editProfile('/updateEmail', 'edit your Email')}> edit </button></p>
                <p>role: {item.role_fk}</p>

                <Button onClick={deleteProfile} >Delete</Button>
                <Spacer gap={1}/>
                
                {role == 2 ? <Button onClick={updateToPremium}> Update </Button> : null}
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
