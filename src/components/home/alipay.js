import React from 'react';
import PropTypes from 'prop-types';
import QRCode from 'qrcode.react';

const Alipay = ({ prices, choose, qrmark ,onClose}) => {

    return (
        <div id="modal-notice">
            <div className="modal-backdrop" />
            <div className="modal-container">
                <div className="modal">
                    <div className="modal-close modal-close-btn">
                        <svg onClick={onClose} fill="currentColor" height="1em" width="1em" viewBox="0 0 40 40" style={{ verticalAlign: 'middle' }}>
                            <g>
                                <path d="m33.5 29.5q0 0.9-0.7 1.5l-3 3.1q-0.6 0.6-1.5 0.6t-1.5-0.6l-6.6-6.6-6.5 6.6q-0.7 0.6-1.6 0.6t-1.5-0.6l-3-3.1q-0.6-0.6-0.6-1.5t0.6-1.5l6.5-6.6-6.5-6.5q-0.6-0.7-0.6-1.6t0.6-1.5l3-3q0.6-0.6 1.5-0.6t1.6 0.6l6.5 6.6 6.6-6.6q0.6-0.6 1.5-0.6t1.5 0.6l3.1 3q0.6 0.7 0.6 1.5t-0.6 1.6l-6.6 6.5 6.6 6.6q0.6 0.6 0.6 1.5z" />
                            </g>
                        </svg>
                    </div>
                    <div className="modal-header" style={{ fontSize: 14, fontWeight: 'normal', textAlign: 'center' }}>
                        请选择续费方式：
                    </div>
                    <div className="modal-body" style={{ textAlign: 'center' }}>
                        <div className="form-input">
                            <label className="title">续费周期*</label>
                            <label className="radio">
                                <input type="radio" onClick={() => choose({ orderType: 'year' })} defaultValue={'year:' + prices.year} name="seats" />
                                <span>199元</span>
                            </label>
                            <label className="radio">
                                <input type="radio" onClick={() => choose({ orderType: 'hour' })} defaultValue="hour:2000" name="seats" />
                                <span>永久VIP2000</span>
                            </label>

                        </div>

                        {qrmark && <div className="form-input">
                            <QRCode size="180" value={qrmark} />
                            <br/>
                            <span style={{color:'#000'}}>
                            请使用支付宝扫描此二维码
                            </span>
                        </div>}

                        <button onClick={onClose} className="button small modal-close-btn" style={{ margin: 0 }}>取消</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Alipay.propTypes = {

};

export default Alipay;
