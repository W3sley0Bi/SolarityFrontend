import axios from 'axios';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { Input, Spacer } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import Layout from '../../../components/Layout';
import { useSelector, useDispatch } from "react-redux";
import { fetchFun } from "../../../js/fetchFun";

export default function CreateProduct(){

    const router = useRouter()
    const { Uid } = router.query
    const [productName, setproductName] = useState("")
    const [productPeakPower, setproductPeakPower] = useState()
    const [tempCoff, setTempCoff] = useState()
    const [systemLoss, setSystemLoss] = useState(0.14)
    const [width, setWidth] = useState()
    const [high, setHigh] = useState()
    const [nomTemp, setNomTemp] = useState()

    const token = useSelector((state) => state.token.value);
    const uid = useSelector((state) => state.uid.value);
    const role = useSelector((state) => state.role.value);
  
    ///uid
    //token/
    //role
    useEffect(()=>{
        if(!router.isReady) return;

    (async () => {
        if (role == 2 || role == 3) {
            router.push(`/userFolder/${Uid}`);
          }
            })()

    
    }, [router.isReady]);

    //sumbit forma data
    const handleSubmit = async () => {
        const area = width*high
        const obj = {
            uid : uid *1,
            productName,
            productPeakPower: productPeakPower*1 , 
            tempCoff: tempCoff*1,
            systemLoss,
            area,
            nomTemp: tempCoff*1
        }
       // don not change this post
        axios.post(`${process.env.NEXT_PUBLIC_NODE_SERVER}/${Uid}/createProduct`, obj, {
            headers:{
                Authorization: token,
            }
        })
        .then(res => {
            console.log(res)
            if(res.status == 200){
                alert("Product Created Correctly")
                router.push(`/userFolder/${Uid}`)
            }
        })
        .catch(err => console.log(err))

        

    };

    return(
        
        <>
        <Layout>
            
            <Input clearable bordered labelPlaceholder="Pruduct Name" required={true} name='ProductName' type="text" value={productName} onChange={(e) => setproductName(e.target.value)} />
            <Spacer y={1} />
            <Input  bordered labelPlaceholder="Pruduct Peak Power" required={true} name='productPeakPower' type="number" value={productPeakPower} onChange={(e) => setproductPeakPower(e.target.value)} />
            <Spacer y={1} />
            <Input bordered labelPlaceholder="temperature coefficent" required={true} name='tempCoff' type="number" value={tempCoff} onChange={(e) => setTempCoff(e.target.value)} />
            <Spacer y={1} />
            <Input  bordered labelPlaceholder="system loss" min={0} max={1} step={0.01} required={true} name='systemLoss' type="number" value={systemLoss} onChange={(e) => setSystemLoss(e.target.value)} />
            <Spacer y={1} />

            <Input  bordered labelPlaceholder="width" min={0} required={true} name='width' type="number" value={width} onChange={(e) => setWidth(e.target.value)} />
            <Input  bordered labelPlaceholder="high" min={0} required={true} name='high' type="number" value={high} onChange={(e) => setHigh(e.target.value)} />
            <Spacer y={1} />
            <Input  bordered labelPlaceholder="nominal temperature" required={true} name='nomTemp' type="number" value={nomTemp} onChange={(e) => setNomTemp(e.target.value)} />
        
            <Spacer y={1} />
            <Button onClick={handleSubmit}> Send </Button>   
        </Layout>
        </>
    )
}
