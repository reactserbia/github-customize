enum ElementType {
    PARAGRAPH = 'PARAGRAPH',
    H1 = 'H1',
    H2 = 'H2',
    H3 = 'H3',
    H4 = 'H4',
    H5 = 'H5',
    H6 = 'H6'
}

type IElement<T extends ElementType> = {
    id: string
    type: T
    text: string
}

type Pararaph = IElement<ElementType.PARAGRAPH>

type H1 = IElement<ElementType.H1>
type H2 = IElement<ElementType.H2>
type H3 = IElement<ElementType.H3>
type H4 = IElement<ElementType.H4>
type H5 = IElement<ElementType.H5>
type H6 = IElement<ElementType.H6>

type Element = Pararaph | H1 | H2 | H3 | H4 | H5 | H6

export {
    ElementType,
    type Element,
    type Pararaph,
    type H1,
    type H2,
    type H3,
    type H4,
    type H5,
    type H6
}
