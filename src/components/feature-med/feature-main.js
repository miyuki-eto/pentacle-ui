import React from "react"
import {features} from "../../data/featuresMain";
import {Link} from "react-router-dom";

const FeatureMainLayout = () => {

    return (<>
            {/*<h4>Pentacle ecosystems</h4>*/}
            <section className="flex-group margin-top-1">
                {features
                    .map(feature => <article
                            className={"editorial-content box feature box-padding"} key={feature.title}>
                            <div className={"flex-group flex-align-center"}>
                                <div>
                                    <Link to={feature.link}><h2>{feature.title}</h2></Link>
                                    <p>{feature.text}</p>
                                </div>
                                <div className={"align-center"}>
                                    <Link to={feature.link}><img className={feature.logoClass} alt={feature.alt}
                                                                   src={feature.logoUrl}/></Link>
                                </div>
                            </div>
                            {/*<div className={"margin-top-2"}>*/}
                            {/*    <Link to={feature.link}>*/}
                            {/*        <button className="primary full-width">{feature.buttonText}</button>*/}
                            {/*    </Link></div>*/}
                        </article>
                    )}
            </section>
        </>
    );
};

export default FeatureMainLayout
