import styles from './loading.module.css'
import Image from 'next/image'

const Loading = () => {
  return (
    <div className={`${styles.loading}`}>
        <Image                 
            priority
            src="/images/tjoblogo.png"
            width={208}
            height={8}
            alt='logo'
        />
    </div>
  )
}

export default Loading