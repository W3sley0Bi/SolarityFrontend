
import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router'
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import {useTheme, NextUIProvider, Text } from "@nextui-org/react"
import Layout from '../components/Layout';
import { Container, Row, Col, Spacer } from '@nextui-org/react';
import { useSelector, useDispatch } from "react-redux";
import { fetchFun } from "../js/fetchFun";
import {inputCheckName ,inputCheckPass ,inputCheckEmail} from "../js/inputCheckers" 

export default function Registration(){
    const { theme } = useTheme();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [inputStatusUsername, setInputStatusUsername] = useState("");
    const [inputStatusPassword, setInputStatusPassword] = useState("");
    const [inputStatusEmail, setInputStatusEmail] = useState("");
    const token = useSelector((state) => state.token.value);
    const uid = useSelector((state) => state.uid.value);
    const options = [1,2,3,4]
    const [role, setRole] = useState(2);
  const router = useRouter()


  const handleSubmit = async (event) => {
  if (inputCheckName(username) == "error" && inputCheckEmail(email) == 'error' &&  inputCheckPass(username) == "error" || username == "" && password == "" && email == ""){
    alert("Input values not valid")
  }else{ 
    const res = await fetchFun("/registration", "POST", {username,password,email,role}, token);
        alert(`user added correctly`)
        router.push('/')
  };
  };
  return (
    
<>
  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "80vh",}}>
  <Container  gap={3} style={{color: theme.colors.primary.value, margin: 'auto',}}>
  <Col align="center">
  <h1>User Registration</h1>
  <Spacer y={2} />

  <Col align="center">
  <Input
                  className="element"
                  labelPlaceholder="Username"
                  value={username}
                  bordered
                  status={inputStatusUsername}
                  onBlur={async () => setInputStatusUsername(await inputCheckName(username))}
                  onChange={(e) => setUsername(e.target.value)}
                />
  <Spacer y={1.2} />
  </Col>
  <Col align="center">
  <Input
                  className="element"
                  labelPlaceholder="Email"
                  value={email}
                  bordered
                  status={inputStatusEmail}
                  onBlur={async () => setInputStatusEmail(await inputCheckEmail(email))}
                  onChange={(e) => setEmail(e.target.value)}
                />
  <Spacer y={1.2} />
  </Col>
  <Col align="center">
  <Input.Password

                  className="element"
                  labelPlaceholder="Password"
                  value={password}
                  bordered
                  status={inputStatusPassword}
                  onBlur={async () => setInputStatusPassword(await inputCheckPass(password))}
                  onChange={(e) => setPassword(e.target.value)}
                />
  <Spacer y={1.2} />
  </Col>
  <Col align="center">
  <select
  value={role} 
  onChange={e => setRole(e.target.value)}>
        {options.map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </select>

  <Spacer y={1.2} />
    </Col>

  <Spacer y={1.2} />
  
  <Button className="element" onClick={handleSubmit}> Register </Button>

  </Col>
  
  </Container>

  </div>

    </>
  );
};


