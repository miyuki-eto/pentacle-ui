import React from "react"
import {features} from "../../data/featuresToken";

const FeaturesTokenLayout = () => {

    return (
        <>
            {/*<h4>Crypto jumping-off points</h4>*/}
            <section className="flex-group margin-top-1 margin-bottom-1">
                {features
                    .map(feature => <article className="box feature box-padding"
                                             key={feature.name}>
                            <div className={"align-center"}>
                                <img className={feature.logoClass} alt={feature.alt}
                                                            src={feature.img}/>
                            </div>
                            <div className={"margin-top-1 align-center"}>
                                <h3>{feature.name}</h3>

                                <div className={"flex-group"}>
                                    <p>Binance</p>
                                    <p>Exchange</p>
                                    <p>FTX</p>
                                </div>

                                <div className={"flex-group"}>
                                    <p>{feature.binance_symbol}</p>
                                    <p>Symbol</p>
                                    <p>{feature.ftx_symbol}</p>
                                </div>

                                <div className={"flex-group"}>
                                    <p>{feature.binance_price}</p>
                                    <p>Price</p>
                                    <p>{feature.ftx_price}</p>
                                </div>

                                <div className={"flex-group"}>
                                    <p>{feature.binance_openInterest}</p>
                                    <p>OI (Token)</p>
                                    <p>{feature.ftx_openInterest}</p>
                                </div>

                                <div className={"flex-group"}>
                                    <p>{feature.binance_openInterestUSDT}</p>
                                    <p>OI (USD)</p>
                                    <p>{feature.ftx_openInterestUSD}</p>
                                </div>
                                {/*<div><img src={feature.imageUrl} alt={feature.imageAlt}/></div>*/}
                            </div>

                        </article>
                    )}
            </section>
        </>
    );
};

export default FeaturesTokenLayout
