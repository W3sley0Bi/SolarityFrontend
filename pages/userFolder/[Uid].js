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
  const [disbaleButton, setDisbaleButton] = useState(1);
  const [redirectButtonText, setRedirectButtonText] = useState(1);

  function handlePageChange(page) {
    setActivePage(page);
  }

  async function calculationNeeded(id,duration){
    let forcedCalc = true
    const res = await fetchFun("/startCalculations", "POST", { id, duration, forcedCalc}, token);
    console.log(res);
    location.reload();
  }

  useEffect(() => {
    if (!router.isReady) return;

    (async () => {
      //user role
      if ((Uid == uid || role == 1) && role != 4) {
        if (activePage == 1) {
          const res = await fetchFun(
            `/openUserFolder/${Uid}`,
            "GET",
            {},
            token
          );
          if (res === 401) {
            router.push("/Login");
          } else {
            if (res.length >= 1 && role == 2) {
              setDisbaleButton(true);
              setRedirectButtonText("Upgrade account for more projects");
            }
            if (res.length > 0) {
              console.log(res);
              const folders = res.map((item) => {
                let date = item.start_date;
                let duration = item.duration;

                let today = new Date(); // Current date
              
                let startdate = new Date(date)

            
                const differenceMs = today - startdate;
                const oneDayMs = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
            
                const daysDifference = Math.floor(differenceMs / oneDayMs);
                console.log(daysDifference)

                // duration passed

                if(daysDifference >= duration){
                  calculationNeeded(item.idProject, duration)
                }

                return (
                  <Folder
                    closeProjectButtonText={"Close Project"}
                    key={item.idProject}
                    id={item.idProject}
                    Uid={Uid}
                    name={item.name}
                    duration={item.duration}
                    status={item.status}
                  >
                    {" "}
                  </Folder>
                );
              });

              setFolders(folders);
            } else {
              setFolders(<NoData></NoData>);
            }
            setActivePageText(
              <h3
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Active Projects
              </h3>
            );
          }
        } else if (activePage == 2) {
          const res = await fetchFun(
            `/inProgressUserFolder/${Uid}`,
            "GET",
            {},
            token
          );
          if (res === 401) {
            router.push("/Login");
          } else {
            if (res.length > 0) {
              console.log(res);
              const folders = res.map((item) => (
                <Folder
                  key={item.idProject}
                  id={item.idProject}
                  Uid={Uid}
                  name={item.name}
                  status={item.status}
                >
                  {" "}
                </Folder>
              ));
              setFolders(folders);
            } else {
              setFolders(<NoData></NoData>);
            }
            setActivePageText(
              <h3
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Calculations in Progress Projects
              </h3>
            );
          }
        } else if (activePage == 3) {
          const res = await fetchFun(
            `/closedUserFolder/${Uid}`,
            "GET",
            {},
            token
          );
          if (res === 401) {
            router.push("/Login");
          } else {
            if (res.length > 0) {
              console.log(res);
              const folders = res.map((item) => (
                <Folder
                  key={item.idProject}
                  id={item.idProject}
                  Uid={Uid}
                  name={item.name}
                  status={item.status}
                >
                  {" "}
                </Folder>
              ));
              setFolders(folders);
            } else {
              setFolders(<NoData></NoData>);
            }
            setActivePageText(
              <h3
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Closed Projects
              </h3>
            );
          }
        } else if (activePage == 4) {
          const res = await fetchFun(`/userFolder/${Uid}`, "GET", {}, token);
          if (res === 401) {
            router.push("/Login");
          } else {
            if (res.length > 0) {
              console.log(res);

              let folders = res.map((item) => {
                let duration = item.duration;
                console.log(item.duration);
                console.log(item.status);

                return (
                  <Folder
                    key={item.idProject}
                    id={item.idProject}
                    Uid={Uid}
                    name={item.name}
                    duration={duration}
                    status={item.status}
                  ></Folder>
                );
              });

              setFolders(folders);
            } else {
              setFolders(<NoData></NoData>);
            }
            setActivePageText(
              <h3
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                All Projects
              </h3>
            );
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
          <RedirectHandler
            disabled={disbaleButton}
            route={`${Uid}/CreateProject`}
          >
            {" "}
            {redirectButtonText}{" "}
          </RedirectHandler>
        );
        setAddFolder(addFolderbutton);
      } else {
        let addFolderbutton = (
          <RedirectHandler
            route={!showProjectLimit ? `${Uid}/CreateProduct` : ""}
          >
            {" "}
            + Create Product{" "}
          </RedirectHandler>
        );
        setAddFolder(addFolderbutton);
      }
    })();
  }, [router.isReady, router, activePage, disbaleButton, redirectButtonText]);

  return (
    <>
      <Layout>
        {/* {coditional rendering here for the button if the he has the role. then chek also the} */}
        {addFolder}
        <br />

        <Container gap={2} style={{ flexDirection: "column" }}>
          <br />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Pagination total={4} onChange={handlePageChange} initialPage={1} />
          </div>
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
