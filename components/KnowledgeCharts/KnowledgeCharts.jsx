import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';
const generateXYData = (years, frameworks) => {
    const xData = [];
    const yData = [];
  
    const scaleFactor = Math.pow(frameworks.length, 1 / (years - 1));
    console.log(scaleFactor);
    for (let i = 0; i < years; i++) {
      const frameworksCount = Math.round(Math.pow(scaleFactor, i));
      xData.push(i + 1);
      yData.push(frameworksCount);
    }
  
    return { x: xData, y: yData };
};

const myLanguages = [
    "PHP",
    "JavaScript",
    "HTML",
    "CSS",
    "bash",
    "SQL",
    "JSON",
    "Python",
    "PowerShell",
    "TypeScript",
    "Cython",
    "JSX",
    "C#"
]
const myFrameworks = [
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
const xyData = generateXYData(myYearsOfWork.length, myFrameworks);
console.log(xyData);
const data = {
    labels: myYearsOfWork,
    datasets: [
        {
            label: 'Number of Frameworks / Technologies',
            data: xyData.y,
            borderWidth: 1
        }
    ]
}

console.log(data);
export default function KnowledgeCharts() {
    return (<div>
        <Line data={data}/>
    </div>)
}


