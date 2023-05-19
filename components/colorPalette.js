export const pageColors = {
    primary: "#00c2cb"
}


export function getFancyColorsStyle(isHover) {
    return {
        color: "transparent",
        backgroundImage: `linear-gradient(to right ,#eeaed5, ${
            pageColors.primary
        }, #ff7f50, #ee4b2b, #eeaed5)`,
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        backgroundSize: "200%",
        backgroundPosition: "-200%",
        transition: "all ease-in-out 2s",
        ...(isHover ? {
            backgroundPosition: "200%"

        } : {})
    }
}
