import { React, useState } from 'react';
import DealsToggle from '../components/DealsToggle/DealsToggle';
import DealsBanner from '../components/DealsBanner/DealsBanner'
import DealsView from '../components/DealsView/DealsView';

function DealsPage() {
    const [selected, setSelected] = useState('list');

    return (
        <>
            <DealsBanner/>
            <DealsToggle selected={selected} setSelected={setSelected}/>
            <DealsView view={selected}/>
        </>
    )
}

export default DealsPage