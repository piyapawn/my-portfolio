import { ProfileType } from "@/app/model/DataType";

const ProfileData: ProfileType = {
    imgSrc: "/image/profile-img.jpg",
    name: "Miss Piyaporn Saengja",
    email: "opal.piyapawn@gmail.com",
    description: "<p>Developer with 2 years of experience in developing web applications.<br /><br />Motivated andenthusiastic developer with a strong eagerness to learn and grow alongside aforward-thinking company. Passionate about writing clean, high-quality code and continuouslyimproving technical skills. A dedicated team player who thrives in collaborative environments andis committed to delivering reliable, maintainable solutions that align with business goals. </p>",
    education: [
        {
            collegeName: "King Mongkut's Institute of Technology Ladkrabang",
            program: "Information Technology",
            degree: "Bachelor of Information Technology",
            major: "Multimedia and Game Development",
        }
    ],
    workExp: [
        {
            company: "AXONS (CPF IT Center Co., Ltd.)",
            role: "Developer",
            period: "16 June 2023 - Present",
            stack: "React.js, Next.js, Typescript, Material-UI, Tailwind CSS, Java Spring Boot, RESTful API",
            project: "<p>Product Catalog and Management Web Application<br/>• Developed a responsive and user-friendly web application using React.js and TypeScript for<br/>managing product catalogs.<br/>• Integrated RESTful APIs for seamless communication between front-end and back-end systems.<br/>• Implemented features to create, edit, and update product information, connected to backend<br/>services via Java Spring Boot APIs.<br/>• Enhanced UI/UX with modern, responsive design using Material-UI and Tailwind CSS.<br/>• Used Git for version control and collaborated within a Scrum team to ensure timely and efficient<br/>delivery.<br/>Workflow Management System<br/>• Built a configurable workflow management platform to support operations across departments<br/>and sub-units.<br/>• Developed the front-end using React.js and TypeScript, ensuring a dynamic and intuitive user<br/>experience.<br/>• Created backend services with Java Spring Boot, and implemented Node.js APIs for server-side<br/>tasks such as file uploads.<br/>• Supported features like approval flow customization, role-based assignments, and workflow<br/>tracking.<br/></p>",
            isCurrentJob: true,
        },
        {
            company: "Yannix Co., Ltd.",
            role: "Full stack developer (Intern)",
            period: "August 2022 - November 2022 (3 months)",
            stack: "Vue.js, Python",
            project: "<p>Experienced Vue.js Developer with a solid background in building and improving in-house software solutions. Proficient in developing new features, optimizing performance, and troubleshooting to ensure smooth functionality. Skilled in agile methodologies, collaborating within Scrum teams to deliver high-quality, business-aligned solutions. Strong expertise in Vue.js (frontend) and Python (backend). </p>",
            isCurrentJob: false,
        }
    ]
}

export default ProfileData;
