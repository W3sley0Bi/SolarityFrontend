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
import NoData from "../../../components/NoData"

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
  const [contentShowed, setConent] = useState();


  // map

  const DynamicMap = dynamic(() => import("../../../components/Map"), {
    ssr: false,
  });

  useEffect(() => {
    if (!router.isReady) return;
  
    (async () => {
      if (role == 2 || role == 3 ) {
        const res = await fetchFun(
          `/userFolder/${Uid}/${Content}`,
          "GET",
          {},
          token
        );
        if (res === 401) {
          router.push("/Login");
        }else{
        const content = res.result.map((item) => {
          return(
          <div key={item.company_product_id} >
        <p>company_product_id: {item.company_product_id}</p>
        <p>field_product_id: {item.field_product_id}</p>
        <p>latitude: {item.lat}</p>
        <p>longitude: {item.lon}</p>
        <p>orientation: {item.orientation}</p>
        <p>project_id: {item.project_id}</p>
        <p>tilt: {item.tilt}</p>
        <p>utc_offset: {item.utc_offset}</p>
        </div>
        )
        })
        setConent(content)
        setShowMap(
          <>
            <DynamicMap products={res["result"]}></DynamicMap>
          </>
        );
        }
      }
         else if (role == 4) {
          const res = await fetchFun(`/userFolder/Company/${Uid}/${Content}`, "GET", {}, token);
          if (res === 401) {
            router.push("/Login");
          } else {
            console.log(res)
            if (res.length > 0) {
              
              const companyContent = res.map((item) => (
                <div key={item.product_id}>
                  <p>id: {item.product_id}</p>
                  <p>name : {item.name}</p>
                  <p>area: {item.area}</p>
                  <p>nominal_temp: {item.nominal_temp}</p>
                  <p>peakpower: {item.peakpower}</p>
                  <p>provider_id: {item.provider_id}</p>
                  <p>system_loss: {item.system_loss}</p>
                  <p>temp_coff: {item.temp_coff}</p>
                </div>
              ));
              setConent(companyContent);
            } else {
              setConent(<NoData></NoData>);
            }
        } 
      } else {
        router.push(`/userFolder/${uid}`);
      }
      
  }
)();
  }, [router.isReady]);

  return (
    <>
      <Layout>
        {formButton}
        {addFile}
        <Container gap={2} style={{ flexDirection: "column" }}>
          <br />
          {showMap}
          <br/>
          {contentShowed}
        </Container>
      </Layout>
    </>
  );
}
