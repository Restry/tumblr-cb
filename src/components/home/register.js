import React, { Component } from 'react';
import axios from 'axios'

class Register extends Component {
    render() {
        const { onClose } = this.props;

        return (<div id="modal-apply">
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
                    <div className="modal-header">LICENSE 申请</div>
                    <div className="modal-body">
                        <form id="form-apply" onSubmit={this._handleSubmit.bind(this)}>

                            <div className="form-input" style={{ display: 'none' }}>
                                <label className="title">申请用户数量*</label>
                                <label className="radio">
                                    <input type="radio" defaultValue={10} defaultChecked name="seats" />
                                    <span>10人</span>
                                </label>
                                <label className="radio">
                                    <input type="radio" defaultValue={20} name="seats" />
                                    <span>20人</span>
                                </label>
                                <label className="radio">
                                    <input type="radio" defaultValue={50} name="seats" />
                                    <span>50人</span>
                                </label>
                                <label className="radio">
                                    <input type="radio" defaultValue={100} name="seats" />
                                    <span>100人</span>
                                </label>
                                <label className="radio">
                                    <input type="radio" defaultValue={500} name="seats" />
                                    <span>500人</span>
                                </label>
                                <label className="radio">
                                    <input type="radio" defaultValue={-1} name="seats" />
                                    <span>不限</span>
                                </label>
                            </div>
                            <div className="form-input">
                                <label htmlFor="email" className="title">邮箱地址*</label>
                                <input ref={c => this._email = c} type="text" />
                            </div>
                            <div className="form-input">
                                <label htmlFor="contact" className="title">密码*</label>
                                <input ref={c => this._password = c} type="text" />
                            </div>
                            <div className="form-input">
                                <label htmlFor="phone" className="title">验证码*</label>
                                <input ref={c => this._code = c} type="text" />
                                <input type="button" onClick={this._sendCode.bind(this)} defaultValue="验证码" className="button small" />
                            </div>
                            <p style={{ marginBottom: 30, fontSize: 13 }}>
                                <label style={{ cursor: 'pointer' }}>
                                    <input type="checkbox" ref={c => this._agree = c} />
                                    我已阅读并同意 <a style={{ color: '#5097e8' }} href="https://e.coding.net/home/private-cloud-terms.html" target="_blank">Govip Online 私有云使用协议</a>
                                </label>
                            </p>
                            <input type="submit" defaultValue="申请" className="button small" />
                        </form>
                    </div>
                </div>
            </div>
        </div>

        );
    }
    _sendCode() {
        axios.post('/api/home/code', { email: this._email.value }).then((res) => {
            alert(JSON.stringify(res));
        })
    }
    _handleSubmit(event) {
        event.preventDefault();

        if (!this._email.value || !this._password.value || !this._code.value || !this._agree.checked) {
            alert('输入有误，请检查.');
            return;
        }

        this.props.onSubmit({
            email: this._email.value,
            password: this._password.value,
            code: this._code.value
        });

        this._email.value = '';
        this._password.value = '';

        //this.setState({ characters: 0 });
    }
}

export default Register;