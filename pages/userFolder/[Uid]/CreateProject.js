import axios from 'axios';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { Input, Spacer } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import Layout from '../../../components/Layout';
import { useSelector, useDispatch } from "react-redux";
import { fetchFun } from "../../../js/fetchFun";

export default function CreateProject(){

    const router = useRouter()
    const { Uid } = router.query
    const [projectName, setProjectName] = useState("")
    const [projectDuration, setProjectDuration] = useState(30)

    const token = useSelector((state) => state.token.value);
    const uid = useSelector((state) => state.uid.value);
    const role = useSelector((state) => state.role.value);
  
    ///uid
    //token/
    //role
    useEffect(()=>{
        if(!router.isReady) return;

    (async () => {


        if (role == 4) {

            router.push(`/userFolder/${uid}`);
          }
                  
            })()

    
    }, [router.isReady]);

    //sumbit forma data
    const handleSubmit = async () => {

       // don not change this post
        axios.post(`${process.env.NEXT_PUBLIC_NODE_SERVER}/${Uid}/createProject`, {uid,projectName,projectDuration}, {
            headers:{
                Authorization: token,
            }
        })
        .then(res => {
            console.log(res)
            if(res.status == 200){
                alert("Project Created Correctly")
                router.push(`/userFolder/${Uid}`)
            }
        })
        .catch(err => console.log(err))

        

    };

    return(
        
        <>
        <Layout>
        <h1>Create A Project</h1>
            <Input clearable bordered label="Project Name" required={true} name='ProjectName' type="text" value={projectName} onChange={(e) => setProjectName(e.target.value)} />
            <Spacer y={1} />
            <Input bordered label="Duration" required={true} name='duration' type="number" value={projectDuration} onChange={(e) => setProjectDuration(e.target.value)} />
            <Spacer y={1} />
            <Button onClick={handleSubmit}> Send </Button> 
             
        </Layout>
        </>
    )
}
