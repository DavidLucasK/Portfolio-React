import Image from 'next/image';

export default function MobileItens() {
    return(
        <ul>
          <li className="mobile__item">
            <div className="image-container">
              <Image src="/assets/react.svg" alt="React-Native" width={50} height={50} quality={100} />
            </div>
            <h3>React Native</h3>
          </li>
          <li className="mobile__item">
            <div className="image-container">
              <Image src="/assets/android-studio.png" alt="Android-Studio" width={50} height={50} quality={100} />
            </div>
            <h3>Android Studio</h3>
          </li>
        </ul>
    )
}