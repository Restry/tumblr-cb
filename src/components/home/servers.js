import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QRCodeWrapper from './qrcode';

class Servers extends Component {
    state = {
        showQR: false,
        code: ''
    }
    showQR = () => {
        this.setState({
            showQR: true,
            code: {
                method: 'aes-256-cfb',
                password: '8037798037',
                host: 'us.govip.online',
                port: '5000',
                name: '美国专线'
            }
        })
    }
    render() {
        const { showQR, code } = this.state;
        return (
            <div>
                <div className="block" style={{ padding: '90px 0', background: '#1C284A' }}>
                    <h1 style={{ fontSize: 36, marginBottom: 61, color: '#ffffff', fontWeight: 'normal' }}>可用服务器列表</h1>
                    <table className="table-list">
                        <thead>
                            <tr>
                                <th>服务器</th>
                                <th>端口</th>
                                <th>密码</th>
                                <th>加密方式</th>
                                <th>流量</th>
                                <th>到期时间</th>
                                
                                <th>二维码</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2324</td>
                                <td>455</td>
                                <td>677</td>
                                <td>
                                    <button className="button small" onClick={this.showQR}>显示</button>
                                </td>
                            </tr>
                            <tr>
                                <td>2324</td>
                                <td>455</td>
                                <td>677</td>
                                <td>2327654</td>
                            </tr>
                            <tr>
                                <td>2324</td>
                                <td>455</td>
                                <td>677</td>
                                <td>2327654</td>
                            </tr>
                            <tr>
                                <td>2324</td>
                                <td>455</td>
                                <td>677</td>
                                <td>2327654</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {showQR && <QRCodeWrapper onClose={() => { this.setState({ showQR: false }) }} qr={code} />}
            </div>
        );
    }
}

Servers.propTypes = {

};

export default Servers;