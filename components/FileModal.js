import { Modal, useModal } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState, useMemo } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import {
  Button,
  Grid,
  Card,
  Text,
  Row,
  Spacer,
  Link,
  Container,
  Input,
} from "@nextui-org/react";
import Layout from "./Layout";
import { useSelector, useDispatch } from "react-redux";
import { fetchFun } from "../js/fetchFun";
import Loader from "./Loader";
import NoData from "./NoData";

export default function FileModal(prop) {
   return (
    <>
    </>
   )
}
