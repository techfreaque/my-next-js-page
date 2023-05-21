import {Grid} from "@mui/material";
import heroVideo from './red_hero.mp4';
import {Typography} from "antd";
import {useState} from "react";
import {getFancyColorsStyle} from "../colorPalette";
import RainbowButton from "../RainBowButton";
import { titleIds } from "../NavBar/Header";

export default function Hero() {
    const [isHover, setIsHover] = useState(false)


    return (<div style={
        {
            overflow: "hidden",
            background: "rgba(0, 0, 0, 0.15)",
            position: "relative"
        }
    }>
        <Grid container>
            <video style={
                    {
                        position: "absolute",
                        minWidth: "100%",
                        zIndex: -1

                    }
                }
                autoPlay
                loop
                muted>
                <source src={heroVideo}
                    type='video/mp4'/>
            </video>

            <Grid item
                xs={12}
                style={
                    {
                        zIndex: 1,
                        marginTop: '130px',
                        marginBottom: '130px'
                    }
            }>

                <div style={
                    {
                        margin: "auto",
                        maxWidth: "800px"
                    }
                }>
                    <div style={
                        {marginLeft: "15px", marginRight: "15px"}
                    }>
                        <Typography.Title level={1}

                            style={
                                {
                                    textAlign: 'center',
                                    color: "#fff",
                                    margin: 0,
                                    fontSize: "4rem",
                                    // lineHeight: "55px"

                                }
                        }>
                            Embrace the Magic<br/>
                            with Max Brandstaetter

                        </Typography.Title>
                        <h1 className={"fancy-title"}
                            onMouseEnter={
                                () => setIsHover(true)
                            }
                            onMouseLeave={
                                () => setIsHover(false)
                            }
                            style={
                                {
                                    textAlign: 'center',
                                    marginTop: "5px",
                                    ...getFancyColorsStyle(isHover)
                                }
                        }>
                            Unlock the power of technology to bring your vision to life. Embrace new possibilities and shape the future.
                            <div style={
                                {
                                    display: "flex",
                                    marginTop: "25px"
                                }
                            }>
                                <RainbowButton href={
                                        `/#${titleIds.myServices}`
                                    }
                                    isHover={isHover}>
                                    Discover My Craft
                                </RainbowButton>
                            </div>
                        </h1>
                    </div>
                </div>
            </Grid>
        </Grid>
    </div>)
}
