import React from 'react';
import Account from './model/Account';
 import LayoutMain from './layout/LayoutMain';
import LoginEntry from './login/LoginEntry';
// import {message} from 'antd';

class App extends React.Component {
    state = {
        isLogin: true
    }

    login(values) {
        // Account.login(values['userName'], values['password'], (res)=>{
        //     this.setState({isLogin:res});
        // });

        // Account.register(values, (res)=>{
        //     message.success(res ? '注册成功':'注册失败');
        // });
    }

    render() {
        let renderNode = null;
        if (!this.state.isLogin) {
            renderNode = <LoginEntry login={this.login.bind(this)}/>;
        } else {
            renderNode =<LayoutMain/>;
       }
        return renderNode;
    }

}

export default App;
