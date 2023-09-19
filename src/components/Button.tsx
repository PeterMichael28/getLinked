
import { twMerge } from 'tailwind-merge'


type Props = {
    text: string;
    className?: string
}

const Button = ({text, className}: Props) => {
  return (
    <button type='button' className={twMerge(`, ${className} buttons`)}><span className='relative z-50'>{text}</span> </button>
  )
}

export default Button