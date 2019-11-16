import React,{Fragment} from 'react';

import ToDo from './container/todo';
import Title from './components/title/title'


const App=()=>(
    <Fragment>
        <Title title='ToDo App'/>
        <ToDo/>
    </Fragment>
)

export default App; 