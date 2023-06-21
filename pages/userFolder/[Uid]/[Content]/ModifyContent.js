import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'
import FileModal from "../../../../components/FileModal"
import Layout from '../../../../components/Layout';
import { useSelector, useDispatch } from "react-redux";
import { fetchFun } from '../../../../js/fetchFun';
import RedirectHandler from "../../../../components/RedirectHandler";
import { Container, Input, Row, Col, Spacer, Button } from "@nextui-org/react";
import Loader from "../../../../components/Loader"

import 'leaflet/dist/leaflet.css'

export default function ModifyContent(){

    const router = useRouter()
    const { Uid,Content } = router.query
    const [data, setData] = useState(<Loader></Loader>)
    const token = useSelector((state) => state.token.value);
    const uid = useSelector((state) => state.uid.value);
    const role = useSelector((state) => state.role.value);
    const [projectName, setProjectName] = useState("")
    const [projectDuration, setProjectDuration] = useState(30)
    const [idProject, setIdProject] = useState(30)


    async function removeElement(project_id, field_product_id){
        const res = await fetchFun(`/deleteProjectContentElement`, "POST", {project_id,field_product_id}, token);
        console.log(res)
    }

    const handleSubmit = async () => {

        // don not change this post
         axios.post(`${process.env.NEXT_PUBLIC_NODE_SERVER}/${Uid}/updateProject`, {idProject,projectName,projectDuration}, {
             headers:{
                 Authorization: token,
             }
         })
         .then(res => {
             console.log(res)
             if(res.status == 200){
                 alert("Project Updated Correctly")
                 router.push(`/userFolder/${Uid}`)
             }
         })
         .catch(err => console.log(err))
 
         
 
     };



    useEffect(()=>{
        if(!router.isReady) return;
    (async () => {
    
        if (Uid == uid || role == 1) {
            const res1 = await fetchFun(`/userFolder/update/${Uid}/${Content}`, "GET", {}, token);
            console.log(res1)
            setIdProject(res1.idProject)
            setProjectDuration(res1.duration)
            setProjectName(res1.name)

          const res = await fetchFun(`/userFolder/${Uid}/${Content}`, "GET", {}, token);
    
          if (res === 401) {
            router.push("/Login");
          } else {
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
                    <button onClick={() => removeElement(item.project_id,item.field_product_id)}>Delete Element</button>
                    </div>
                
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
        <Input clearable bordered labelPlaceholder="Project Name" required={true} name='ProjectName' type="text" value={projectName} onChange={(e) => setProjectName(e.target.value)} />
            <Spacer y={1} />
            <Input bordered labelPlaceholder="Duration" required={true} name='duration' type="number" value={projectDuration} onChange={(e) => setProjectDuration(e.target.value)} />
            <Spacer y={1} />
            <Button onClick={handleSubmit}> Send </Button>  
        <Container gap={2} style={{ flexDirection: "column" }}>
          <br />
          
          {data}
        </Container>
        </Layout>
        </>
    )
}