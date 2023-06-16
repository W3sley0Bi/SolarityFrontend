import axios from 'axios';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useDropzone } from 'react-dropzone';
import Layout from '../../../components/Layout';
import { useSelector, useDispatch } from "react-redux";
import { fetchFun } from "../../../js/fetchFun";

export default function AddFiles(){

    const router = useRouter()
    const { Uid } = router.query
    const [project, setProject] = useState("")

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

        const formData = new FormData(); // create a new FormData instance
        formData.append("project", project); 

       // don not change this post
        axios.post(`${process.env.NEXT_PUBLIC_NODE_SERVER}/${Uid}/createProject`, formData, {
            headers:{
                Authorization: token,
               
            }
        })
        .then(res=> {
            if(res.status == 200){
                alert("files add correctly")
                router.push(`/userFolder/${Uid}`)
            }
        })
        .catch(err => console.log(err))

        

    };

    return(
        
        <>
        <Layout>
            <Input clearable bordered labelPlaceholder="Project Name" helperText="Required" required={true} name='ProjectName' type="text" value={project} onChange={(e) => setProject(e.target.value)} />
        
            <Button onClick={handleSubmit}> Send </Button>   
        </Layout>
        </>
    )
}
