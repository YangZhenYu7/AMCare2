/**
 * Created by yangzhenyu on 2017/7/23.
 */
import React, { Component } from 'react';
import LayoutHeader from './LayoutHeader';
import LayoutSider from './LayoutSider';
import LayoutContent from './LayoutContent';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const {Footer } = Layout;

class LayoutMain extends Component {
    constructor(spec){
        super(spec);
        this.categorySelected = '0';
    }

    render() {
        return (
            <div className="App">
                <Layout>
                    <LayoutHeader onClick={this.onHeaderClick.bind(this)}/>
                    <Layout style={{'flex-direction': 'row'}}>
                        <LayoutSider ref="sider" onClick={this.oSiderClick.bind(this)}/>
                        <LayoutContent ref="content"/>
                    </Layout>
                    <Footer style={{ textAlign: 'center' }}>
                        许昌裴山庙社区服务站 ©2017 Created by yzy
                    </Footer>
                </Layout>
            </div>
        );
    }

    onHeaderClick(category) {
        this.categorySelected = category;
        this.refs.sider.updateState(category);
        this.updateContentUI(category, '0');
    }

    oSiderClick(e) {
        this.updateContentUI(this.categorySelected, e);
    }

    updateContentUI(category, type){
        this.refs.content.updateState({'category':category, 'type':type});
    }

}

export default LayoutMain;
