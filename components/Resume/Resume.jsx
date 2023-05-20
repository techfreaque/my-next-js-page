import {
    Card,
    Space,
    Tag,
    Timeline,
    Typography
} from 'antd';
import {titleIds} from '../NavBar/Header';
import {Grid} from '@mui/material';
import {RainbowTags} from '../RainbowTags';

const Resume = ({isMobile}) => {
    return (
        <div style={
                {
                    // background: "#eee"
                    // background: `url(${
                    //     background.src
                    // })`,
                    // backgroundPosition: "",
                    // backgroundRepeat: "repeat",
                    // backgroundSize: "600px auto",
                    // zIndex: 1
                    // padding: "0 30px",
                    marginLeft: "20px",
                    marginRight: "20px",

                    position: "relative"
                }
            }
            className="anchor"

            id={
                titleIds.myResume
        }>

            <div style={
                {
                    maxWidth: "1650px",
                    margin: "auto"
                }
            }>
                <Grid container>

                    <Grid item
                        style={
                            {margin: "30px 0"}
                        }
                        xs={12}>
                        <Typography.Title level={2}
                            style={
                                {textAlign: 'center'}
                        }>
                            My Resume
                        </Typography.Title>
                    </Grid>
                </Grid>
                <Timeline mode={
                        isMobile ? undefined : "alternate"
                    }
                    style={
                        {zIndex: 1}
                    }
                    items={
                        [
                            resumeJob(
                                {
                                    jobTitle: "Full Stack Trading Bot Developer",
                                    jobCompany: "a42 trading solutions",
                                    jobTime: '2018-3 - today',

                                    isMobile,
                                    jobTasks: [
                                        "Architected and implemented AI-driven algorithms for real-time market analysis, leveraging advanced pattern recognition and predictive modeling techniques to uncover lucrative trading opportunities.", "Revamped open-source trading bot libraries like ccxt and OctoBot by infusing them with cutting-edge AI capabilities, enabling sophisticated decision-making and unlocking superior trading performance.", "Engineered an intuitive and user-friendly platform that seamlessly integrated AI and data science methodologies, empowering strategy designers and AI practitioners to harness the full potential of AI in their trading strategies.", "Spearheaded the development of an automated hedge fund that pushed the boundaries of AI-driven strategies, harnessing state-of-the-art technologies to deliver consistent and remarkable returns for users.",
                                    ],
                                    jobTags: [
                                        "Python",
                                        "JavaScript",
                                        "React.js",
                                        "SQL",
                                        "Flask",
                                        "TensorFlow",
                                        "PyTorch",
                                        "WebSocket",
                                        "GraphQL",
                                        "REST API",
                                        "Deep Neural Network",
                                    ]
                                }
                            ),
                            resumeJob(
                                {
                                    jobTitle: "Business Support Engineer - Team Leader",
                                    jobCompany: "Samsung Switzerland",
                                    jobTime: '2018-9 - 2020-9',

                                    isMobile,
                                    jobTasks: [

                                        "Orchestrated and mentored a highly skilled Swiss Business Tech Support Team, expertly handling software troubleshooting and orchestrating seamless hardware repairs for Samsung's prestigious business product line.",
                                        "Demonstrated unparalleled problem-solving prowess by actively collaborating with global colleagues and product/feature developer support teams, resolving intricate issues through bug fixes and novel feature implementations.",
                                        "Championed a culture of continuous learning and growth by regularly conducting advanced training courses on supported products and cutting-edge industry knowledge.",
                                        "Elevated service quality and reduced escalations by implementing comprehensive training programs, equipping the support team with the skills and knowledge to provide exceptional customer experiences.",
                                        'Streamlined processes and achieved remarkable KPI improvements, focusing on metrics such as "one-shot resolution rate," "response time," and "resolution time," enhancing overall customer satisfaction.'

                                    ],
                                    jobTags: [
                                        "Python",
                                        "JavaScript",
                                        "React.js",
                                        "SQL",
                                        "REST API",
                                        "Git",
                                        "Docker"
                                    ]
                                }
                            ),
                            resumeJob(
                                {
                                    jobTitle: "Tech Support Engineer - Team Leader - Administrator",
                                    jobCompany: "netsepp KG, Hallein (meanwhile viybs.com)",
                                    jobTime: '2016-3 - 2019-1',
                                    isMobile,
                                    jobTasks: [
                                        "Spearheaded a transformative overhaul of internal business processes and workflows within the ERP system, meticulously analyzing, developing, and optimizing each aspect to maximize efficiency and productivity.", "Led a proficient support engineering team, orchestrating seamless installation, configuration, maintenance, repair, and warranty management for a diverse range of hardware and software solutions.", "Crafted comprehensive technical documentation, instructions, and training materials to empower end-users and team members with the knowledge required for effective utilization of solutions.", "Delivered exceptional IT hardware and software consultancy services, conducting meticulous requirements analyses and providing top-tier administration services to private customers and SMEs.",
                                    ],
                                    jobTags: [
                                        "Python",
                                        "JavaScript",
                                        "React.js",
                                        "SQL",
                                        "Flask",
                                        "Odoo",
                                        "Docker",
                                        "Git",
                                        "REST API",
                                    ]
                                }
                            ),
                            resumeJob(
                                {
                                    jobTitle: "Tech Support Engineer - Team Leader - Administrator",
                                    jobCompany: "techfreaque Salzburg (meanwhile www.notebook-repair-corner.at)",
                                    jobTime: '2013-8 - 2016-9',

                                    isMobile,
                                    jobTasks: [
                                        "Engineered an optimized and robust internal infrastructure, meticulously fine-tuning business processes and workflows to maximize productivity and operational excellence.", "Guided and mentored a skilled first and second-level support team, delivering prompt and effective assistance through various communication channels, ensuring seamless customer experiences.", "Mastered the art of configuring, maintaining, repairing, and managing warranties for a wide array of devices, encompassing a diverse technological landscape.", "Authored detailed technical documentation and user manuals, facilitating efficient knowledge transfer among team members and empowering end-users with the skills required for effective utilization of solutions.",
                                    ],
                                    jobTags: [
                                        "ERP Systems",
                                        "Workflow Optimization",
                                        "Web Development (PHP, HTML, CSS, JavaScript)",
                                        "Support Engineering",
                                        "Scripting (Bash, PowerShell, Python)",
                                    ]
                                }
                            ),
                            resumeJob(
                                {
                                    jobTitle: "Tech Support Engineer - Team Leader - Administrator",
                                    jobCompany: "Expert Service, Salzburg (meanwhile www.notebook-repair-corner.at)",
                                    jobTime: '2013-3 - 2013-8',

                                    isMobile,
                                    jobTasks: [
                                        "Spearheaded the dynamic development of infrastructure, meticulously mapping and optimizing business processes within the ERP system, laying the foundation for streamlined and efficient operations.", "Orchestrated the planning, acquisition, and seamless implementation of cutting-edge infrastructure for technical service shops, bolstering service capabilities and enhancing customer satisfaction.", "Led a proficient technical service team, expertly handling repairs and support for an extensive range of devices, including smartphones, tablets, computers, servers, and game consoles, both on-site and remotely, catering to diverse private and business customers.",
                                    ],
                                    jobTags: [
                                        "Infrastructure Development",
                                        "Technical Service",
                                        "Web Development (PHP, HTML, CSS, JavaScript)",
                                        "Docker",
                                        "Programming Troubleshooting",
                                        "Scripting (Bash, Python)",
                                    ]
                                }
                            ),
                            resumeJob(
                                {
                                    jobTitle: "Tech Support Engineer - Team Leader - Administrator",
                                    jobCompany: "Kaya KG, Salzburg",
                                    jobTime: '2012-1 - 2013-2',

                                    isMobile,
                                    jobTasks: [
                                        "Innovatively implemented a robust ticket system, ushering in a new era of streamlined issue tracking and management, ensuring prompt and efficient resolution of customer queries.", "Led the development of the company's captivating website, skillfully integrating modern design principles and seamless user experience to enhance brand visibility and customer engagement.", "Provided exceptional second-level support through telephone, remote maintenance, and in-shop interactions, effortlessly resolving complex issues and delivering outstanding customer experiences.", "Orchestrated the installation, configuration, maintenance, repair, and warranty management of computer, tablet, and smartphone hardware, software, and peripherals, meticulously ensuring optimal performance and longevity."
                                    ],
                                    jobTags: [
                                        "Ticket System Implementation",
                                        "Website Development (PHP, HTML, CSS, JavaScript)",
                                        "Second-level Support",
                                        "Hardware and Software Maintenance",
                                        "Scripting (Bash, Python)",
                                    ]
                                }
                            )
                        ]
                    }/>
            </div>
            <div style={
                {
                    position: "absolute",
                    top: "0",
                    height: "100%",
                    // height: "calc(100% - 1px)",

                    width: "100%",
                    zIndex: 0,
                    marginTop: "-100px",
                    overflow: "hidden"
                }
            }>
                <div className="pyro"
                    style={
                        {
                            top: "0",
                            height: "100%",
                            width: "100%",
                            zIndex: 0
                        }
                }>
                    <div className="before"></div>
                    <div className="after"></div>
                </div>
            </div>
        </div>
    );
};
export default Resume;


function resumeJob({
    jobTitle,
    jobCompany,
    jobTime,
    jobTasks,
    jobTags,
    isMobile
}) {
    return {
        label: isMobile ? undefined : jobTime,
        children: (
            <Card style={
                {
                    textAlign: "left",
                    background: "#fff",
                    zIndex: 1
                }
            }>
                <Typography.Title level={3}
                    style={
                        {
                            marginTop: "0px",
                            marginBottom: "0px"
                        }
                }>
                    {jobTitle} </Typography.Title>
                {
                isMobile && <Typography.Title level={4}
                    style={
                        {
                            marginTop: "0px",
                            marginBottom: "0px"
                        }
                }>
                    {jobTime} </Typography.Title>
            }
                <Typography.Title level={4}
                    style={
                        {marginTop: "0px"}
                }>
                    {jobCompany} </Typography.Title>
                <ul> {
                    jobTasks.map((task, index) => (
                        <li key={index}>
                            {task}</li>

                    ))
                }
                    <RainbowTags tagList={jobTags}/>
                </ul>
            </Card>
        )
    }
}
