import React,{ useState,useEffect }  from "react";
import "./index.css";
import { ShareAltOutlined } from '@ant-design/icons';
import { Skeleton } from 'antd';

const Card = (props) => { 
    const [loading, setLoading] = useState(true);
    const [labelColor,setLabelColor] = useState("card-upper-corner-text-color-free");

    const imgUrl = props.data.img ? props.data.img : "https://res.cloudinary.com/apideck/image/upload/v1672640280/icons/copycraftai.png";
    const title = props.data.name ? props.data.name : "AI";
    const description = props.data.description ? props.data.description : "";
    const tags = props.data.tags ? props.data.tags  : [];
    const fee = props.data.fee ? props.data.fee : "Free";

    useEffect(()=>{
        const image = new Image();
        image.onload = () =>{
          setLoading(false);
        }
        image.src = imgUrl;
    },[imgUrl]);
    

  return (
   
    <div className="card-container">
    <Skeleton avatar paragraph={{ rows: 3 }} active loading={loading}>
    <div className="card-upper-corner"> 
      <span className={`card-upper-corner-text card-upper-corner-text-color-${fee == "Paid" ?  "paid": fee == "option"? "option": "free" }`}>{fee}</span>
     </div>
      <div className="card-body">
        <div className="card-meta">
          <div className="card-meta-avatar">
            <span className="card-avatar card-avatar-circle card-avatar-img-bg">
              <img className="card-avatar-img" src={imgUrl} />
            </span>
          </div>
          <div class="card-meta-detail">
            <div class="card-meta-title">{title}</div>
            <div class="card-meta-description">
             {description}
            </div>
          </div>
        </div>
      </div>
      <div className="card-link">
        <a className="card-link-a" target="_blank" href={props.data.url}>view details <ShareAltOutlined /> </a>
      </div>
      <div className="card-tags">
        {tags.map((item)=>(
              <span className="card-tags-text">{item ? `#${item}`:""}</span>
        ))}
      </div>
      </Skeleton>
    </div>
  );
};

export default Card;
