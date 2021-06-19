import React from "react";
import Layout from "../components/layout";
// import FeaturesSmlLayout from "../components/feature-small/features-small";
import Header from "../components/header";
// import FeatureMainLayout from "../components/feature-med/feature-main";
// import FeaturesXsmlLayout from "../components/feature-small/features-xmall";
import FeaturesTokenLayout from "../components/feature-small/features-token";

export const Main = () => {
    return (
        <>
            <Header/>
            <Layout>
                {/*<FeatureMainLayout/>*/}
                {/*<FeaturesXsmlLayout/>*/}
                {/*<FeaturesSmlLayout/>*/}
                <FeaturesTokenLayout/>
            </Layout>
        </>
    )
}
