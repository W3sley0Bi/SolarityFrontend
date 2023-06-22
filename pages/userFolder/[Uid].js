import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Input, Button, Pagination } from "@nextui-org/react";
import RedirectHandler from "../../components/RedirectHandler";
import Folder from "../../components/Folder";
import { Container } from "@nextui-org/react";
import { useSelector, useDispatch } from "react-redux";
import { setToken } from "../../stores/store";
import Layout from "../../components/Layout";
import { fetchFun } from "../../js/fetchFun";
import Loader from "../../components/Loader";
import NoData from "../../components/NoData";





export default function UserFolders() {
  const router = useRouter();
  const { Uid } = router.query;
  const [folders, setFolders] = useState(<Loader></Loader>);
  const token = useSelector((state) => state.token.value);
  const uid = useSelector((state) => state.uid.value);
  const role = useSelector((state) => state.role.value);
  const [addFolder, setAddFolder] = useState();
  const [activePage, setActivePage] = useState(1);
  const [activePageText, setActivePageText] = useState(1);

  function handlePageChange(page){
    setActivePage(page)
  }

  useEffect(() => {
    if (!router.isReady) return;

    (async () => {
      //user role
    let disbaleButton
    let redirectButtonText = " + Create Project "
      if ((Uid == uid || role == 1) && role != 4) {
        if(activePage == 1){
        const res = await fetchFun(`/openUserFolder/${Uid}`, "GET", {}, token);
        if (res === 401) {
          router.push("/Login");
        } else {
          if(res.length == 1 && role == 2){
            disbaleButton = true
            redirectButtonText = " Upgrade account for more projects "
          }
          if (res.length > 0) {
            console.log(res)
            const folders = res.map((item) => (
              <Folder
                key={item.idProject}
                id={item.idProject}
                Uid={Uid}
                name={item.name}
              >
                {" "}
              </Folder>
            ));
            setFolders(folders);
            setActivePageText(<h3 style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>Active Projects</h3>)
          } else {
            setFolders(<NoData></NoData>);
          }
        }
        } else if(activePage == 2){
          const res = await fetchFun(`/closedUserFolder/${Uid}`, "GET", {}, token);
        if (res === 401) {
          router.push("/Login");
        } else {
          if(res.length == 1 && role == 2){
            disbaleButton = true
            redirectButtonText = " Upgrade account for more projects "
          }
          if (res.length > 0) {
            console.log(res)
            const folders = res.map((item) => (
              <Folder
                key={item.idProject}
                id={item.idProject}
                Uid={Uid}
                name={item.name}
              >
                {" "}
              </Folder>
            ));
            setFolders(folders);
            setActivePageText(<h3 style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>Closed Projects</h3>)
          } else {
            setFolders(<NoData></NoData>);
          }
        }
        }else if(activePage == 3){
          const res = await fetchFun(`/userFolder/${Uid}`, "GET", {}, token);
        if (res === 401) {
          router.push("/Login");
        } else {
          if(res.length == 1 && role == 2){
            disbaleButton = true
            redirectButtonText = " Upgrade account for more projects "
          }
          if (res.length > 0) {
            console.log(res)
            const folders = res.map((item) => (
              <Folder
                key={item.idProject}
                id={item.idProject}
                Uid={Uid}
                name={item.name}
              >
                {" "}
              </Folder>
            ));
            setFolders(folders);
            setActivePageText(<h3 style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>All Projects</h3>)
          } else {
            setFolders(<NoData></NoData>);
          }
        }
      }
      } else if (role == 4) {
        const res = await fetchFun(`/companyFolder/${Uid}`, "GET", {}, token);
        if (res === 401) {
          router.push("/Login");
        } else {

          if (res.length > 0) {
            
            const folders = res.map((item) => (
              <Folder
                key={item.product_id}
                id={item.product_id}
                Uid={Uid}
                name={item.name}
              >
                {" "}
              </Folder>
            ));
            setFolders(folders);
          } else {
            setFolders(<NoData></NoData>);
          }
        }
      } else {
        router.push(`/userFolder/${uid}`);
      }

      if (role != 4) {
        let addFolderbutton = (
          <RedirectHandler disabled={disbaleButton} route={`${Uid}/CreateProject`}>
            {" "}
            {redirectButtonText} {" "}
          </RedirectHandler>
        );
        setAddFolder(addFolderbutton);
      } else {
        let addFolderbutton = (
          <RedirectHandler route={(!showProjectLimit ? `${Uid}/CreateProduct` : "")}>
            {" "}
            + Create Product{" "}
          </RedirectHandler>
        );
        setAddFolder(addFolderbutton);
      }
    })();
  }, [router.isReady, router,activePage]);

  return (
    <>
      <Layout>
        {/* {coditional rendering here for the button if the he has the role. then chek also the} */}
        {addFolder}
        <br/>
        
        <Container gap={2} style={{ flexDirection: "column" }}>
        <br />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" } }><Pagination total={3} onChange={handlePageChange} initialPage={1} /></div>
        <br />
        <br />
        {activePageText}
          <br />
          {folders}
        </Container>
      </Layout>
    </>
  );
}
