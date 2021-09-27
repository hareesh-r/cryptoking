import React from 'react'
import {Button , Typography , Menu , Avatar} from 'antd';
import { MenuOutlined , MoneyCollectOutlined , BulbOutlined , HomeOutlined , FundOutlined } from '@ant-design/icons';
import { Link} from 'react-router-dom';
import icon from '../images/cryptoking.png'

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size="large"/>
                <Typography.Title level={2} className="logo">
                    <Link to="/">
                        CryptoKing
                    </Link>
                </Typography.Title>
                <Menu theme="dark">
                <Menu.Item icon={<HomeOutlined/>}>
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item icon={<FundOutlined/>}>
                        <Link to="/cryptocurrencies">CryptoCurrencies</Link>
                    </Menu.Item>
                    <Menu.Item icon={<MoneyCollectOutlined/>}>
                        <Link to="/exchanges">Exchanges</Link>
                    </Menu.Item>
                    <Menu.Item icon={<BulbOutlined/>}>
                        <Link to="/news">News</Link>
                    </Menu.Item>
                </Menu>
            </div>
        </div>
    )
}

export default Navbar
