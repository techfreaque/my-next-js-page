import {Grid} from "@mui/material";
import {Card, Typography} from "antd";
import {titleIds} from "./NavBar/Header";
import {RainbowTags} from "./RainbowTags";

export default function Projects() {
    return (
        <div style={
                { // backgroundColor: "#eee",
                    padding: "0 30px",
                    paddingBottom: "50px"
                }
            }
            className="anchor"
            id={
                titleIds.myProjects
        }>
            <div style={
                {
                    textAlign: 'center',
                    maxWidth: "1850px",
                    margin: "auto",
                    margin: "30px auto"
                }
            }>
                <Grid container>
                    <Grid item
                        style={
                            {
                                marginTop: "30px",
                                textAlign: 'center'
                            }
                        }
                        xs={12}>
                        <Typography.Title level={2}>
                            Project Showcase
                        </Typography.Title>
                        <Typography.Paragraph>
                            As a testament to my expertise and versatility, here is a showcase of some notable projects I have worked on,<br/>
                            highlighting the technologies and tools I utilized along with the outcomes and achievements delivered.
                        </Typography.Paragraph>
                    </Grid>
                </Grid>


                <Grid container
                    // spacing={2}
                    style={
                        {
                            margin: "auto"
                            // display: "flex",
                            // alignItems: "stretch",
                            // // flexDirection: "column",
                            // flexWrap: "wrap",
                            // WebkitAlignContent: "stretch",
                            // MsFlexLinePack: "stretch",
                            // alignContent: "stretch"
                        }
                }>
                    <ProjectCard title={"Trading Bot User Interface and Customized OctoBot Backend"}
                        subTitle={"Classic Full Stack Programming"}
                        descriptions={
                            ["Developed a user-friendly interface for a trading bot, integrating it with a customized backend based on OctoBot.", "Implemented advanced functionalities, including real-time market analysis and sophisticated decision-making using machine learning, statistics, and deep neural networks."]
                        }
                        technologiesUsed={
                            [
                                "Python",
                                "JavaScript",
                                "React",
                                "Flask",
                                "SQL",
                                "Deep Neural Networks"
                            ]
                        }
                        achievements={"Increased trading efficiency and performance, resulting in improved returns for users."}/>

                    <ProjectCard title={"Financial Market Predictions using Deep Neural Networks"}
                        subTitle={"Data Analysis and Deep Neural Nets"}
                        descriptions={
                            ["Developed a predictive model using deep neural networks to forecast financial market trends and make data-driven investment decisions.", "Utilized historical market data, technical indicators, and sentiment analysis to train the neural network and generate accurate predictions."]
                        }
                        technologiesUsed={
                            [
                                "Python",
                                "TensorFlow",
                                "PyTorch",
                                "SQL",
                                "Deep Neural Networks"
                            ]
                        }
                        achievements={"Achieved high prediction accuracy, outperforming traditional forecasting methods and enabling informed trading strategies."}/>

                    <ProjectCard title={"IT Systems Administrator and Support Engineer"}
                        subTitle={"Business Tech Support and IT Infrastructure Management"}
                        descriptions={
                            ["Led the management and maintenance of IT systems for an SME, including software and hardware solutions.", "Provided technical support and troubleshooting assistance to end-users, ensuring smooth operation of IT infrastructure and maximizing productivity."]
                        }
                        technologiesUsed={
                            [
                                "Python",
                                "JavaScript",
                                "React",
                                "SQL",
                                "Flask",
                                "System Administration"
                            ]
                        }
                        achievements={"Optimized system performance, implemented effective IT security measures, and delivered top-tier support to enable seamless business operations."}/>
                    <ProjectCard title={"E-commerce Platform with ERP Integration and Offline Shop POS"}
                        subTitle={"Classic Full Stack Programming"}
                        descriptions={
                            ["Built an end-to-end e-commerce platform that seamlessly integrates with an ERP system and offline shop POS.", "Automated accounting processes, inventory management, and order fulfillment to enhance operational efficiency and provide a smooth shopping experience for customers."]
                        }
                        technologiesUsed={
                            [
                                "Python",
                                "JavaScript",
                                "React",
                                "SQL",
                                "Flask",
                                "ERP Systems"
                            ]
                        }
                        achievements={"Streamlined business operations, improved inventory management, and enhanced customer satisfaction."}/>


                    <ProjectCard title={"Arbitrage Trading Bot with Deep Learning on Multiple Exchanges"}
                        subTitle={"Data Analysis and Deep Neural Nets"}
                        descriptions={
                            ["Created an advanced arbitrage trading bot that leverages deep learning techniques to exploit price discrepancies across multiple exchanges, supporting both futures and spot trading.", "Implemented robust risk management strategies and real-time market analysis to maximize profit potential."]
                        }
                        technologiesUsed={
                            ["Python", "TensorFlow", "Deep Learning", "Cryptocurrency Exchanges"]
                        }
                        achievements={"Generated consistent profits through automated arbitrage trading, optimizing trading strategies for futures and spot markets."}/>

                    <ProjectCard title={"DevOps Engineer and IT Infrastructure Manager"}
                        subTitle={"Business Tech Support and IT Infrastructure Management"}
                        descriptions={
                            ["Managed the IT infrastructure and provided comprehensive support for software and hardware solutions within an SME environment.", "Implemented DevOps practices to streamline deployment processes, optimize system performance, and ensure efficient management of IT resources."]
                        }
                        technologiesUsed={
                            [
                                "Python",
                                "JavaScript",
                                "React",
                                "SQL",
                                "Flask",
                                "DevOps Tools"
                            ]
                        }
                        achievements={"Enhanced system reliability, improved efficiency in software deployment, and streamlined IT operations for the company."}/>
                </Grid>
            </div>
        </div>
    )
}

function ProjectCard({
    title,
    subTitle,
    descriptions,
    technologiesUsed,
    achievements
}) {
    return (
        <Grid item
            xs={12}
            md={6}

            lg={4}
            style={
                {
                    background: "#fff",
                    zIndex: 1,
                    padding: "10px",
                }
        }>
            <Card style={
                {height: "100%"}
            }>
                <Typography.Title level={3}
                    style={
                        {marginBottom: "0px"}
                }>
                    {title}</Typography.Title>
                <Typography.Title level={4}
                    style={
                        {
                            marginTop: "0px",
                            fontSize: "18px"
                        }
                }>
                    {subTitle}</Typography.Title>
                {
                descriptions.map((description, index) => (
                    <Typography.Paragraph key={index}>
                        {description}</Typography.Paragraph>
                ))
            }
                <Typography.Paragraph>
                    <RainbowTags tagList={technologiesUsed}/>
                </Typography.Paragraph>
                <Typography.Paragraph>Achievements: {achievements}</Typography.Paragraph>
            </Card>
        </Grid>
    )
}
