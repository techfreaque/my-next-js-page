import {Grid} from "@mui/material";
import heroVideo from './red_hero.mp4';
import {Button, Tooltip, Typography} from "antd";
import {useState} from "react";
import {RocketOutlined} from "@ant-design/icons";
import {getFancyColorsStyle, pageColors} from "../colorPalette";
import {contactEmailSubject, myEmailAddress} from "../constantsAboutMe";
import RainbowButton from "../RainBowButton";

export default function Hero({isMobile}) {
    const [isHover, setIsHover] = useState(false)


    return (
        <div style={
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
                            {marginLeft: "15px"}
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
                            <h1 classNames={"fancy-title"}
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
                                <Tooltip title="It's easy! Just click and shoot me a message">
                                    <div style={
                                        {
                                            display: "flex",
                                            marginTop: "25px"
                                        }
                                    }>
                                        <RainbowButton href={
                                                `mailto:${myEmailAddress}?subject=${contactEmailSubject}`
                                            }
                                            isHover={isHover}>
                                            Book A Call Today!
                                        </RainbowButton>
                                    </div>
                                </Tooltip>
                            </h1>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
