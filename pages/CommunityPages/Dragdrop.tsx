import React,{useState} from 'react'
import Picture from './Picture'
import {useDrop} from "react-dnd"

interface itemprops{
    id:number,
    type:string
}

function Dragdrop() {
    const dragList=[ //찜목록 배열
        {
            id : 1,
            url: "https://image.msscdn.net/images/goods_img/20220303/2396645/2396645_4_500.jpg?t=20220930095511",
            color:"green",
            type:"상의"
            
        },
        {
            id : 2,
            url: "https://image.msscdn.net/images/goods_img/20220125/2326935/2326935_11_500.jpg?t=20220819135542",
            color:"gray",
            type:"상의"
            
        },
        {
            id : 3,
            url: "https://image.msscdn.net/images/goods_img/20220818/2723767/2723767_8_500.jpg?t=20221007092004",
            color:"brown",
            type:"상의"
            
        },
        {
            id : 4,
            url: "https://image.msscdn.net/images/goods_img/20210826/2092852/2092852_4_500.jpg?t=20221012160640",
            color:"gray",
            type:"하의"
            
        },
        {
            id : 5,
            url: "https://image.msscdn.net/images/goods_img/20210903/2107115/2107115_1_500.jpg?t=20210903033534",
            color:"black",
            type:"하의"
            
        },
        {
            id : 6,
            url: "https://image.msscdn.net/images/goods_img/20191105/1214193/1214193_4_500.jpg?t=20210826143146",
            color:"black",
            type:"모자"
            
        },
        {
            id : 7,
            url: "https://image.msscdn.net/images/goods_img/20211223/2280117/2280117_1_500.jpg?t=20211223113028",
            color:"green",
            type:"모자"
            
        },
        {
            id : 8,
            url: "https://image.msscdn.net/images/goods_img/20180703/810034/810034_1_500.jpg?t=20220926145452",
            color:"black",
            type:"신발"
            
        },
        {
            id : 10,
            url: "https://image.msscdn.net/images/goods_img/20211117/2238440/2238440_1_500.jpg?t=20211117185415",
            color:"navy",
            type:"아우터"
            
        }
      

    
    ]
    const pictures= dragList.map(picture=><Picture url={picture.url} id={picture.id} color={picture.color} type={picture.type}/>)

    const [Topboard, setTopBoard] = useState([])
    const [Botboard, setBotBoard] = useState([])
    const [Hatboard, setHatBoard] = useState([])
    const [Shoeboard, setShoeBoard] = useState([])
    const [Outerboard, setOuterBoard] = useState([])

    const[{isOver1}, drop1]=useDrop(()=>({
        accept:"image",
        drop:(item:itemprops)=>addImage(item.id,item.type),
        collect:(monitor)=>({
            isOver1 : !!monitor.isOver(),
        }),
    }))
    const[{isOver2}, drop2]=useDrop(()=>({
        accept:"image",
        drop:(item:itemprops)=>addImage(item.id,item.type),
        collect:(monitor)=>({
            isOver2 : !!monitor.isOver(),
        }),
    }))
    const[{isOver3}, drop3]=useDrop(()=>({
        accept:"image",
        drop:(item:itemprops)=>addImage(item.id,item.type),
        collect:(monitor)=>({
            isOver3 : !!monitor.isOver(),
        }),
    }))
    const[{isOver4}, drop4]=useDrop(()=>({
        accept:"image",
        drop:(item:itemprops)=>addImage(item.id,item.type),
        collect:(monitor)=>({
            isOver4 : !!monitor.isOver(),
        }),
    }))
    const[{isOver5}, drop5]=useDrop(()=>({
        accept:"image",
        drop:(item:itemprops)=>addImage(item.id,item.type),
        collect:(monitor)=>({
            isOver5 : !!monitor.isOver(),
        }),
    }))
    
    const addImage=(id: number,type:string)=> {
        
        if(type=="상의")
        {
            const droppedPictures = dragList.filter(picture=> id===picture.id)
            setTopBoard([droppedPictures[0]])
        }
        else if(type=="하의")
        {
            const droppedPictures = dragList.filter(picture=> id===picture.id)
            
            setBotBoard([droppedPictures[0]])
        }
        else if(type=="모자")
        {
            const droppedPictures = dragList.filter(picture=> id===picture.id)
            
            setHatBoard([droppedPictures[0]])
        }
        else if(type=="신발")
        {
            const droppedPictures = dragList.filter(picture=> id===picture.id)
            
            setShoeBoard([droppedPictures[0]])
        }
        else if(type=="아우터")
        {
            const droppedPictures = dragList.filter(picture=> id===picture.id)
            
            setOuterBoard([droppedPictures[0]])
        }
        
    }

    const TopboardImages=Topboard.map(picture=><Picture url={picture.url} id={picture.id} color={picture.color} type={picture.type}/>)
    const BotboardImages=Botboard.map(picture=><Picture url={picture.url} id={picture.id} color={picture.color} type={picture.type}/>)
    const HatboardImages=Hatboard.map(picture=><Picture url={picture.url} id={picture.id} color={picture.color} type={picture.type}/>)
    const ShoeboardImages=Shoeboard.map(picture=><Picture url={picture.url} id={picture.id} color={picture.color} type={picture.type}/>)
    const OuterboardImages=Outerboard.map(picture=><Picture url={picture.url} id={picture.id} color={picture.color} type={picture.type}/>)


  return (
    <div className='flex flex-row justify-around'>
        
        <div className='absolute left-[40rem]'>
            <div className='absolute right-[25rem]'>
                <span>모자</span>
                <div className=' bg-slate-300 flex flex-col justify-around border border-stone-900 h-[15rem] w-[10rem]' 
                ref={drop3} style={{border:isOver3? '3px solid red ' : ' 1px solid black'}}>
                    {HatboardImages}
                
                </div>
            </div>
            
            
            <div className='absolute'>
                <span>상의</span>
                <div className='bg-slate-300 flex flex-col justify-around border border-stone-900 h-[15rem] w-[10rem]' 
                ref={drop1} style={{border:isOver1? '3px solid red ' : ' 1px solid black'}}>
                    {TopboardImages}
                    
                </div>
            </div>
            
            
            <div className='absolute top-[20rem]'>
                <span>하의</span>
                <div className=' bg-slate-300 flex flex-col justify-around border border-stone-900 h-[15rem]  w-[10rem]' 
                ref={drop2} style={{border:isOver2? '3px solid red ' : ' 1px solid black'}}>
                    {BotboardImages}
                    
                </div>
            </div>
            
            
            <div className='absolute top-[40rem]'>
                <span>신발</span>
                <div className=' bg-slate-300 flex flex-col justify-around border border-stone-900 h-[15rem]  w-[10rem]' 
                ref={drop4} style={{border:isOver4? '3px solid red ' : ' 1px solid black'}}>
                    {ShoeboardImages}
                </div>
            </div>

            <div className='absolute top-[20rem] right-[25rem]'>
                <span>아우터</span>
                <div className=' bg-slate-300 flex flex-col justify-around border border-stone-900 h-[15rem]  w-[10rem]' 
                ref={drop5} style={{border:isOver5? '3px solid red ' : ' 1px solid black'}}>
                    {OuterboardImages}
                    
                </div>
            </div>
        
            
            
        </div>

        <div className='grid grid-cols-2 justify-around h-full'>
            {pictures}          
        </div>
        
    </div>
  )
}

export default Dragdrop