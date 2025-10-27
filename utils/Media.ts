import type { IconType } from "react-icons";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

interface Props {
  label: string;
  link: string;
  icon: IconType;
}

const SocialMedias: Props[] = [
  {label: 'Facebook', link: 'https://www.facebook.com/oudompanha.2108', icon: FaFacebook},
  {label: 'Telegram', link: 'https://t.me/OudomPanha_Chea', icon: FaTelegram},
  {label: 'LinkedIn', link: 'https://www.linkedin.com/in/oudompanha-chea-689127336/', icon: FaLinkedin},
  {label: 'Github', link: 'https://github.com/OudomPanhaChea', icon: FaGithub},
]

export default SocialMedias