import React, { Component } from 'react';

class Notice extends Component {
   //  state = {
   //      isOpen: false,
   //      msg:null
   //  }
   //  // componentDidMount() {
   //  //     const { msg } = this.props;
   //  //     if (msg) {

   //  //     }
   //  // }
   //  _close = () => {
   //      this.setState({ isOpen: false })
   //  }
   //  _show = (msg) => {
   //      this.setState({ isOpen: true ,msg})
   //  }
    render() {
        const { msg,isOpen,close } = this.props;
        if (!isOpen) return <span />;

        return (
            <div id="modal-notice">
                <div className="modal-backdrop" />
                <div className="modal-container">
                    <div className="modal">
                        <div className="modal-close modal-close-btn">
                            <svg onClick={close} fill="currentColor" height="1em" width="1em" viewBox="0 0 40 40" style={{ verticalAlign: 'middle' }}>
                                <g>
                                    <path d="m33.5 29.5q0 0.9-0.7 1.5l-3 3.1q-0.6 0.6-1.5 0.6t-1.5-0.6l-6.6-6.6-6.5 6.6q-0.7 0.6-1.6 0.6t-1.5-0.6l-3-3.1q-0.6-0.6-0.6-1.5t0.6-1.5l6.5-6.6-6.5-6.5q-0.6-0.7-0.6-1.6t0.6-1.5l3-3q0.6-0.6 1.5-0.6t1.6 0.6l6.5 6.6 6.6-6.6q0.6-0.6 1.5-0.6t1.5 0.6l3.1 3q0.6 0.7 0.6 1.5t-0.6 1.6l-6.6 6.5 6.6 6.6q0.6 0.6 0.6 1.5z" />
                                </g>
                            </svg>
                        </div>
                        <div className="modal-header" style={{ fontSize: 14, fontWeight: 'normal', textAlign: 'center' }}>
                            {msg}
                        </div>
                        <div className="modal-body" style={{ textAlign: 'center' }}>
                            <button onClick={close} className="button small modal-close-btn" style={{ margin: 0 }}>我知道了</button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export const show = (msg) =>  {

};



export default Notice;
