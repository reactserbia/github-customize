import { useState } from 'react'
import { Reorder } from 'framer-motion'

import { ReorderItem } from '@/components'

import { container } from './app.css'

export function App() {
    const [items, setItems] = useState(['1', '2', '3', '4', '5'])

    return (
        <div className={container}>
            <p>WELCOME TO GITHUB ENHANCER!</p>

            <Reorder.Group axis='y' values={items} onReorder={setItems}>
                {items.map(item => (
                    <ReorderItem key={item} item={item} />
                ))}
            </Reorder.Group>
        </div>
    )
}
