import React,{useState,useEffect} from 'react'

interface Ptype{
    site:string
}

function SiteImage({site}:Ptype) {
    const [image, setimage] = useState<string>("")
    useEffect(() => {
        if(site=="무신사")
        {
            setimage("data:image/png;base64,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")
        }
        else if(site=="hiver")
        {
            setimage("https://pbs.twimg.com/profile_images/1323506618022064128/F8I5eKW6_400x400.jpg")
        }
        else if(site=="lookpin")
        {
            setimage("https://play-lh.googleusercontent.com/nvH1MzU9vTQ9lj1I6FsZS_DGbl4yIv2kTiRLMdYeezp57ZJAj6FrPa7gfSxkW0n_qOuT")   
        }
    }, [])
    
    



    return(
        <div>
            <img
                src={image}
                className=""
            />
        </div>
    )
    
   


  
}

export default SiteImage