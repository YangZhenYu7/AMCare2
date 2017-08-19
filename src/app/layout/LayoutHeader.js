/**
 * Created by yangzhenyu on 2017/7/19.
 */
import React, { Component } from 'react';
import LayoutModel from '../model/LayoutModel.js';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;


class LayoutHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectIndex: '0',
        };
    }

    render(){
        let menus = [];
        for (let prop in LayoutModel.HeaderData) {
            if (LayoutModel.HeaderData.hasOwnProperty(prop)) {
                menus.push(<Menu.Item key={prop+''}>{LayoutModel.HeaderData[prop]}</Menu.Item>);
            }
        }

        return( <Header className="header">
            <div className="logo" />
            {/*<div>许昌裴山庙社区服务站</div>*/}
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={[this.state.selectIndex]}
                style={{ lineHeight: '64px' }}
                onClick={this.handleClick.bind(this)}>
                
                {menus}
            </Menu>
        </Header>);
    }

    handleClick(e){
         this.props.onClick(e.key);
    }
}

export default LayoutHeader;