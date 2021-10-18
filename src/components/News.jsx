import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import Loader from './Loader';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../services/cryptoApi';

const { Title, Text } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);
    const [newsCategory, setNewsCategory] = useState('Cryptocurrency')

    const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 8 : 100 });
    const { data } = useGetCryptosQuery(100);

    const demoImage = "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

    if (!cryptoNews?.value) {
        return <Loader />;
    }

    return (
        <Row gutter={[24, 24]}>
            {
                !simplified && (
                    <Col span={24}>
                        <Select
                            showSearch
                            className="select-news"
                            placeholder="Select a Crypto"
                            optionFilterProp="children"
                            onChange={(value) => setNewsCategory(value)}
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            } 
                        >
                            <Option value="Cryptocurrency">Cryptocurrency</Option>
                            {
                                data?.data?.coins.map((coin,index) => (
                                    <Option value={coin.name} key={index}>{coin.name}</Option>
                                ))
                            }
                        </Select>
                    </Col>
                )
            }
            {
                cryptoNews?.value.map((news, index) => (
                    <Col xs={24} sm={24} lg={8} key={index}>
                        <Card
                            className="news-card"
                            hoverable>
                            <a href={news.url} target="_blank" rel="noreferrer">
                                <div className="news-image-container">
                                    <Title className="news-title" level={4}>{news.name}</Title>
                                    <img style={{maxHeight: '100px',maxWidth:'200px'}} src={news?.image?.thumbnail?.contentUrl || demoImage} alt={news.name} />
                                </div>
                                <p>
                                    {news.description > 100 ? news.description.substring(0, 100) + '...' : news.description}
                                </p>
                                <div className="provider-container">
                                    <div>
                                        <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} />
                                        <Text className="provider-name">{news.provider[0]?.name}</Text>
                                    </div>
                                    <Text className="date">{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                                </div>
                            </a>
                        </Card>
                    </Col>
                ))
            }
        </Row>
    )
}

export default News
