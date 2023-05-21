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
                {
                    background: "#000",
                    display: "flex"
                }
        }>
            <Grid item
                xs={12}
                lg={6}
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
                lg={6}
                style={
                    {margin: "auto"}
            }>
                <div style={
                    {
                        margin: "auto",
                        maxWidth: "800px"
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
                                        "Full Stack Developer",
                                        "Problem Solver",
                                        "Data Scientist",
                                        "Max Brandstaetter",
                                        "Machine Learning Expert",
                                        "Algorithmic Trading Specialist",
                                        "Innovator in Technology",
                                        "Max Brandstaetter",
                                        "AI Enthusiast",
                                        "Tech Evangelist",
                                        "Open-Source Contributor",
                                        "Max Brandstaetter",
                                        "DevOps Advocate",
                                        "Entrepreneur",
                                        "Creative Thinker",
                                        "Max Brandstaetter",
                                        "Continuous Learner",
                                        "World Traveler",
                                    ],
                                    autoStart: true,
                                    loop: true
                                }
                            }/>
                    </Typography.Title>
                    <DarkParagraph> {"Welcome to my magical world of tech! I'm Max Brandstaetter, a Full Stack Developer and data sorcerer. With a touch of innovation and a sprinkle of wizardry, I create extraordinary solutions that bring visions to life."}</DarkParagraph>
                    <DarkParagraph> {"As a problem-solving wizard, I empower businesses with advanced technologies and elegant solutions. From revamping open-source libraries to architecting AI-driven marvels, I conjure up remarkable results."} </DarkParagraph>
                    <DarkParagraph>
                        Unleashing the power of data, I delve into complex datasets, extracting valuable insights and making accurate predictions. With my expertise in data sorcery, I transform information into gold, enabling informed decision-making and driving success.
                    </DarkParagraph>
                    <DarkParagraph> {"Join me on this enchanting journey as we shape the future through technology. Let's create wonders that captivate and inspire."} </DarkParagraph>
                    <Tooltip title="It's easy! Just click and shoot me a message">
                        <div style={
                                {
                                    display: "flex",
                                    marginBottom: "35px"
                                }
                            }
                            onMouseEnter={
                                () => setIsHover(true)
                            }
                            onMouseLeave={
                                () => setIsHover(false)
                        }>

                            <RainbowButton isHover={isHover}
                                style={
                                    {
                                        margin: "auto",
                                        overflowWrap: "normal",
                                        maxWidth: "90vw",
                                        height: "auto",
                                        whiteSpace: "break-spaces"
                                    }
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
