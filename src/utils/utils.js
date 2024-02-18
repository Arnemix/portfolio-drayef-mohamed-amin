import { BsFiletypeSql } from "react-icons/bs";
import { FaCode, FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaJava, FaPython, FaReact } from "react-icons/fa";
import { ImAirplane } from "react-icons/im";
import { GiTechnoHeart } from "react-icons/gi";
import { IoLogoJavascript } from "react-icons/io5";
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
        case "github":
            return <FaGithub />;
        case "développement" || "code":
            return <FaCode />;
        case "high-tech":
            return <GiTechnoHeart />;
        case "voyages":
            return <ImAirplane />;

        default:
            return null;
    }
}
