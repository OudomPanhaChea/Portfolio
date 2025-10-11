import { HiOutlineHome, HiHome } from "react-icons/hi2";
import { FaRegUser, FaUser } from "react-icons/fa";
import { RiFolderLine, RiFolderFill } from "react-icons/ri";
import { GiSkills } from "react-icons/gi";
import { MdOutlineEmail, MdEmail } from "react-icons/md";
import type { IconType } from "react-icons";

interface RoutesType {
  label: string;
  link: string;
  icon: IconType;
  fillIcon: IconType;
  iconSize: number;
}

const ROUTES: RoutesType[] = [
  { label: "Home", link: "/", icon: HiOutlineHome, fillIcon: HiHome, iconSize: 18 },
  { label: "About", link: "#about", icon: FaRegUser, fillIcon: FaUser, iconSize: 16 },
  { label: "Skills", link: "#skills", icon: GiSkills, fillIcon: GiSkills, iconSize: 17 },
  { label: "Projects", link: "#projects", icon: RiFolderLine, fillIcon: RiFolderFill, iconSize: 17 },
  { label: "Contact", link: "#contact", icon: MdOutlineEmail, fillIcon: MdEmail, iconSize: 18 },
];

export default ROUTES