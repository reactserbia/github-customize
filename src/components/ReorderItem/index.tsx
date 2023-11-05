import { ChangeEvent, useRef, useState } from 'react'
import { Reorder } from 'framer-motion'
import { FormControl, FormField } from '@radix-ui/react-form'
import { RowSpacingIcon } from '@radix-ui/react-icons'

import { Element } from '@/models'

import { container, dragHandle, formField, textarea } from './reorder-item.css'

type ReorderItemProps = {
    item: Element
}

export const ReorderItem = ({ item }: ReorderItemProps) => {
    const [value, setValue] = useState('')

    const textareaRef = useRef<HTMLTextAreaElement>(null)

    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        if (!textareaRef.current) return

        textareaRef.current.style.height = 'auto'
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
        setValue(event.target.value)
    }

    return (
        <Reorder.Item as='div' className={container} value={item}>
            <div className={dragHandle}>
                <RowSpacingIcon />
            </div>
            <FormField className={formField} name={item.id}>
                <FormControl asChild>
                    <textarea
                        ref={textareaRef}
                        className={textarea}
                        rows={1}
                        value={value}
                        onChange={onChangeHandler}
                    />
                </FormControl>
            </FormField>
        </Reorder.Item>
    )
}
