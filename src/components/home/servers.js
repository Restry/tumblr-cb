import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QRCodeWrapper from './qrcode';

const flow = function (input) {
   if (input < 1000) {
      return input + ' B';
   } else if (input < 1000000) {
      return (input / 1000).toFixed(1) + ' KB';
   } else if (input < 1000000000) {
      return (input / 1000000).toFixed(1) + ' MB';
   } else if (input < 1000000000000) {
      return (input / 1000000000).toFixed(2) + ' GB';
   } else {
      return input;
   }
};

class Servers extends Component {
   state = {
      showQR: false,
      code: ''
   }
   showQR = ({ method, password, host, port, name }) => {
      this.setState({
         showQR: true,
         code: {
            method,
            password,
            host,
            port,
            name
         }
      })
   }
   render() {
      const { showQR, code } = this.state;
      const { data } = this.props;
      if (!data.length) return <span />;

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
                     {
                        data.map((row, index) => {
                           return (
                              <tr key={index}>
                                 <td>{row.host}</td>
                                 <td>{row.port}</td>
                                 <td>{row.password}</td>
                                 <td>{row.method}</td>
                                 <td>{`${flow(row.serverFlow)}/${flow(row.flow * row.scale)}`}</td>
                                 <td>{new Date(row.time.expire).toLocaleString()}</td>
                                 <td>
                                    <button className="button small" onClick={() => this.showQR(row)}>显示</button>
                                 </td>
                              </tr>
                           )
                        })
                     }
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
