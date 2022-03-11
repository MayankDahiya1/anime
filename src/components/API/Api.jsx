import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import CardDefault from "../../components/Card/Card";
import { motion } from "framer-motion";
import data1 from "../../FakeApi.json";
import Spinner from "../../Spinner";
import "./Api.scss";
const Api = (props) => {
  const [page, setPage] = React.useState(1);
  const [dataAnime, setDataAnime] = React.useState(data1.data);
  const [loading, setLoading] = React.useState(false);

  const fetchNextData = async () => {
   
    setLoading(true);
    
    const url = `https://api.jikan.moe/v4/top/anime?page=${page+1}&${props.query}=${props.para}`;
    setPage(page+1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setDataAnime(parsedData.data);
    setLoading(false)
    console.log(page);

  };
  const fetchPrevData = async () => {
    setLoading(true);
    
    const url = `https://api.jikan.moe/v4/top/anime?page=${page-1}&${props.query}=${props.para}`;
    setPage(page-1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setDataAnime(parsedData.data);
    setLoading(false);
    console.log(page);
 
  };
  const updateAnime = async () => {
    console.log(page)
    const url = `https://api.jikan.moe/v4/top/anime?page=${page}&${props.query}=${props.para}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setDataAnime(parsedData.data);
    console.log(parsedData.data);
    setLoading(false);
  };
  React.useEffect(() => {
    setLoading(true);
    console.log("hello i am useEffect");
    updateAnime();
  }, []);

  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <Container>
          {loading && <Spinner />}
          <div>
            <motion.div animate={{ x: [0, 100, 0] }}>
              <div className="row">
                {dataAnime.map((element) => (
                  <div className="col-4">
                    <CardDefault
                      title={
                        element.title_english == null
                          ? element.title_japanese
                          : element.title_english
                      }
                      img={element.images.jpg.image_url}
                    />
                  </div>
                ))}
                {loading &&  <Spinner />}
                {!loading &&
                  <div className="d-flex justify-content-between my-4">
                 
                  
                      <button
                        type="button"
                        onClick={fetchPrevData}
                        disabled={page<=1?true:false}
                        className="btn btn-outline-light btn-lg"
                      >
                      &larr; Previous
                      </button>
                 
                 
                      <button
                        type="button"
                        onClick={fetchNextData}
                        className="btn btn-outline-light btn-lg"
                      >
                        Next &rarr;
                      </button>
              
                 
                  </div>
                }
              </div>
            </motion.div>
          </div>
        </Container>
      </React.Fragment>
    </>
  );
};
export default Api;
