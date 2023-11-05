import { Reorder } from 'framer-motion'
import { FormControl, FormField } from '@radix-ui/react-form'

import { Element } from '@/models'

import { container } from './reorder-item.css'

type ReorderItemProps = {
    item: Element
}

export const ReorderItem = ({ item }: ReorderItemProps) => {
    return (
        <Reorder.Item as='div' className={container} value={item}>
            <FormField name={item.id}>
                <FormControl asChild>
                    <input />
                </FormControl>
            </FormField>
        </Reorder.Item>
    )
}
