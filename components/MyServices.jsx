import {ClusterOutlined, ExperimentOutlined, FunctionOutlined} from "@ant-design/icons";
import {Grid} from "@mui/material";
import {Card, Typography} from "antd";
import {createElement} from "react";
import PageSection from "./PageSection";
import {titleIds} from "./NavBar/Header";
import { pageColors } from "./colorPalette";

export default function MyServices() {
    return (
        <PageSection id={
            titleIds.myServices
        }
        className="anchor"
            
        spacing={0}
        >
            <Grid item
                style={
                    {
                        marginBottom: "30px"
                    }
                }
                xs={12}>
                <Typography.Title level={2}
                    style={
                        {textAlign: 'center'}
                }>
                    Unleashing Possibilities: Explore My Craft
                </Typography.Title>
            </Grid>
            <ServiceCard title={"Classic Full Stack Programming with Python and JavaScript/React"}
                descriptions={
                    ["Are you ready to bring your web application to life with a touch of innovation?", "As a full stack developer specializing in Python and JavaScript/React, I create dynamic and immersive digital experiences.", "With my expertise in both front-end and back-end development, I craft seamless user interfaces and build powerful functionality.", "Check out some of my projects below that demonstrate the synergy between Python and JavaScript/React."]
                }
                icon={FunctionOutlined}/>
            <ServiceCard title={"Data Alchemist: Unleashing Insights with Deep Neural Nets and Predictions"}
                descriptions={
                    ["Dive into the realm of data alchemy and discover the hidden treasures within your datasets.", "As a data analysis expert, I use the magic of deep neural networks to extract valuable insights and make accurate predictions.", "From uncovering patterns in vast datasets to creating predictive models,", "Explore some of my projects that showcase the wizardry of data alchemy."]
                }
                icon={ExperimentOutlined}/>
            <ServiceCard title={"DevOps Conjurer: Crafting Seamless Applications and Managing Enchanting Infrastructures"}
                descriptions={
                    ["Step into the realm of DevOps magic, where applications seamlessly come to life, and infrastructures are enchantingly managed.", "As a DevOps enthusiast, I bring together the powers of automation, containerization, and continuous integration to create robust and scalable systems.", "Explore my experience in managing DevOps processes and conjuring up enchanting infrastructures."]
                }
                icon={ClusterOutlined}/>
        </PageSection>
    )
}

function ServiceCard({title, icon, descriptions}) {
    return (
        <Grid item
            xs={12}
            md={4}
            style={
                {
                    paddingLeft: "10px",
                    paddingRight: "10px",
                }}
        >
            <Card style={{ height:  "100%", zIndex: 1, background: "#fff"}}>
                <div style={
                    {display: "flex"}
                }>
                    {
                    createElement(icon, {
                        style: {
                            fontSize: "80px",
                            margin: "auto",
                            color: pageColors.primary,
                        }
                    })
                } </div>
                <Typography.Title level={3}
                    style={
                        {textAlign: 'center'}
                }>
                    {title} </Typography.Title>
                {
                descriptions.map((description, index) => (
                    <Typography.Paragraph key={index}>
                        {description} </Typography.Paragraph>
                ))
            } </Card>
        </Grid>
    )
}
