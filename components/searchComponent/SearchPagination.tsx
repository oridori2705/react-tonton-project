import React,{Dispatch, SetStateAction, useEffect,useState} from 'react'

interface CompProps{
    currentPage:number,
    postsPerPage:number,
    totalPosts:number,
    paginate:Dispatch<SetStateAction<number>> //useState의 함수를 가져올때의 타입은 이렇다.
}


const SearchPagination=({currentPage,postsPerPage, totalPosts, paginate}:CompProps) =>{
        
        const [currentNum, setCurrentNum] = useState<number>(1); //사용자가 누르면 변하는 페이지 번호
        const [postsPerNum, setPostsPerNum] = useState<number>(10);//총 데이터를 몇등분 할건지의 수

        const [buttonSelected, setbuttonSelected] = useState(false);

        const indexOfLast = currentNum * postsPerNum; //1*10 하면 10 이니까=> 1페이지에 10까지만 보여줌 
        const indexOfFirst = indexOfLast - postsPerNum; //10 - 10 이니까 0 => 1페이지는 0부터 보여줌
        const currentPostNum = (posts:number[]) => {
            
            let currentPostNum = [];
            currentPostNum= posts.slice(indexOfFirst, indexOfLast);
            return currentPostNum;
        };
        
        const EndPage =Math.ceil(totalPosts / postsPerPage);
        const pageNumbers = [];
        for (let i = 1; i <= EndPage; i++) {
            pageNumbers.push(i);
            
        }


        console.log("페이지 단 : "+currentNum)
        console.log("현재 페이지: "+currentPage)
       

        function handleClickRight(e:React.MouseEvent<HTMLButtonElement, MouseEvent>) {
            
            if(currentPage%10==0)
            {
                paginate(currentPage+1)
                setCurrentNum(currentNum+1);
            }
            else
            {
                paginate(currentPage+1);
            }
        }
        function handleClickLeft(e:React.MouseEvent<HTMLButtonElement, MouseEvent>) {
           
            if(currentPage%11==0)
            {
                paginate(currentPage-1)
                setCurrentNum(currentNum-1);
            }
            else
            {
                paginate(currentPage-1);
            }
        }
        return (
                <div>
                    <div className='flex flex-row  divide-x-2 divide-gray-300  w-[28rem] h-[3rem] justify-between'>
                        
                        <div className='flex divide-x-2 divide-gray-300  '>
                            <button className=' bg-gray-200 hover:bg-slate-100 p-2' onClick={() => {paginate(1); setCurrentNum(1);} }  disabled={currentPage=== 1}>
                                {"<<"}
                            </button>
                            <button className='bg-gray-200  hover:bg-slate-100 p-2' onClick={handleClickLeft}  disabled={currentPage=== 1} >
                                {"<"}
                            </button>
                        </div>
                        
                        <ul className="flex w-full divide-x-2 divide-gray-300  ">
                        {currentPostNum(pageNumbers).map((number) => (
                            <li key={number} className="text-2xl  text-gray-500 w-[2rem] bg-slate-200 hover:bg-slate-100">
                                <button onClick={() => {paginate(number); setbuttonSelected(true) }} className={`text-center `}>
                                    {number}
                                </button>
                            </li>
                        ))}
                        </ul>
                        <div className='flex divide-x-2 divide-gray-300 '>
                            <button className='bg-gray-200 hover:bg-slate-100 p-2' 
                                onClick={handleClickRight}  disabled={currentPage=== EndPage}
                            >
                                {">"}
                            </button>
                            <button className='bg-gray-200 hover:bg-slate-100 p-2'
                                onClick={() => {paginate(EndPage); setCurrentNum(Math.floor(EndPage/10)+1)}}  disabled={currentPage=== EndPage}
                            
                            >
                                {">>"}
                            </button>
                        </div>
                    </div>
                    
                    
                </div>
        )
    
}
export default SearchPagination