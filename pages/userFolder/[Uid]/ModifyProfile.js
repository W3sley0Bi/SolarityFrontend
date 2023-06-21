import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Input } from "@nextui-org/react";
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



export default function ModifyProfile() {
  const router = useRouter();
  const { Uid } = router.query;
  const [folders, setFolders] = useState(<Loader></Loader>);
  const token = useSelector((state) => state.token.value);
  const uid = useSelector((state) => state.uid.value);
  const role = useSelector((state) => state.role.value);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  

  async function confirmMods(){
    let conf = confirm("Do you wanna confirm this modifications?");
    if(conf == false){
        return
    }
    // if (inputCheckName(username) == "error" &&  inputCheckPassword(username) == "error" || username == "" && password == ""){
    //   alert("For security reason you have to change the username and the password")
    // }else{ 
        const res = await fetchFun(`/updateProfile`, "POST", {uid,username,password,email}, token);
        alert(res.message)
        window.location.reload(true);

    //}
  };


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

                <Input clearable bordered placeholder={item.name} required={true} name='username' type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

                <Input clearable bordered placeholder={item.email} required={true} name='email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <p>access_token: {item.access_token}</p>
                <Input clearable bordered placeholder={"*****"} required={true} name='password' type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                <p>role: {item.role_fk}</p>
                <button onClick={confirmMods}> Confirm Modification </button>

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

        <Container gap={2} style={{ flexDirection: "column" }}>
          <br />
          {folders}
        </Container>
      </Layout>
    </>
  );
}
