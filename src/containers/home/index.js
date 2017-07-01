import React, { Component } from 'react';
import { Notice, Login, Register,Servers } from '../../components';
import axios from 'axios';

class Home extends Component {
    state = {
        showLogin: false,
        showRegister: false
    }
    showBox = () => {
        this.setState({ showLogin: true })
    }
    login=(res)=>{
        console.log(res);
        axios.post('/api/home/login',res).then((ret)=>{
            console.log(ret);
            return axios.get('/api/user/account');
        }).then(ret=>{
            console.log(ret);
        });
    }
    registration=(res)=>{
        console.log(res);
        axios.post('/api/home/signup',res).then((ret)=>{
            console.log(ret);
        });
    }
    componentDidMount() {
        axios.get('/api/user/account').then(ret=>{
            console.log(ret);
        });
    }

    render() {
        const { showLogin, showRegister } = this.state;
        return (
            <div>

                {showLogin && <Login 
                    onSubmit={this.login}
                    onClose={() => this.setState({ showLogin: false })} 
                    onSwitchToRegister={() => { this.setState({ showLogin: false, showRegister: true }) }} />}

                {showRegister && <Register 
                    onSubmit={this.registration}
                    onClose={() => this.setState({ showRegister: false })} />}

                <div className="wrapper" >
                    <div className="block" style={{ minHeight: 751, background: 'url(images/bg.png) no-repeat center, radial-gradient(49% 129%, #020334 60%, #000233 100%)', color: '#ffffff' }}>
                        <div className="bg">
                            <div className="img" style={{ background: 'url(images/bg2.png) no-repeat', animation: 'bg 90s linear infinite' }} />
                        </div>
                        <div className="bg">
                            <div className="img" style={{ background: 'url(images/bg2.png) no-repeat', animation: 'bg2 90s linear infinite' }} />
                        </div>
                        <div className="brand">

                            <a style={{ float: 'left', fontSize: '3em', color: '#fff' }} href="http://www.govip.online/">
                                GOVIP.ONLINE
                        </a>
                        </div>
                        <div className="start">
                            <h1 style={{ fontSize: 52, fontWeight: 'normal' }}>让自由的网络无边界</h1>
                            <p style={{ fontSize: 18, marginTop: 15 }}>
                                GOVIP ONLINE 为您自由的网络无边界，提供安全、稳定、私有的上网服务
                        </p>
                            <p style={{ marginTop: 60 }}>
                                <button id="button-apply" className="button confirm large" onClick={this.showBox}>免费申请 LICENSE</button>
                            </p>
                            <p style={{ fontSize: 12, marginTop: 20 }}>
                                1.0 版本发布支持 IOS苹果手机，安卓手机，PC电脑，Mac电脑无限制加密VPN上网服务<br />
                                <a href="http://www.govip.online/help/doc/private/install.html" style={{ color: '#5097e8' }} target="_blank">点此查看安装教程</a>
                            </p>
                        </div>
                    </div>
                    <Servers/>
                    <div className="block" style={{ padding: '90px 0', background: '#1C284A' }}>
                        <h1 style={{ fontSize: 36, marginBottom: 61, color: '#ffffff', fontWeight: 'normal' }}>GOVIP ONLINE 私有VPN</h1>
                        <ul className="features">
                            <li>
                                <div className="box" style={{ background: '#109CEE' }}>
                                    <img className="icon" src="images/1.png" />
                                    <p className="text">部署简单</p>
                                </div>
                                <p className="comment">govip.online私有VPN无论你是手机还是电脑都只需简单几步就可以轻松完成VPN加密上网</p>
                            </li>
                            <li>
                                <div className="box" style={{ background: '#1EB375' }}>
                                    <img className="icon" src="images/2.png" />
                                    <p className="text">功能强大</p>
                                </div>
                                <p className="comment">govip.online私有VPN不仅支持智能上网模式还支持全局上网，所有的连接都单独加密完成</p>
                            </li>
                            <li>
                                <div className="box" style={{ background: '#EAC04C' }}>
                                    <img className="icon" src="images/3.png" />
                                    <p className="text">服务稳定</p>
                                </div>
                                <p className="comment">我们提供一人一端口并对连接进行加密，为保证上网速度我们一台服务器只有20名用户</p>
                            </li>
                            <li>
                                <div className="box" style={{ background: '#9B60CB' }}>
                                    <img className="icon" src="images/4.png" />
                                    <p className="text">质优价廉</p>
                                </div>
                                <p className="comment">govip.online私有VPN建立之初也就是为了让网络无边界，为广大设计师朋友提供安全稳定的服务所以我们的价格也才199元一年</p>
                            </li>
                        </ul>
                    </div>
                    <div className="block" style={{ paddingTop: 100, backgroundImage: 'linear-gradient(-180deg, #F2F4F7 0%, #FFFFFF 100%)' }}>
                        <div style={{ marginTop: '-250px', display: 'inline-block' }}>
                            <div className="notes-top-bar">
                                <hr style={{ background: '#1F9EEC' }} />
                                <hr style={{ background: '#32B277' }} />
                                <hr style={{ background: '#E9BF51' }} />
                            </div>
                            <div style={{ background: '#FFFFFF', boxShadow: '0 0 30px 0 rgba(26,6,41,0.08)', width: 1000, padding: '60px 100px' }}>
                                <h1 style={{ fontSize: 36, marginBottom: 60, fontWeight: 'normal' }}>GOVIP ONLINE 私有VPN说明</h1>
                                <div className="notes">
                                    <div className="note">
                                        <img src="images/i1.png" alt="售后服务" />
                                        <div className="content">
                                            <h3>售后服务</h3>
                                            <p>
                                                授权期内，GOVIP ONLINE 私有云接受不限次数的在线支持反馈，
                    </p>
                                        </div>
                                    </div>
                                    <div className="note">
                                        <img src="images/i2.png" alt="培训服务" />
                                        <div className="content">
                                            <h3>培训服务</h3>
                                            <p>
                                                GOVIP ONLINE 私有云可针对产品的使用和产品的维护对企业相关人员进行远程培训。
                    </p>
                                        </div>
                                    </div>
                                    <div className="note">
                                        <img src="images/i3.png" alt="续费升级" />
                                        <div className="content">
                                            <h3>续费升级</h3>
                                            <p>
                                                授权期内，企业可免费升级 GOVIP ONLINE 私有云版本。如需升级用户数量上限或延长期限，则可申请重新颁发 LICENSE。
                    </p>
                                        </div>
                                    </div>
                                    <div className="note">
                                        <img src="images/i4.png" alt="其它部署形式" />
                                        <div className="content">
                                            <h3>其它部署形式</h3>
                                            <p>Govip Online私有云支持虚拟主机，物理服务器，定制开发，代托管等服务，具体细则请咨询 </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="block" style={{ height: 96, marginTop: 70, background: '#F2F4F7' }}>
                        <div style={{ width: 1200, margin: '30px auto 0', padding: '30px 0', textAlign: 'left' }}>
                            <a href="http://www.govip.online/">
                                <img src="images/logo.png" height={36} width={354} style={{ position: 'absolute' }} />
                            </a>
                            <div style={{ textAlign: 'right', fontSize: 12, color: '#4F565F' }}>
                                <p style={{ height: 18, lineHeight: 18 }}>
                                    <a href="http://www.govip.online/privacy" target="_blank">隐私策略</a> |
                <a href="http://www.govip.online/terms" target="_blank">服务条款</a> |
                <a href="http://www.govip.online/security" target="_blank">安全策略</a>
                                </p>
                                <p style={{ height: 18, lineHeight: 18 }}>
                                    <a href="http://www.govip.online/">© 2017 Coding.net</a> |
                <a href="http://www.miitbeian.gov.cn/" target="_blank">粤ICP备1402975PP号-1</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;