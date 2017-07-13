import React, { Component } from 'react';
import Alipay from './alipay';
import axios from 'axios';

class User extends Component {
   state = {
      prices: {},
      qrmark: '',
      orderId: ''
   }

   render() {
      const { account, showBox } = this.props;
      if (!account.user) return <button id="button-apply" className="button confirm large" onClick={showBox}>免费申请 LICENSE</button>;
      const { user, data } = account;
      const { prices, qrmark } = this.state;

      return (
         <span>
            {user}您好！<br />
            过期时间:{new Date(data.expire).toLocaleDateString()}
            <button className="button confirm small" onClick={this._pay}>续费</button>
            <button className="button confirm small" onClick={this._logout}>退出</button>
            {prices.hour && <Alipay onClose={this._closePayment} qrmark={qrmark} prices={prices} choose={this._choosePayment} />}
         </span>
      );
   }
   _closePayment = () => {
      this.setState({ prices: {} })
   }
   _choosePayment = (data) => {
      const { account } = this.props;
      data.accountId = account.id;
      axios.post('api/user/order/qrcode', data).then((res) => {
         this.setState({ qrmark: res.data.qrCode, orderId: res.data.orderId })
      })
   }
   _pay = () => {
      axios.get('/api/user/order/price').then((res) => {
         this.setState({ prices: res.data });
      })
   }
   _logout = (e) => {
      this.props.logout();
   }
}

export default User;
