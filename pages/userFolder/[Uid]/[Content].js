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


  async function editContent(obj,value){
    const data = prompt(value)
    
    if (data) {
      if(!obj.name){
        obj.data = data*1
      }else{
        obj.data = data
      }
      obj.product_id = Content
      
      const res = await fetchFun("/modifyCompanyData", "POST", obj, token);
      alert(res.message)
      window.location.reload(false)
    }

  }

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
                  <p>id: {item.product_id}   </p>
                  <br/>
                  <p>name : {item.name} - <button onClick={()=> editContent({name: item.name}, 'edit')}>modify</button>  </p>
                  <br/>
                  <p>area: {item.area} - <button onClick={()=> editContent({area: item.area}, 'edit')}>modify</button>  </p>
                  <br/>
                  <p>nominal_temp: {item.nominal_temp} - <button onClick={()=> editContent({nominal_temp: item.nominal_temp}, 'edit')}>modify</button>  </p>
                  <br/>
                  <p>peakpower: {item.peakpower} - <button onClick={()=> editContent({peakpower:item.peakpower}, 'edit')}>modify</button>  </p>
                  <br/>
                  <p>system_loss: {item.system_loss} - <button onClick={()=> editContent({system_loss: item.system_loss}, 'edit')}>modify</button>  </p>
                  <br/>
                  <p>temp_coff: {item.temp_coff} - <button onClick={()=> editContent({temp_coff :item.temp_coff}, 'edit')}>modify</button>  </p>
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
