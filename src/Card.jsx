import {useState} from 'react';

function Card(props){
    const [isExpanded, setIsExpanded] = useState(false);
    
    const toggleExpand = () =>{
        setIsExpanded(!isExpanded);
    };

    return(
        <div className="card">
            <h2>{props.event}</h2>
            <p className={isExpanded ? 'expanded' : 'collapsed'}>
                {props.description}
            </p>
            <div className='card-buttons'>
                <button onClick={toggleExpand}>
                    {isExpanded ? 'Read Less' : 'Read More'}
                </button>
                <button onClick={() => window.open(props.url)}>Website</button>
            </div>
        </div>
    );
}

export default Card;