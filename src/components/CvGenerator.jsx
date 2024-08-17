import { useState } from 'react'
import CvDisplay from './CvDisplay';
import UserInput from './UserInput';

function CvGenerator(){
    const [cvInput, setCvInput] = useState(null);

    function onSubmit(cv){
        setCvInput(cv);
    }

    if(cvInput){
        return <CvDisplay cvInput={cvInput}/>
    }

    return <UserInput onSubmit={onSubmit}/>
}

export default CvGenerator;