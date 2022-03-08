import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
// import { HomeOutlined, MoneyCollectedOutlined,BulbOutlined, FundOutlined, MenuOutlined  } from '@ant-design/icons';
import icon from '../image/icon.png';
import { BulbOutlined, FundOutlined, HomeOutlined, MoneyCollectOutlined } from '@ant-design/icons/lib/icons';
function Navbar() {
    return (
        <div className='nav-container'>
            <div className='logo-container'>
                <Avatar src={icon} size='large' />
                <Typography.Title level={2} className='logo'>
                    <Link to="/">
                        CryptoKart
                    </Link>
                </Typography.Title>
                {/* <Button className='menu-control-comtainer'></Button> */}
            </div>
            <Menu theme='dark'>
                <Menu.Item icon={<HomeOutlined />} key="1">
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item icon={<FundOutlined />} key="2">
                    <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                </Menu.Item>
                <Menu.Item icon={<MoneyCollectOutlined />} key="3">
                    <Link to="/exchanges">Exchanges</Link>
                </Menu.Item>
                <Menu.Item icon={<BulbOutlined />} key="4">
                    <Link to="/news">News</Link>
                </Menu.Item>
            </Menu>

        </div>
    )
}

export default Navbar