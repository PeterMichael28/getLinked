import { twMerge } from 'tailwind-merge'

type Props = {
    type?: string;
    value: string;
    placeholder: string;
    setValue: (val: string) => void;
    textarea?: boolean;
    name: string;
    classNames?: string,
    required?: boolean
}

const Input = ({type, value, placeholder, setValue, textarea, name, classNames, required}: Props) => {
  return (
      <> { textarea ?
          <textarea id={name} placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} rows={4} name={name} className="rounded-[0.25rem] border border-white bg-[rgba(255,255,255,0.03)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] placeholder:text-white placeholder:text-[.8rem] px-4 py-2 w-full outline-none text-[.7rem]" required={required}></textarea> 
         :
         <input type={type || 'text'} className={twMerge(`rounded-[0.25rem] border border-white bg-[rgba(255,255,255,0.03)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25] placeholder:text-white placeholder:text-[.8rem] px-4 py-3 w-full outline-none text-[.7rem], ${classNames}`)} name={name} id={name} placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} required={required} maxLength={(type && type === 'tel') ? 13 : undefined} />
      }
          
      </>
  )
}

export default Input