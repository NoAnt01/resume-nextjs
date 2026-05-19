import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/sample_tux.png';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '노성겸',
    small: '(NOH SEONGGYEOM)',
  },
  contact: [
    {
      title: 'noant1101@gmail.com',
      link: 'mailto:noant1101@gmail.com',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://github.com/NoAnt01/resume-nextjs',
      icon: faGithub,
    },
  ],
  notice: {
    title:
      "Git&GitHub 실습중입니다.",
    icon: faBell,
  },
};

export default profile;
