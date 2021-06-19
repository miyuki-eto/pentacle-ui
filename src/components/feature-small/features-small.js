import React from "react"
import {features} from "../../data/features";

const FeaturesSmlLayout = () => {

    return (
        <>
            {/*<h4>Crypto jumping-off points</h4>*/}
            <section className="flex-group margin-top-1">
                {features
                    .map(feature => <article className="box feature box-padding"
                                             key={feature.title}>
                            <div className={"margin-top-1 align-center"}>
                                <h3>{feature.title}</h3>
                                <p>{feature.text}</p>
                                <div><img src={feature.imageUrl} alt={feature.imageAlt}/></div>
                            </div>
                            <div className={"flex flex-center"}>
                                <a href={feature.link} target={"_blank"} rel="noopener noreferrer">
                                    <button className={"primary-gradient width-100"}>{feature.buttonText}</button>
                                </a>
                            </div>
                        </article>
                    )}
            </section>
        </>
    );
};

export default FeaturesSmlLayout
