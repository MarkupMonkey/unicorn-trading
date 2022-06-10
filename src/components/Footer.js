import React from "react";

export class Footer extends React.Component{
    render(){
        const backgroundLogo = {
            backgroundImage: `url('/unicorno_logo.png')`
        }

        return(
            <div className="footer row-wrap justify-between align-center p-m">
                <div className="logo" style={backgroundLogo}>
                </div>

                <div className="footer-links row-wrap">
                    <div className="p-l-s p-r-s">
                        <a href=""> TERMS OF SERVICES</a>
                    </div>

                    
                    <div className="p-l-s p-r-s">
                        <a href="">PRIVACY POLICY</a>
                    </div>

                    <div className="p-l-s p-r-s">
                        <a href="">DISCLAIMER</a>
                    </div>
                </div>
<div>
    <p className="txt-size-s">
    Disclaimer: Please be aware that trading stocks, futures, stock options, and futures options involves a substantial risk of loss and is not suitable for all investors. Past performance is not necessarily indicative of future results. INFORMATION IS FOR GENERAL EDUCATIONAL AND RESEARCH PURPOSES AND SHOULD NOT BE CONSTRUED AS INDIVIDUAL INVESTMENT ADVICE. More info here
    </p>
</div>
            </div>
        )

        
    }
}