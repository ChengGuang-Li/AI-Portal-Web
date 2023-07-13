import React,{useState} from 'react'
import { Col, Row} from 'antd';
import Card from '../CardNew';

const Contents = (props) => {
  const cols= [];
  const size = props.data ? props.data.length : 0;
  for(let i = 0; i < size; i++){
    cols.push(
        <Col key={i.toString()}> 
          <Card data={props.data[i]}/>
        </Col>
    )
  }
  return (
    <Row gutter={[16,16]}>{cols}</Row>
  )
}

export default Contents;