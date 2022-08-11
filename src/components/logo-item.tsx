import React, { useState } from "react";
import {
    Space,
    Container,
    Section,
    FlexList,
    Text,
    Logo,
    HomepageImage,
    Link,
} from "./ui"

import * as styles from "./logo-item.css"
import { LogosData } from "./logo-list";



export function LogoItem(props: LogosData) {
    if (!props.image || !props.imageMono) return null

    return (
        <Link to={props.link} target="_blank">

            <div className={styles.logoItem3}>
                <Logo alt={props.alt} image={props.image} size="medium" />
            </div>

            <div className={styles.logoItem4}>
                <Logo alt={props.alt} image={props.imageMono} size="medium" />
            </div>

        </Link>
    )
}