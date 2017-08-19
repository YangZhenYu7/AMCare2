/**
 * Created by yangzhenyu on 2017/7/19.
 */
/**
 * Created by yangzhenyu on 2017/7/19.
 */
import React, { Component } from 'react';
import LayoutModel from '../model/LayoutModel.js';
import ContentRouter from '../router/ContentRouter.js';
import ClinicInfo from '../page/reservation/ReservateInfoPage';
import AccountInfo from '../page/acount/AccountInfoPage';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

class LayoutContent extends Component {
    state = {
        category: '0',
        type:'0'
    }

    render(){
        const Page = this.getContentPage();
        let content = Page ? <Page/>:null;

        return(
            <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '12px 0' }}>
                    {this.getBreadcrumbs()}
                </Breadcrumb>
                <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 350 }}>
                    {content}
                </Content>
            </Layout>
        );
    }

    getContentPage() {
        let page = '';
        page = ContentRouter.getContentPage(this.state.category, this.state.type);
        return page;
    }

    getBreadcrumbs() {
        let breadcrumbs = [];
        let category = LayoutModel.HeaderData[this.state.category] || '';
        let type = LayoutModel.SiderData[this.state.category];
        if (type) {
            type = type[this.state.type];
        }

        type = type || '';
        breadcrumbs.push(<Breadcrumb.Item>{category}</Breadcrumb.Item>);
        breadcrumbs.push(<Breadcrumb.Item>{type}</Breadcrumb.Item>);
        return breadcrumbs;
    }

    updateState(state) {
        this.setState({
            category: state.category,
            type: state.type
        });
    }
}

export default LayoutContent;