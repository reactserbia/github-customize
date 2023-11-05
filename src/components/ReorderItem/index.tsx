import { Reorder } from 'framer-motion'

import { container } from './reorder-item.css'

type ReorderItemProps = {
    item: string
}

export const ReorderItem = ({ item }: ReorderItemProps) => {
    return (
        <Reorder.Item as='div' className={container} value={item} id={item}>
            {item}
        </Reorder.Item>
    )
}
