import React, {use} from 'react';
import ToolCard from './toolCard';


const Tools = ({toolsPromise, carts, setCarts}) => {
    const tools = use(toolsPromise)
    return (
        <div className='grid mb-30 gap-8 pt-15 md:grip-cols-2 lg:grid-cols-3 w-[80%] m-auto'>
            {tools.map((t) => (<ToolCard key={t.id} t={t} carts={carts} setCarts={setCarts}></ToolCard>)
            )}
        </div>
    );
};

export default Tools;