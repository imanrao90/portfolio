function Button({ title, onClick, align, font }) {
  return (
    <div className={`flex flex-col pb-10 justify-center items-center text-center ${align === 'left' && 'md:items-start md:text-left'} bg-[#c2c5cc]`}>
      <h1 onClick={onClick} className={`text-md border border-gray-500 text-gray-700 py-2 px-3 cursor-pointer hover:bg-gray-100 md:text-[40px ${font || 'font-playfair'}]`}>{title}</h1>
      {/* <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-174">{subTitle}</p> */}
    </div>
  )
}

export default Button

