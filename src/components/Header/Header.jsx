import React from "react";
import "./Header.scss";

const Header = ({parameter,parameter1,parameter2,parameter3,content}) => {

const handleChange = (event) =>{
  console.log("Hello from Header");
parameter(event.target.name,event.target.value);
  
}
const handleChange1 =(event) =>{
  parameter1(event.target.name,event.target.value);
}
const handleChange2 =(event)=>{
  parameter2(event.target.name,event.target.value);
}
const handleChange3 = (event) =>{
  parameter3(event.target.value);
}
  return (
    <>
    { content === "Anime"?

    // Anime Header
      <ul className="nav justify-content-center my-5 header app__navbar ">
        <li>
          <select name="rating" onChange={handleChange}   className="form-select list" aria-label="Default select example">
          <option selected value="">Rating</option>
            <option  value="g">All Ages</option>
            <option  value="pg">Children</option>
            <option  value="pg13">Teens 13 or older</option>
            <option  value="r17">17+ (violence & profanity)</option>
            <option  value="r">Mild Nudity</option>
            <option  value="rx">Hentai</option>
          </select>
        </li>
        <li>
          <select name="type" onChange={handleChange1}  className="form-select list" aria-label="Default select example">
            <option selected value="">Type</option>
            <option  value="tv">Tv</option>
            <option  value="movie">Movie</option>
            <option  value="ova">Ova</option>
            <option  value="special">Special</option>
            <option  value="ona">Ona</option>
            <option  value="music">Music</option>

          </select>
        </li>
        <li>
          <select name="order_by" onChange={handleChange2}  className="form-select list" aria-label="Default select example">
            <option selected value="">Order By</option>
            <option  value="title">Title</option>
            <option  value="type">Type</option>
            <option  value="rating">Rating</option>
            <option  value="rank">Rank</option>
            <option  value="popularity">Popularity</option>
          </select>
        </li>
        <li>
        <select name="sfw" onChange={handleChange3}   className="form-select list" aria-label="Default select example">
           <option selected value="">sfw</option>
           <option  value="sfw">Filter Adult Enteries</option>
          </select>
        </li>
      </ul>
      :
      
      // Manga Header

      <ul className="nav justify-content-center my-5 header app__navbar ">
        <li>
          <select name="status" onChange={handleChange}   className="form-select list" aria-label="Default select example">
          <option selected value="">Status</option>
            <option  value="publishing">Publishing</option>
            <option  value="complete">Complete</option>
            <option  value="hiatus">Hiatus</option>
            <option  value="discontinued">Discontinued</option>
            <option  value="upcoming">Upcoming</option>
            
          </select>
        </li>
        <li>
          <select name="type" onChange={handleChange1}  className="form-select list" aria-label="Default select example">
            <option selected value="">Type</option>
            <option  value="manga">Manga</option>
            <option  value="novel">Novel</option>
            <option  value="lightnovel">Lightnovel</option>
            <option  value="oneshot">Oneshot</option>
            <option  value="doujin">Doujin</option>
            <option  value="Manhwa">manhwa</option>

          </select>
        </li>
        <li>
          <select name="order_by" onChange={handleChange2}  className="form-select list" aria-label="Default select example">
            <option selected value="">Order By</option>
            <option  value="title">Title</option>
            <option  value="chapters">Chapters</option>
            <option  value="volumes">Volumes</option>
            <option  value="rank">Rank</option>
            <option  value="popularity">Popularity</option>
          </select>
        </li>
        <li>
        <select name="sfw" onChange={handleChange3}   className="form-select list" aria-label="Default select example">
           <option selected value="">sfw</option>
           <option  value="sfw">Filter Adult Enteries</option>
          </select>
        </li>
      </ul>
      
    }
    </>
  );
};

export default Header;
