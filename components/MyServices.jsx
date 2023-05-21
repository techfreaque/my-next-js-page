import {ClusterOutlined, ExperimentOutlined, FunctionOutlined} from "@ant-design/icons";
import {Grid} from "@mui/material";
import {Card, Typography} from "antd";
import {createElement} from "react";
import PageSection from "./PageSection";
import {titleIds} from "./NavBar/Header";
import {pageColors} from "./colorPalette";

export default function MyServices() {
    return (<PageSection id={
            titleIds.myServices
        }
        className="anchor"

        spacing={0}>
        <Grid item
            style={
                {marginBottom: "30px"}
            }
            xs={12}>
            <Typography.Title level={2}
                style={
                    {textAlign: 'center'}
            }>
                Unleashing Possibilities: Explore My Craft
            </Typography.Title>
            <Typography.Paragraph style={
                {
                    textAlign: 'center',
                    maxWidth: "880px",
                    margin: "auto"
                }
            }>
                As a full stack developer specializing in Python and JavaScript/React, I am dedicated to creating dynamic and immersive digital experiences.
                                                                With my expertise in both front-end and back-end development, I craft seamless user interfaces and build powerful functionality.
                                                                By leveraging the latest technologies and staying ahead of industry trends, I continuously push the boundaries of what is possible.
            </Typography.Paragraph>
        </Grid>
        <ServiceCard title={"Classic Full Stack Programming"}
            subTitle={"Classic Full Stack Programming with Python and JavaScript/React"}
            descriptions={
                ["Are you ready to bring your web application to life with a touch of innovation?", "I excel in classic full stack programming using Python and JavaScript/React, combining the best of both worlds to deliver exceptional results.", "From designing intuitive user interfaces to implementing robust backend systems, I ensure a seamless and engaging user experience."]
            }
            icon={FunctionOutlined}/>
        <ServiceCard title={"Data Alchemist"}
            subTitle={"Data Alchemist: Unleashing Insights with Deep Neural Nets and Predictions"}
            descriptions={
                ["Dive into the realm of data alchemy and discover the hidden treasures within your datasets.", "As a data analysis expert, I utilize the magic of deep neural networks to extract valuable insights and make accurate predictions.", "Whether it's uncovering patterns in vast datasets or creating predictive models, I leverage the power of data to unlock new possibilities."]
            }
            icon={ExperimentOutlined}/>
        <ServiceCard title={"DevOps Conjurer"}
            subTitle={"DevOps Conjurer: Crafting Seamless Applications and Managing Enchanting Infrastructures"}
            descriptions={
                ["Step into the realm of DevOps magic, where applications seamlessly come to life, and infrastructures are enchantingly managed.", "As a DevOps enthusiast, I bring together the powers of automation, containerization, and continuous integration to create robust and scalable systems.", "Explore my experience in managing DevOps processes and conjuring up enchanting infrastructures."]
            }
            icon={ClusterOutlined}/>
    </PageSection>)
}

function ServiceCard({title, subTitle, icon, descriptions}) {
    return (<Grid item
        xs={12}
        md={4}
        style={
            {
                padding: "10px"
            }
    }>
        <Card style={
            {
                height: "100%",
                zIndex: 1,
                background: "#fff"
            }
        }>
            <div style={
                {display: "flex"}
            }> {
                createElement(icon, {
                    style: {
                        fontSize: "80px",
                        margin: "auto",
                        color: pageColors.primary
                    }
                })
            } </div>
            <Typography.Title level={3}
                style={
                    {
                        textAlign: 'center',
                        marginTop: "10px",
                        marginBottom: "10px"
                    }
            }> {title} </Typography.Title>
            <Typography.Title level={4}
                style={
                    {
                        textAlign: 'center',
                        marginTop: "0px",
                        fontSize: "16px"
                    }
            }> {subTitle} </Typography.Title>
            {
            descriptions.map((description, index) => (<Typography.Paragraph style={
                    {textAlign: 'center'}
                }
                key={index}> {description} </Typography.Paragraph>))
        } </Card>
    </Grid>)
}
