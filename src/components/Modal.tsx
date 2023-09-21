


type ModalProps = {
  active: boolean;
  children: React.ReactNode
}

const Modal = ({active, children}: ModalProps) => {


 return (
  <section className={`fixed top-0 left-0  w-full h-full bg-[rgba(21,14,40,0.93)] z-[300] flex justify-center items-center max-sm:px-4 transition-all duration-300 ${active ? 'block' : 'hidden'}`}>
   <div className={`max-w-[600px] w-full border border-tertiary bg-rgba(255,255,255,0.01)] rounded-[.3rem] p-3 py-6 md:py-8 md:px-7 lg:px-16  transition-all duration-300 ${active ? 'scale-100' : 'scale-0'} origin-center delay-200`}>
    {children}
   </div>
  </section>
 );
};

export default Modal;
