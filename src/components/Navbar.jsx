import React, { useState, useEffect } from 'react'
import { Button, Typography, Menu, Avatar } from 'antd';
import { MenuOutlined, MoneyCollectOutlined, BulbOutlined, HomeOutlined, FundOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import icon from '../images/cryptoking.png'

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(null);

    useEffect(() => {
        const handleSize = () => setScreenSize(window.innerWidth);
        window.addEventListener('resize', handleSize);
        handleSize();
        return () => window.removeEventListener('resize', handleSize);
    });
    useEffect(() => {
        if (screenSize < 768) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize]);
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size="large" />
                <Typography.Title level={2} className="logo">
                    <Link to="/">
                        CryptoKing
                    </Link>
                </Typography.Title>     
                <Button className="menu-control-container" onClick={()=>setActiveMenu(!activeMenu)}>
                    <MenuOutlined />    
                </Button>           
            </div>
                {activeMenu && (
                    <Menu theme="dark">
                    <Menu.Item icon={<HomeOutlined />}>
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item icon={<FundOutlined />}>
                        <Link to="/cryptocurrencies">CryptoCurrencies</Link>
                    </Menu.Item>
                    <Menu.Item icon={<MoneyCollectOutlined />}>
                        <Link to="/exchanges">Exchanges</Link>
                    </Menu.Item>
                    <Menu.Item icon={<BulbOutlined />}>
                        <Link to="/news">News</Link>
                    </Menu.Item>
                </Menu>
                )}

        </div>
    )
}

export default Navbar
