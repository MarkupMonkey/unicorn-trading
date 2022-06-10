import React from "react";

export class Footer extends React.Component {
    render() {
        const backgroundLogo = {
            backgroundImage: `url('/unicorno_logo.png')`
        }

        return (
            <footer className="footer row-wrap justify-between align-center p-xl">
                <div className="footer-logo" style={backgroundLogo}>
                </div>

                <div className="footer-links row-wrap">
                    <span className="footer-link m-r-m">
                        <a href=""> TERMS OF SERVICE</a>
                    </span>


                    <div className="footer-link m-r-m">
                        <a href="">PRIVACY POLICY</a>
                    </div>

                    <div className="footer-link">
                        <a href="">DISCLAIMER</a>
                    </div>
                </div>
                <p className="txt-size-m m-t-m">
                    Disclaimer: Please be aware that trading stocks, futures, stock options, and futures options involves a substantial risk of loss and is not suitable for all investors. Past performance is not necessarily indicative of future results. INFORMATION IS FOR GENERAL EDUCATIONAL AND RESEARCH PURPOSES AND SHOULD NOT BE CONSTRUED AS INDIVIDUAL INVESTMENT ADVICE. More info here
                </p>
            </footer>
        )


    }
}