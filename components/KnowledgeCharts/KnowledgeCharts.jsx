import {Line} from "react-chartjs-2";
// required
import Chart from 'chart.js/auto';
import {Typography} from "antd";
import {titleIds} from "../NavBar/Header";

const generateXYData = (years, frameworks) => {
    const xData = [];
    const yData = [];

    const scaleFactor = frameworks.length / (years - 1);
    for (let i = 0; i < years; i++) {
        const frameworksCount = Math.round(scaleFactor * i);
        xData.push(i + 1);
        yData.push(frameworksCount);
    }

    return {x: xData, y: yData};
};

const myLanguages = [
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "bash",
    "SQL",
    "XML",
    "Python",
    "JSON",
    "yaml",
    "PowerShell",
    "TypeScript",
    "Cython",
    "JSX",
    "Go",
]
const myTechnologies = [
    "Troubleshooting",
    "Virus and malware removal",
    "Software issues",
    "Hardware issues",
    "Network connectivity problems",
    "User account management",
    "Device drivers",
    "Email configuration and troubleshooting",
    "Printer setup and troubleshooting",
    "Port Forwarding",
    "TCP/IP stack",
    "DHCP",
    "DMZ",
    "NTP",
    "NAT",
    "Operating system support (Windows)",
    "Nginx",
    "MySQL",
    "Joomla",
    "DNS",
    "SSL/TLS",
    "Bootstrap",
    "Operating system support (macOS, Android, iOS)",
    "Computer repair",
    "Laptop repair",
    "Smartphone repair",
    "Tablet repair",
    "Digital camera repair",
    "Hardware diagnostics",
    "Screen replacement",
    "Battery replacement",
    "Keyboard repair",
    "Data recovery",
    "Motherboard repair",
    "Hard drive replacement",
    "Memory upgrade",
    "Power supply repair",
    "Charging port repair",
    "Speaker repair",
    "Camera lens repair",
    "Water damage repair",
    "GNU/Linux",
    "SSH",
    "VPN",
    "UFW",
    "WordPress",
    "Docker",
    "fail2ban",
    "OAuth2",
    "jQuery",
    "Odoo",
    "PostgreSQL",
    "Operating system support (Linux)",
    "Mobile device support",
    "AWS (Amazon Web Services)",
    "RESTful APIs",
    "IP routing",
    "OAuth",
    "Node.js",
    "Flask",
    "SQLAlchemy",
    "JWT (JSON Web Tokens)",
    "Load Balancing",
    "MongoDB",
    "WebSockets",
    "Selenium",
    "numpy",
    "pandas",
    "React.js",
    "Git",
    "pytest",
    "Express.js",
    "TensorFlow",
    "PyTorch",
    "Keras",
    "Redis",
    "Django",
    "JUnit",
    "GraphQL",
]

const iKnowItAll = [
    "",
    "I know nothing",
    "I know a little bit",
    "It starts to make sense",
    "It's not that hard at all",
    "I'm an expert",
    "I think there is more to it",
    "I need to learn a lot more",
    "Do I even know anything?",
    "I know that I know nothing",
    "I'm still learning, but I'm getting there",
    "I have a solid understanding",
    "Trust me it's complicated"
]

const myYearsOfWork = [
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
]
const xyTechnologiesData = generateXYData(myYearsOfWork.length, myTechnologies);
const yHowMuchIthinkIknow = [
    0,
    2,
    4,
    6,
    8,
    12,
    10,
    7,
    6,
    5,
    6,
    7,
    8
]
const yLanguages = [
    0,
    1,
    3,
    5,
    6,
    7,
    9,
    10,
    11,
    12,
    13,
    14,
    15
]
const data = {
    labels: myYearsOfWork,
    datasets: [
        {
            label: 'Frameworks / Technologies',
            data: xyTechnologiesData.y,
            borderWidth: 1,
            yAxisID: 'y'
        }, {
            label: '"Programming" Languages',
            data: yLanguages,
            borderWidth: 1,
            yAxisID: 'y1'
        }, {
            label: 'How much I think I know',
            data: yHowMuchIthinkIknow,
            borderWidth: 1,
            yAxisID: 'y1'
        },
    ]
}
const tooltipText = (tooltipItems) => {
    return tooltipItems.map((tooltipItem) => {
        if (tooltipItem ?. datasetIndex === 0) {
            const endIndex = tooltipItem.parsed.y
            const technologies = myTechnologies.slice(0, endIndex)
            const maxLineLength = 100;
            let currentLineLength = 0;
            let result = "";
            for (let i = 0; i < technologies.length; i++) {
                const technology = technologies[i];
                const technologyLength = technology.length;
                if (currentLineLength + technologyLength <= maxLineLength) {
                    result += technology;
                    currentLineLength += technologyLength;
                } else {
                    result += "\n" + technology;
                    currentLineLength = technologyLength;
                }
                if (i !== technologies.length - 1) {
                    result += ", ";
                    currentLineLength += 2;
                }
            }
            return result
        } else if (tooltipItem ?. datasetIndex === 1) {
            return myLanguages.slice(0, tooltipItem.parsed.y).join("\n");
        } else if (tooltipItem ?. datasetIndex === 2) {
            return iKnowItAll[tooltipItem.parsed.x]
        }
        return ""
    }).join("\n")
};
const options = {
    scales: {
        y: { // type: 'linear',
            display: true,
            position: 'left'
        },
        y1: { // type: 'linear',
            display: true,
            position: 'right',

            // grid line settings
            grid: {
                drawOnChartArea: false, // only want the grid lines for one axis to show up
            }
        }
    },
    interaction: {
        intersect: false,
        mode: 'nearest'
    },
    plugins: {
        tooltip: {
            callbacks: {
                footer: tooltipText
            }
        }
    }
}


export default function KnowledgeCharts() {
    return (
        <div className="anchor"
            id={
                titleIds.mySkills
            }
            style={
                {
                    zIndex: 1,
                    background: "#fff",
                    position: "relative",
                    maxWidth: "1850px",
                    margin: "auto",
                    paddingTop: "15px",
                    paddingLeft: "40px",
                    paddingRight: "40px"
                }
        }>
            <Typography.Title level={2}
                style={
                    {textAlign: "center"}
            }>My Skills</Typography.Title>
            <Line data={data}
                options={options}/>
        </div>
    )
}
