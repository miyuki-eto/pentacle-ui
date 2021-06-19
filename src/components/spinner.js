import React from 'react';


export default function Spinner({type}) {
    switch (type) {
        default:
            return (
                <article className={"flex-group flex-justify-center"}>
                    <div className="lds-spinner">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </article>
            )
    }
}
