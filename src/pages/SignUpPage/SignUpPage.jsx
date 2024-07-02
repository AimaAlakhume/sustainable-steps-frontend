import "./SignUpPage.scss";
import React from 'react';

function SignUpPage() {
    return (
        <div className="signup-main">
            <div className="registration-form">
                <header>
                    <h1>Sign Up</h1>
                    <p>Fill in your information</p>
                </header>
                <form>
                    <div className="input-section">
                        <input type="email" placeholder="email" autocomplete="off" className="email" />
                        <div className="animated-button">
                            <span className="icon-paper-plane">
                                <i className="fa fa-envelope-o"></i>
                            </span>
                            <span className="next-button email">
                                <i className="fa fa-arrow-up"></i>
                            </span>
                        </div>
                    </div>
                    <div className="input-section folded">
                        <input type="password" placeholder="password" className="password" />
                        <div className="animated-button">
                            <span className="icon-lock">
                                <i className="fa fa-lock"></i>
                            </span>
                            <span className="next-button password">
                                <i className="fa fa-arrow-up"></i>
                            </span>
                        </div>
                    </div>
                    <div className="input-section folded">
                        <input type="password" placeholder="confirm password" className="repeat-password" />
                        <div className="animated-button">
                            <span className="icon-repeat-lock">
                                <i className="fa fa-lock"></i>
                            </span>
                            <span className="next-button repeat-password">
                                <i className="fa fa-paper-plane"></i>
                            </span>
                        </div>
                    </div>
                    <div className="success">
                        <p>ACCOUNT CREATED</p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUpPage;
