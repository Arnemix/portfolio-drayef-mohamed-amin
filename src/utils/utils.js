import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";
import { FaPython } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiGnubash } from "react-icons/si";

export function getAge(dateOfBirth) {
    const today = new Date();
    const birthday = new Date(dateOfBirth);
    let age = today.getFullYear() - birthday.getFullYear();
    const currentMonth = today.getMonth();
    const birthMonth = birthday.getMonth();
    const currentDay = today.getDate();
    const birthDay = birthday.getDate();

    // If the birthday hasn't passed yet this year, decrease the age by 1
    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
        age--;
    }

    return age;
}

export function getIcon(x) {
    switch (x.toLowerCase()) {
        case "java":
            return <FaJava />;
        case "javascript":
            return <IoLogoJavascript />;
        case "html":
            return <FaHtml5 />;
        case "css":
            return <FaCss3Alt />;
        case "react":
            return <FaReact />;
        case "sql":
            return <BsFiletypeSql />;
        case "python":
            return <FaPython />;
        case "git":
            return <FaGitAlt />;
        case "bash":
            return <SiGnubash />;

        default:
            return null;
    }
}
