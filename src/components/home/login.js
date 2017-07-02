import React, { Component } from 'react';

class Login extends Component {
   render() {
      const { onSubmit, onClose, onSwitchToRegister } = this.props;
      return (
         <div id="modal-login">
            <div className="modal-backdrop" />
            <div className="modal-container">
               <div className="modal">
                  <div className="modal-close modal-close-btn">
                     <svg onClick={onClose} fill="currentColor" height="1em" width="1em" viewBox="0 0 40 40" className="cuk-icon cuk-icon-close null" style={{ verticalAlign: 'middle' }}>
                        <g>
                           <path d="m33.5 29.5q0 0.9-0.7 1.5l-3 3.1q-0.6 0.6-1.5 0.6t-1.5-0.6l-6.6-6.6-6.5 6.6q-0.7 0.6-1.6 0.6t-1.5-0.6l-3-3.1q-0.6-0.6-0.6-1.5t0.6-1.5l6.5-6.6-6.5-6.5q-0.6-0.7-0.6-1.6t0.6-1.5l3-3q0.6-0.6 1.5-0.6t1.6 0.6l6.5 6.6 6.6-6.6q0.6-0.6 1.5-0.6t1.5 0.6l3.1 3q0.6 0.7 0.6 1.5t-0.6 1.6l-6.6 6.5 6.6 6.6q0.6 0.6 0.6 1.5z" />
                        </g>
                     </svg>
                  </div>
                  <div className="modal-header">LICENSE 登陆</div>
                  <div className="modal-body">
                     <form id="form-apply" onSubmit={this._handleSubmit.bind(this)}>
                        <div className="form-input">
                           <label htmlFor="company" className="title">邮箱*</label>
                           <input ref={c => this._email = c} type="text" placeholder="填写邮箱" />
                        </div>
                        <div className="form-input">
                           <label htmlFor="company" className="title">密码*</label>
                           <input ref={c => this._password = c} type="password" placeholder="填写密码" />
                        </div>
                        <div className="form-input" style={{ textAlign: 'center' }}>
                           <input type="submit" defaultValue="登陆" className="button small" />

                           <input type="button" onClick={onSwitchToRegister} defaultValue="注册" className="button small" />
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      );
   }
   _handleSubmit(event) {
      event.preventDefault();

      if (!this._email.value || !this._password.value) {
         alert('Please enter your name and comment.');
         return;
      }

      this.props.onSubmit({ email: this._email.value, password: this._password.value });

      this._email.value = '';
      this._password.value = '';

      //this.setState({ characters: 0 });
   }
}

export default Login;
