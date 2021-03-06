import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import FeaturesTokenLayout from "../components/feature-small/features-token_wide";

export const Main = () => {
    return (
        <>
            <Header/>
            <Layout>
                <FeaturesTokenLayout/>
            </Layout>
        </>
    )
}
