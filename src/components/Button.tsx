
import { twMerge } from 'tailwind-merge'


type Props = {
    text: string;
    className?: string
}

const Button = ({text, className}: Props) => {
  return (
   <div className="group w-fit h-fit p-[1px] bg-bgGradient rounded-[0.25rem] overflow-hidden borde transition-all duration-500">
    <button
     type="button"
     className={twMerge(
      `text-white font-[.9rem] font-normal h-[2.8rem] w-[9rem] rounded-[0.25rem] transition-all duration-500 flex items-center justify-center  relative before:z-20 z-0 group-hover:bg-primary , ${className}`
     )}
    >
     <span className="relative z-50">{text}</span>{" "}
    </button>
   </div>
  );
}

export default Button