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
  const [companyProducts, setCompanyProducts] = useState([]);

  // map

  const DynamicMap = dynamic(() => import("../../../components/Map"), {
    ssr: false,
  });

  useEffect(() => {
    if (!router.isReady) return;

    (async () => {
      const res = await fetchFun(`/getAllProducts`, "GET", {}, token);
      console.log(res);
      setCompanyProducts(res);
    })();

    (async () => {
      if (Uid == uid || role == 1) {
        const res = await fetchFun(
          `/userFolder/${Uid}/${Content}`,
          "GET",
          {},
          token
        );
        if (res === 401) {
          router.push("/Login");
        } else {
          console.log(res);
          const data = res.result.map(
            (item) => (
              <div>
                field_product_id: {item.field_product_id}
                <br />
                project_id: {item.project_id}
                <br />
                lon:{item.lon}
                <br />
                lat: {item.lat}
                <br />
                utc_offset: {item.utc_offset}
                <br />
                tilt: {item.tilt}
                <br />
                orientation: {item.orientation}
                <br />
                company_product_id: {item.company_product_id}
                <br />
                <br />
                <br />
              </div>
            )
            //map view
            // <FileModal key={item.idFile} idFile={item.idFile} file_name={item.file_name} file_data={item.file_data} file_type={item.file_type} ></FileModal>
          );

          setData(data);
          /*setShowMap(
            <>
              <DynamicMap
                products={res["result"]}
                companyProducts={companyProducts}
              ></DynamicMap>
            </>
          );*/
        }
      } else {
        router.push(`/userFolder/${uid}`);
      }
    })();
  }, [router.isReady]);

  return (
    <>
      <Layout>
        {formButton}
        {addFile}
        <Container gap={2} style={{ flexDirection: "column" }}>
          <br />
          {//showMap}
          }

          {data}
        </Container>
      </Layout>
    </>
  );
}
