import { useState } from 'react'
import { Reorder } from 'framer-motion'

import { PlusIcon } from '@radix-ui/react-icons'

import { ReorderItem } from '@/components'
import { Element, ElementType } from '@/models'

import { container, heading, subheading, buttonsContainer } from './app.css'

export function App() {
    const [items, setItems] = useState<Element[]>([])

    const addNewHeadingHandler = () =>
        setItems(items => [
            ...items,
            { id: crypto.randomUUID(), type: ElementType.H1, text: '' }
        ])

    const addNewSubheadingHandler = () =>
        setItems(items => [
            ...items,
            { id: crypto.randomUUID(), type: ElementType.H2, text: '' }
        ])

    const addNewParagraphHandler = () =>
        setItems(items => [
            ...items,
            { id: crypto.randomUUID(), type: ElementType.PARAGRAPH, text: '' }
        ])

    return (
        <div className={container}>
            <h1 className={heading}>GitHub Enhancer</h1>
            <h2 className={subheading}>
                Let's create an amazing README for your profile!
            </h2>

            <div className={buttonsContainer}>
                <button onClick={addNewHeadingHandler}>
                    <PlusIcon /> Heading
                </button>
                <button onClick={addNewSubheadingHandler}>
                    <PlusIcon /> Subheading
                </button>
                <button onClick={addNewParagraphHandler}>
                    <PlusIcon /> Paragraph
                </button>
            </div>
            <Reorder.Group axis='y' values={items} onReorder={setItems}>
                {items.map(item => (
                    <ReorderItem key={item.id} item={item} />
                ))}
            </Reorder.Group>
        </div>
    )
}
