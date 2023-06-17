import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import FileModal from "../../../components/FileModal"
import Layout from '../../../components/Layout';
import { useSelector, useDispatch } from "react-redux";
import { fetchFun } from '../../../js/fetchFun';
import RedirectHandler from "../../../components/RedirectHandler";
import { Container, Row, Col, Spacer } from "@nextui-org/react";
import Loader from "../../../components/Loader"
import 'leaflet/dist/leaflet.css'
import dynamic from "next/dynamic"

const MyMap = dynamic(() => import("../../../components/Map"), { ssr:false })

export default function ProjectContent(){

    const router = useRouter()
    const { Uid,ProjectContent } = router.query
    const [data, setData] = useState(<Loader></Loader>)
    const [formButton,setFormButton] = useState()
    const [addFile,setAddFile] = useState()
    const token = useSelector((state) => state.token.value);
    const uid = useSelector((state) => state.uid.value);
    const role = useSelector((state) => state.role.value);


    useEffect(()=>{
        if(!router.isReady) return;
    (async () => {
      

        if (Uid == uid || role == 1) {
          const res = await fetchFun(`/userFolder/${Uid}/${ProjectContent}`, "GET", {}, token);
          if (res === 401) {
            router.push("/Login");
          } else {
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

                    </div>
                  //map view
                  // <FileModal key={item.idFile} idFile={item.idFile} file_name={item.file_name} file_data={item.file_data} file_type={item.file_type} ></FileModal>
                    
                    );

                    setData(data) 
            
                }

            } else{
                router.push(`/userFolder/${uid}`);
    
            }
    })()
    }, [router.isReady]);


    return( 
        <>
        <Layout>
            {formButton}
            {addFile}
        <Container gap={2} style={{ flexDirection: "column" }}>
          <MyMap />
          <br />
          {data}
        </Container>
        </Layout>
        </>
    )
}