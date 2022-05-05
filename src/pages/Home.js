import { useEffect ,useState} from 'react';
import Card from '../components/Card';
import Pagination from '../components/Pagination';
import './Home.css';
const Home=()=>{

    const [characteres, setCharacteres] = useState([])
    const [info, setInfo] = useState({})

    const initialUrl="https://rickandmortyapi.com/api/character"

    const getCharacteres=async(URL)=>{
        const res=await fetch(URL)
        const data=await res.json()
        setCharacteres(data.results)
        setInfo(data.info)
        
    }
    const onPrev=()=>{
        // setPrev(info.prev)
        info.prev&&getCharacteres(info.prev)
        
    }

    const onNext=()=>{
        // setNext(info.next)
        info.next&&getCharacteres(info.next)
    }
    useEffect(() => {
        getCharacteres(initialUrl)
       }, [])

    return(
        <>
        <Pagination
        prev={info.prev} 
        next={info.next}
        onPrev={onPrev}
        onNext={onNext}
        />
        <div className="container">
            {characteres.map(el=>(
                <Card char={el} key={el.id}/>
            ))}
            
            
        </div>
        </>
    
    )
}


export default Home;