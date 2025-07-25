import { PersonaIcon, FileForgeIcon, MomentsIcon} from "./ui/ProjectIcons";

interface Project {
  title: string;
  desc: string;
  link: string;
  icon: React.ComponentType; // Store the component itself, not JSX
}

interface Projects {
  [key: number]: Project;
}

const ProjectData: Projects = {
  1: {
    title: 'File-Forge',
    desc: 'Say goodbye to resizing stress and heavy uploads — File-Forge is your AI media sidekick for perfect crops, quick video compression, and effortless global sharing.',
    link: 'https://file-forge-psi.vercel.app/home',
    icon: FileForgeIcon,
  },
  2: {
    title: 'PersonAi',
    desc: 'Ditch the dull notes. Meet PersonAi: your smart, free second brain that remembers, summarizes, and thinks with you.',
    link: 'https://personai-rho.vercel.app/',
    icon: PersonaIcon,
  },
  3: {
    title: 'Moments',
    desc: 'Say goodbye to laggy feeds and boring scrolls — Moments is your smooth, secure, real-time social space where likes, comments, and connections happen instantly and effortlessly.',
    link: 'https://github.com/HarsaWarrior/Moments',
    icon: MomentsIcon,
  }
};

export default ProjectData;
