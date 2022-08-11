import { style } from "@vanilla-extract/css"

export const logoItem3 = style({
    position: "absolute",
    ":hover": {
        opacity: 1
    }
})

export const logoItem4 = style({
    transitionProperty: "opacity",
    transitionDuration: "4s",
    ":hover": {
        opacity: 0,
        transitionProperty: "opacity",
        transitionDuration: "0.5s"
    }
})