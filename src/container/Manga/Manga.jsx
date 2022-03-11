import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import CardDefault from "../../components/Card/Card";
import { motion } from "framer-motion";
import Spinner from "../../Spinner";
import "./Manga.scss";
import Header from "../../components/Header/Header";
const Manga = () => {
  const [page, setPage] = React.useState(1);
  const [dataManga, setDataManga] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [totalPage, setTotalPage] = React.useState(0)
  const [para,setPara]= React.useState("");
  const [query, setQuery] = React.useState("");
  const [para1,setPara1]= React.useState("");
  const [query1, setQuery1] = React.useState("");
  const [para2,setPara2]= React.useState("");
  const [query2, setQuery2] = React.useState("");
  const [query3, setQuery3] = React.useState("");
  const parameter = async(query,para) => {
    setPara(para);
    setQuery(query);
    setLoading(true)
    const url = `https://api.jikan.moe/v4/manga?${query}=${para}&${query1}=${para1}&${query2}=${para2}&${query3}`;
    console.log(url)
    let data = await fetch(url);
    let parsedData1 = await data.json();
    setTotalPage(parsedData1.pagination.last_visible_page);
    console.log(parsedData1.pagination.last_visible_page);
    setDataManga(parsedData1.data);
    console.log(parsedData1.data);
    setLoading(false);
  }
  const parameter1 = async(query1,para1) => {
    setPara1(para1);
    setQuery1(query1);
    setLoading(true)
    const url = `https://api.jikan.moe/v4/manga?${query}=${para}&${query1}=${para1}&${query2}=${para2}&${query3}`;
    console.log(url)
    let data = await fetch(url);
    let parsedData1 = await data.json();
    setTotalPage(parsedData1.pagination.last_visible_page);
    console.log(parsedData1.pagination.last_visible_page);
    setDataManga(parsedData1.data);
    console.log(parsedData1.data);
    setLoading(false);
  }
  const parameter2 = async(query2,para2) => {
    setPara2(para2);
    setQuery2(query2);
    setLoading(true)
    const url = `https://api.jikan.moe/v4/manga?${query}=${para}&${query1}=${para1}&${query2}=${para2}&${query3}`;
    console.log(url)
    let data = await fetch(url);
    let parsedData1 = await data.json();
    setTotalPage(parsedData1.pagination.last_visible_page);
    setDataManga(parsedData1.data);
    console.log(parsedData1.data);
    setLoading(false);
  }
  const parameter3 = async(query3) => {

    setQuery3(query3);
    setLoading(true)
    const url = `https://api.jikan.moe/v4/manga?${query}=${para}&${query1}=${para1}&${query2}=${para2}&${query3}`;
    console.log(url)
    let data = await fetch(url);
    let parsedData1 = await data.json();
    setTotalPage(parsedData1.pagination.last_visible_page);
    setDataManga(parsedData1.data);
    console.log(parsedData1.data);
    setLoading(false);
  }
 
  const fetchNextData = async () => {
   
    setLoading(true);
    
    const url = `https://api.jikan.moe/v4/manga?page=${page+1}&${query}=${para}&${query1}=${para1}&${query2}=${para2}&${query3}`;
    setPage(page+1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setDataManga(parsedData.data);
    setLoading(false)
    console.log(page);

  };
  const fetchPrevData = async () => {
    setLoading(true);
    
    const url = `https://api.jikan.moe/v4/manga?page=${page-1}&${query}=${para}&${query1}=${para1}&${query2}=${para2}&${query3}`;
    setPage(page-1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setDataManga(parsedData.data);
    setLoading(false);
    console.log(page);
 
  };
  const updateManga = async () => {
    console.log(page)
    const url = `https://api.jikan.moe/v4/manga?page=${page}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setTotalPage(parsedData.pagination.last_visible_page);

    setDataManga(parsedData.data);
    console.log(parsedData.data);
    setLoading(false);
  };
  React.useEffect(() => {
    setLoading(true);
    console.log("hello i am useEffect");
    updateManga();
  }, []);

  return (
    <>
      <React.Fragment>
      <Header content="manga" parameter={parameter} parameter1={parameter1} parameter2={parameter2} parameter3={parameter3}/>
        <CssBaseline />
        <Container>
          {loading && <Spinner />}
          {dataManga.length!==0?
          <div>
            <motion.div animate={{ x: [0, 100, 0] }}>
              <div className="row">
                {dataManga.map((element) => (
                  <div className="col-4">
                    <CardDefault
                      title={
                        element.title_english == null
                          ? element.title_japanese
                          : element.title_english
                      }
                      img={element.images.jpg.image_url}
                      type={element.type}
                      about={element.synopsis}
                      status={element.status}
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
                        disabled={page>=totalPage?true:false}
                        className="btn btn-outline-light btn-lg"
                      >
                        Next &rarr;
                      </button>
              
                 
                  </div>
                }
              </div>
            </motion.div>
          </div>
          :<div>
           
            {
              !loading?
              <h1 style={{color:"white"}}> No Data Found </h1>
              :null
            }
           
          </div>}
        </Container>
      </React.Fragment>
    </>
  );
};
export default Manga;
