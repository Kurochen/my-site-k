import { keyframes, style } from "@vanilla-extract/css"

// keyframes(OpasityLogo, {
//     "0%": {
//         transform: "scale(0.95) translateY(10px) translateX(-50%)",
//         visibility: "hidden",
//         opacity: 0,
//     },
//     "100%": {
//         opacity: 1,
//         transform: "scale(1), translateY(0) translateX(-50%)",
//         visibility: "visible",
//     },
// }
// )

const tttt = keyframes({
    '0%': { opacity: 1 },
    '100%': { opacity: 0 }
})

const rrrr = style({
    animationName: tttt,
    animationDuration: '2s'
})


export const logoItem3 = style({
    position: "absolute"
})

export const logoItem4 = style({
    transitionProperty: "opacity",
    transitionDuration: "4s",
    ":hover": {
        opacity: 0,
        // animationName: tttt,
        // animationDuration: '1.5s',
        // animationFillMode: 'both'
        transitionProperty: "opacity",
        transitionDuration: "0.5s"
    }
})