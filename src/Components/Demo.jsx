import { useState,useEffect } from "react"
import { copy, linkIcon, loader, tick } from "../assets";

const Demo = () => {
  const [article, setArticle] = useState({
    url :'hello',
    summary:'',
  });

  const handleSubmit = async(e)=>{
    alert('submited')
  }
  return (
    <section className="mt-16 w-full max-w-xl">
       <div className="flex flex-col w-full gap-2">
         <form className="flex justify-center items-center" onSubmit={handleSubmit}
         >
         <img
            src={linkIcon}
            alt='link-icon'
            className='absolute left-0 my-2 ml-3 w-6'
          />

        <input
            type="text"
            placeholder='Paste the article link'
            value={article.url}
            onChange={(e) => {
              console.log("trigreed !")
              setArticle({...article, url: e.target.value })}}
            required
            className='h-32'
          />

          <button
          type="submit"
          className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700 "
          >
          ↵ 
          </button>
         </form>
       </div>
    </section>
  ) 
}

export default Demo