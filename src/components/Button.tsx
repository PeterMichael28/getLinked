
import { twMerge } from 'tailwind-merge'


type Props = {
    text: string;
    className?: string
}

const Button = ({text, className}: Props) => {
  return (
    <button type='button' className={twMerge(`text-white font-[.9rem] font-normal bg-bgGradient h-[2.8rem] w-[9rem] flex items-center justify-center rounded-[0.25rem] relative before:absolute before:left-0 before:-translate-x-40 before:w-full before:h-full before:top-0 before:transition-all before:duration-1000 hover:before:translate-x-40 before:bg-btnHover overflow-hidden before:z-20 z-0, ${className}`)}><span className='relative z-50'>{text}</span> </button>
  )
}

export default Button