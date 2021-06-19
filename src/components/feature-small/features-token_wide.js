import React from "react"
import {features} from "../../data/featuresToken";

const FeaturesTokenLayout = () => {

    return (
        <>
            {/*<h4>Crypto jumping-off points</h4>*/}
            <section className="margin-top-0 margin-bottom-0">
                {features
                    .map(feature => <article
                        className="editorial-content box feature box-padding margin-bottom-1"
                        key={feature.name}>

                            <div className={"margin-top-0"}>

                                <div className={"flex-group align-center"}>
                                    <div className={"align-center"}>
                                        <img className={feature.logoClass} alt={feature.alt}
                                             src={feature.img}/>
                                    </div>
                                    <h4>Binance Price</h4>
                                    <h4>Binance OI</h4>
                                    <h4>Binance OI USD</h4>
                                    <h4>FTX Price</h4>
                                    <h4>FTX OI</h4>
                                    <h4>FTX OI USD</h4>
                                    <h5>TOTAL OI USD</h5>

                                </div>

                                <div className={"flex-group align-center"}>
                                    <div className={"align-center"}>
                                        <h3>{feature.name}</h3>
                                    </div>
                                    <p>{feature.binance_price}</p>
                                    <p>{feature.binance_openInterest}</p>
                                    <p>{feature.binance_openInterestUSDT}</p>
                                    <p>{feature.ftx_price}</p>
                                    <p>{feature.ftx_openInterest}</p>
                                    <p>{feature.ftx_openInterestUSD}</p>
                                    <h3>{feature.total_openInterestUSD}</h3>

                                </div>

                            </div>

                        </article>
                    )}
            </section>
        </>
    );
};

export default FeaturesTokenLayout
