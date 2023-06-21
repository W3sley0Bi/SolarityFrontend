import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import FileModal from "../../../components/FileModal";
import Layout from "../../../components/Layout";
import { useSelector, useDispatch } from "react-redux";
import { fetchFun } from "../../../js/fetchFun";
import RedirectHandler from "../../../components/RedirectHandler";
import { Container, Row, Col, Spacer } from "@nextui-org/react";
import Loader from "../../../components/Loader";
import dynamic from "next/dynamic";

export default function Content() {
  const router = useRouter();
  const { Uid, Content } = router.query;
  const [data, setData] = useState(<Loader></Loader>);
  const [formButton, setFormButton] = useState();
  const [addFile, setAddFile] = useState();
  const token = useSelector((state) => state.token.value);
  const uid = useSelector((state) => state.uid.value);
  const role = useSelector((state) => state.role.value);
  const [showMap, setShowMap] = useState();


  // map

  const DynamicMap = dynamic(() => import("../../../components/Map"), {
    ssr: false,
  });

  useEffect(() => {
    if (!router.isReady) return;

    (async () => {
      if (Uid == uid || role == 1) {
        const res = await fetchFun(
          `/userFolder/${Uid}/${Content}`,
          "GET",
          {},
          token
        );
        if (res === 401) {
          router.push("/Login");
        } else if (role == 2 || role == 3) {
          setShowMap(
            <>
              <DynamicMap products={res["result"]}></DynamicMap>
            </>
          );
        } else {
          //retrive company data here
        }
      } else {
        router.push(`/userFolder/${uid}`);
      }
    })();
  }, [router.isReady]);

  return (
    <>
      <Layout>
        {formButton}
        {addFile}
        <Container gap={2} style={{ flexDirection: "column" }}>
          <br />
          {showMap}
        </Container>
      </Layout>
    </>
  );
}
