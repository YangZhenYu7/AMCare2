/**
 * Created by yangzhenyu on 2017/7/19.
 */
import React, { Component } from 'react';
import LayoutModel from '../model/LayoutModel.js';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

class LayoutSider extends Component {
    state = {
        selectIndex: '0',
    }

    render(){
        let menus = [];
        let items = LayoutModel.SiderData[this.state.selectIndex];
        for (let prop in items) {
            if (items.hasOwnProperty(prop)) {
                menus.push(<Menu.Item key={prop+''}>{items[prop]}</Menu.Item>);
            }
        }

        return(
            <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['0']}
                    style={{ height: '100%', borderRight: 0 }}
                    onClick={this.handleClick.bind(this)}>
                    {menus}
                </Menu>
            </Sider>);
    }

    updateState(selectIndex){
        this.setState({
            selectIndex: selectIndex,
        });
    }

    handleClick(e){
        this.props.onClick(e.key);
    }
}

export default LayoutSider;