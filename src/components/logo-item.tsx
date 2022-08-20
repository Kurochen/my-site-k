import React from "react";
import {
    Logo,
    Link,
} from "./ui"

import * as styles from "./logo-item.css"
import { IGatsbyImageData } from "gatsby-plugin-image";
import { LogoSizes } from "./ui.css";


export interface LogosData {
    id: string,
    alt: string,
    image: IGatsbyImageData,
    imageMono: IGatsbyImageData,
    link: string,
    size: LogoSizes
}


export function LogoItem(props: LogosData) {
    if (!props.image || !props.imageMono) return null

    return (
        <Link to={props.link} target="_blank">

            <div className={styles.logoItem3}>
                <Logo alt={props.alt} image={props.image} size={props.size} />
            </div>

            <div className={styles.logoItem4}>
                <Logo alt={props.alt} image={props.imageMono} size={props.size} />
            </div>

        </Link>
    )
}