import Image from "next/image"
import styles from './avatar.module.css'

export const Avatar = ({name, imageSrc}) => {
    return(<ul className={styles.ul_format}>
        <li>
            <Image 
            src={imageSrc} 
            width={32} 
            height={32} 
            alt={`Image do(a) ${name}`}
            />
        </li>
        <li>
            @{name}
        </li>
    </ul>
    )
}

export default Avatar; 