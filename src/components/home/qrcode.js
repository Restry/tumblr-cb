import React, { Component } from 'react';
import { encode } from 'base-64';
import QRCode from 'qrcode.react';

class QRCodeWrapper extends Component {

    createQrCode = ({ method, password, host, port, name }) => {
        const checkAscii = str => {
            return str.split('').filter(f => {
                return f.charCodeAt() >= 31 && f.charCodeAt() <= 127;
            }).join('');
        };
        return 'ss://' + encode(method + ':' + password + '@' + host + ':' + port) + '#' + checkAscii(name);
    };


    render() {
        const { qr,onClose } = this.props;
        if (!qr) return <div />;
        const qrMark = this.createQrCode(qr);
        return (
            <div id="modal-notice">
                <div className="modal-backdrop" />
                <div className="modal-container">
                    <div className="modal" style={{width:'700px'}}>
                        <div className="modal-close modal-close-btn">
                            <svg onClick={onClose} fill="currentColor" height="1em" width="1em" viewBox="0 0 40 40" style={{ verticalAlign: 'middle' }}>
                                <g>
                                    <path d="m33.5 29.5q0 0.9-0.7 1.5l-3 3.1q-0.6 0.6-1.5 0.6t-1.5-0.6l-6.6-6.6-6.5 6.6q-0.7 0.6-1.6 0.6t-1.5-0.6l-3-3.1q-0.6-0.6-0.6-1.5t0.6-1.5l6.5-6.6-6.5-6.5q-0.6-0.7-0.6-1.6t0.6-1.5l3-3q0.6-0.6 1.5-0.6t1.6 0.6l6.5 6.6 6.6-6.6q0.6-0.6 1.5-0.6t1.5 0.6l3.1 3q0.6 0.7 0.6 1.5t-0.6 1.6l-6.6 6.5 6.6 6.6q0.6 0.6 0.6 1.5z" />
                                </g>
                            </svg>
                        </div>
                        <div className="modal-header" style={{ fontSize: 14, fontWeight: 'normal', textAlign: 'center' }}>点击二维码或者用移动设备扫描二维码可自动填充服务器信息</div>
                        <div className="modal-body" style={{ textAlign: 'center' }}>
                            <QRCode value={qrMark} />
                            <br/>
                            {qrMark}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default QRCodeWrapper;