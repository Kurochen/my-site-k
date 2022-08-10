import React, { useState } from "react";
import {
    Space,
    Container,
    Section,
    FlexList,
    Text,
    Logo,
    HomepageImage,
} from "./ui"

import * as styles from "./logo-list.css"



export function LogoItem(props: LogoItemProps) {
    if (!props.image) return null

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };



    return (

        <div >
            <div className={styles.logoItem3}>
                <Logo alt={props.alt} image={props.imageName} size="medium" />
            </div>

            <div className={styles.logoItem4}>
                <Logo alt={props.alt} image={props.imageMono2} size="medium" />
            </div>

        </div>


        // <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className={styles.logoItem2}>
        //     {isHovering
        //         ? <Logo alt={props.alt} image={props.imageName} size="medium" className={styles.logoItem2} />
        //         : <Logo alt={props.alt} image={props.imageMono2} size="medium" className={styles.logoItem2} />
        //     }
        // </div>
    )
}