
const Messages = (message) => {
  return (
    <div>
        <span className="fixed top-5 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-md shadow-md text-xs transition-opacity duration-500 w-[30vw] text-center">
    Copiado!
  </span>
  {message.includes("")}
    </div>
  )
}

export default Messages