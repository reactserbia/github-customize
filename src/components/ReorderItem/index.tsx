import { Reorder } from 'framer-motion'

import { Element } from '@/models'

import { container } from './reorder-item.css'

type ReorderItemProps = {
    item: Element
}

export const ReorderItem = ({ item }: ReorderItemProps) => {
    return (
        <Reorder.Item as='div' className={container} value={item}>
            {item.id} - {item.type}
        </Reorder.Item>
    )
}
