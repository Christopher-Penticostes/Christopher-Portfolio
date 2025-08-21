import { IoCloseOutline } from "react-icons/io5";

export default function ModalContact({ open, onClose, children }) {
  return (
    <div onClick={onClose} className={`z-50 fixed inset-0 flex justify-center items-center transition-colors ${open ? "visible bg-black/20" : "invisible"}`}>
      <div onClick={(e) => e.stopPropagation()} className={`relative bg-white rounded-lg shadow p-5 transition-all ease-in-out duration-300 ${open ? "scale-100 opacity-100" : "scale-90 opacity-0"}`}>
        <button onClick={onClose} className="absolute top-2 right-2 p-[5px] border-2 rounded-full text-gray-400 bg-white ease-in-out duration-300 hover:shadow-md hover:text-[#35495C]">
          <IoCloseOutline size={25} />
        </button>
        {children}
      </div>
    </div>
  )
}