import React from "react"
import {features} from "../../data/featuresToken";
import {Link} from "react-router-dom";

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
                            <div className={"margin-top-1 align-left"}>
                                <h3>{feature.name}</h3>
                                <p>{feature.binance_symbol}</p>

                                <div className={"flex-group"}>
                                    <p>{feature.binance_price}</p>
                                    <p>{feature.binance_openInterest}</p>
                                    <p>{feature.binance_openInterestUSDT}</p>
                                </div>

                                <p>{feature.ftx_symbol}</p>

                                <div className={"flex-group"}>
                                    <p>{feature.ftx_price}</p>
                                    <p>{feature.ftx_openInterest}</p>
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