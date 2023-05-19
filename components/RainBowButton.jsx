import {Button} from "antd";
import {getFancyColorsStyle} from "./colorPalette";

export default function RainbowButton({
    children,
    href,
    isHover,
    fontSize = "25px",
    size = "large",
    style={}
}) {
    return (
        <Button href={href}
            style={
                {
                    margin: "auto",
                    textAlign: 'center',
                    fontSize,
                    marginTop: "5px",
                    ...getFancyColorsStyle(isHover),
                    ...style
                }
            }
            type={"outline"}
            size={size}>
            {children} </Button>
    )
}
