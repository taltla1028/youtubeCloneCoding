import React, { useEffect, useState } from 'react'
import { FaCode } from "react-icons/fa";
import { Card, Avatar, Col, Typography, Row } from 'antd';
import axios from 'axios';
import moment from 'moment';
const { Title } = Typography;
const { Meta } = Card;
function LandingPage() {
    return (
        <div style={{ width: '85%', margin: '3rem auto'}}>
            <Title level ={2}> Recommended </Title>
            <hr/>
            <Row gutter={[32,16]}>
                <Col  lg={6} md={8} xs={24}>
                    {/* <a href={`vide/post/${video_id}`}> */}
                        <div style={{position: `relative` }}>
                            {/* <img style={{width: '100%' }} src={`http//localhost:5000/${video.thumbnail}`} alt="thumbnail" /> */}
                                <div className="duration">
                                    {/* <span>{minutes} : {seconds}</span> */}
                                </div>
                        </div>
                    {/* </a> */}
                    <br />
                    <Meta
                        // avatar={
                        //     <Avatar src={video.writer.image} />
                        // }
                        // title={video.title}
                        description=""
                        />
                        {/* <span>{video.writer.name} </span><br />
                        <span style={{ marginLeft: '3rem'}}>{video.views} views</span>  - <span>{moment(video.createdAt).format("MMM do YY")}</span> */}
                </Col>
            </Row>
        </div>
    )

}
export default LandingPage
