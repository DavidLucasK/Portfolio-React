import Image from 'next/image'

import avatarImg from '../../../public/assets/avatar.png';

export default function HeaderRight() {
    return (
    <div className="header__right">
        <a href="https://www.linkedin.com/in/david-lucas-a21208176/" rel="noopener noreferrer" target="_blank">
          <Image
            src={avatarImg}
            className="header-img"
            alt="David Lucas"
          />
        </a>
    </div>
    )
}