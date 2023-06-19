import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import FileModal from "../../../components/FileModal"
import Layout from '../../../components/Layout';
import { useSelector, useDispatch } from "react-redux";
import { fetchFun } from '../../../js/fetchFun';
import RedirectHandler from "../../../components/RedirectHandler";
import { Container, Row, Col, Spacer } from "@nextui-org/react";
import Loader from "../../../components/Loader"
//import Map from "../../../components/Map"
import 'leaflet/dist/leaflet.css'

export default function Content(){

    const router = useRouter()
    const { Uid,Content } = router.query
    const [data, setData] = useState(<Loader></Loader>)

    const token = useSelector((state) => state.token.value);
    const uid = useSelector((state) => state.uid.value);
    const role = useSelector((state) => state.role.value);

    async function removeElement(project_id, field_product_id){
      const res = await fetchFun(`/deleteProjectContentElement`, "POST", {project_id,field_product_id}, token);
      if (res.status == 200){
        alert(res.message)
      }
      console.log(res)
      window.location.reload(false)
 
  }

    useEffect(()=>{
        if(!router.isReady) return;
    (async () => {
      

        if (Uid == uid || role == 1) {
          const res = await fetchFun(`/userFolder/${Uid}/${Content}`, "GET", {}, token);
          if (res === 401) {
            router.push("/Login");
          } else if(role == 2 || role == 3){
                console.log(res)
                const data = res.result.map(item => 
                    <div>
                    field_product_id: {item.field_product_id}
                    <br/>
                    project_id: {item.project_id}
                    <br/>
                    lon:{item.lon}
                    <br/>
                    lat: {item.lat}
                    <br/>
                    utc_offset: {item.utc_offset}
                    <br/>
                    tilt: {item.tilt}
                    <br/>
                    orientation: {item.orientation}
                    <br/>
                    company_product_id: {item.company_product_id}
                    <br/>
                    <br/>
                    <br/>
                    <button onClick={() => {removeElement(item.project_id,item.field_product_id)}}>Delete Element</button>
                     </div>
                  //map view
                  // <FileModal key={item.idFile} idFile={item.idFile} file_name={item.file_name} file_data={item.file_data} file_type={item.file_type} ></FileModal>
                    
                    );

                    setData(data) 
            
                }else{
                  //retrive company data here
                }

            } else{
                router.push(`/userFolder/${uid}`);
    
            }
    })()
    }, [router.isReady]);


    return( 
        <>
        <Layout>
        <Container gap={2} style={{ flexDirection: "column" }}>
          <br />
          {data}
        </Container>
        </Layout>
        </>
    )
}