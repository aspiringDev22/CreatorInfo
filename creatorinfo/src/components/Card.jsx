import React from "react";
import { AiFillHeart, AiOutlineLink } from "react-icons/ai";

const Card = ({ card }) => {
  //   const { id, name, image } = items[1];
  return (
    <>
      {card.map((cardd) => {
        return (
          <div className="card" key={cardd.id}>
            <div className="card-left">
              <img src={cardd.img} alt="sdsd" />
            </div>
            <div className="card-right">
              <div className="name_sex">
                <h2 className="name">{cardd.name}</h2>
                <div className="inline">
                  <p className="social_media_handle">
                    {cardd.social_media_handle}
                  </p>
                  <p className="sex">{cardd.sex}</p>
                </div>
              </div>
              <div className="socials">
                {/* <p className="social_media_name">Gaurav Chaodary</p> */}
              </div>
              <div className="likess">
                <p className="followers">{cardd.followers_count}</p>
                <p className="likess">
                  <AiFillHeart color="red" /> {cardd.likes}
                </p>
                <p className="post_engagement_rate">
                  <AiOutlineLink color="blue" /> {cardd.post_engagement_rate}
                </p>
              </div>
            </div>
            <div className="end">
              <p className="category">{cardd.category}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
