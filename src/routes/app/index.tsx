import { useState } from 'react'
import { Reorder } from 'framer-motion'

import { PlusIcon } from '@radix-ui/react-icons'

import { ReorderItem } from '@/components'

import { container, heading, subheading, buttonsContainer } from './app.css'

export function App() {
    const [items, setItems] = useState<string[]>([])

    return (
        <div className={container}>
            <h1 className={heading}>GitHub Enhancer</h1>
            <h2 className={subheading}>
                Let's create an amazing README for your profile!
            </h2>

            <div className={buttonsContainer}>
                <button>
                    <PlusIcon /> Heading
                </button>
                <button>
                    <PlusIcon /> Subheading
                </button>
                <button>
                    <PlusIcon /> Paragraph
                </button>
            </div>
            <Reorder.Group axis='y' values={items} onReorder={setItems}>
                {items.map(item => (
                    <ReorderItem key={item} item={item} />
                ))}
            </Reorder.Group>
        </div>
    )
}
