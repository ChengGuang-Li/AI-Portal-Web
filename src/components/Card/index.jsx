import React,{ useState,useEffect }  from 'react'
import { Avatar, Card, Skeleton,Tag } from 'antd';
import "./index.css"

const Contents = (props) => {
  const { Meta } = Card;
  const [loading, setLoading] = useState(true);
  const imgUrl = props.data.img;
  const title = props.data.name ? props.data.name : "AI";
  const description = props.data.description ? props.data.description : "";
   
    useEffect(()=>{
        const image = new Image();
        image.onload = () =>{
          setLoading(false);
        }
        image.src = imgUrl;
    },[imgUrl]);

  return (
    <Card
    style={{maxWidth: 300, minWidth:300,minHeight:167,maxHeight:167}}
    actions={[<span className='tags-span'>#AIConversationalAgent</span>,<span className='tags-span'>#AIConversationalAgent</span>,<span className='tags-span'>#AIConversationalAgent</span>]}
    hoverable="true"
  >
    <Skeleton loading={loading} avatar active>
      <Meta
        avatar={
          <Avatar src={imgUrl}/>
        }
        title={title}
        description={description}
      >
      </Meta>
    </Skeleton>

  </Card>
  )
}

export default Contents;