import {Grid} from "@mui/material";
import {titleIds} from "../NavBar/Header";
import PageSection from "../PageSection";
import meFromBack from "./me_from_back.jpg"
import Image from "next/image";
import {Tooltip, Typography} from "antd";
import Typewriter from 'typewriter-effect';
import {pageColors} from "../colorPalette";
import RainbowButton from "../RainBowButton";
import {contactEmailSubject, myEmailAddress} from "../constantsAboutMe";
import {useState} from "react";

export default function AboutMe({}) {
    const [isHover, setIsHover] = useState(false)

    return (
        <Grid container
            id={
                titleIds.aboutMe
            }
            className="anchor"

            spacing={0}
            style={
                {background: "#000", display: "flex"}
        }>
            <Grid item
                xs={12}
                md={6}
                style={
                    {margin: "auto"}
            }>
                <Image src={meFromBack}
                    alt={"My backside"}
                    style={
                        {
                            width: "100%",
                            height: "auto",
                            backgroundPosition: "center"
                        }
                    }/>
            </Grid>
            <Grid item
                xs={12}
                md={6}
                style={
                    {margin: "auto"}
            }>
                <div style={
                    {
                        margin: "auto",
                        maxWidth: "500px"
                    }
                }>

                    <Typography.Title level={2}
                        style={
                            {
                                textAlign: "center",
                                color: pageColors.primary,
                                marginBottom: "0px",
                                fontSize: "25px"
                            }
                    }>
                        About
                    </Typography.Title>
                    <Typography.Title level={2}
                        style={
                            {
                                textAlign: "center",
                                color: "#fff",
                                fontSize: "30px",
                                marginTop: "0px"

                            }
                    }>
                        <Typewriter // onInit={
                            //     (typewriter) => {
                            //         typewriter.typeString('Hello World!').callFunction(() => {
                            //             console.log('String typed out!');
                            //         }).pauseFor(2500).deleteAll().callFunction(() => {
                            //             console.log('All strings were deleted');
                            //         }).start();
                            //     }
                            // }
                            options={
                                {
                                    strings: [
                                        "Max Brandstaetter",
                                        'Developer',
                                        "Problem solver",
                                        "Globetrotter",
                                        'Data Scientist'
                                    ],
                                    autoStart: true,
                                    loop: true
                                }
                            }/>
                    </Typography.Title>
                    <DarkParagraph>
                        Passionate about Full Stack Development and specializing in algorithmic trading, I bring a unique blend of skills in data analysis, machine learning, and DevOps practices.
                    </DarkParagraph>
                    <DarkParagraph>

                        With a proven track record of revamping open-source libraries and architecting AI-driven solutions, I strive to empower businesses with advanced technologies for remarkable results.
                    </DarkParagraph>
                    <Tooltip title="It's easy! Just click and shoot me a message">
                        <div style={
                                {display: "flex", marginBottom: "35px"}
                            }
                            onMouseEnter={
                                () => setIsHover(true)
                            }
                            onMouseLeave={
                                () => setIsHover(false)
                        }>

                            <RainbowButton isHover={isHover}
                                style={
                                    {margin: "auto"}
                                }
                                size={"middle"}
                                fontSize={"18px"}
                                href={
                                    `mailto:${myEmailAddress}?subject=${contactEmailSubject}`
                            }>
                                {"Let's collaborate and unlock new possibilities together."} </RainbowButton>
                        </div>
                    </Tooltip>
                </div>
            </Grid>
        </Grid>
    )
}


function DarkParagraph({children}) {
    return (
        <Typography.Paragraph style={
            {
                color: "#fff",
                textAlign: "center",
                fontSize: "1.1rem"
            }
        }>
            {children} </Typography.Paragraph>
    )
}
