import {Grid} from "@mui/material";

export default function PageSection({
    children,
    style,
    spacing = 2,
    id,
    className
}) {
    return (
        <div style={
                {margin: "30px"}
            }
            id={id}
            className={className}>
            <Grid container
                style={
                    {
                        margin: "auto",
                        maxWidth: "1850px",
                        height: "100%",
                        // display: "flex",
                        paddingBottom: "25px",
                        ...style
                    }
                }
                spacing={spacing}>
                {children} </Grid>
        </div>
    )
}
