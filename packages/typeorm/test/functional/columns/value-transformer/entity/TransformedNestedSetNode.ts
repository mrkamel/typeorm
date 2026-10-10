import {
    Column,
    Entity,
    PrimaryColumn,
    Tree,
    TreeChildren,
    TreeParent,
} from "../../../../../src"
import { prefixTransformer } from "./PrefixTransformer"

@Entity()
@Tree("nested-set")
export class TransformedNestedSetNode {
    @PrimaryColumn({
        type: "int",
        generated: "increment",
        transformer: prefixTransformer("id"),
    })
    id: string

    @Column()
    title: string

    @TreeChildren({ cascade: true })
    children: TransformedNestedSetNode[]

    @TreeParent()
    parent: TransformedNestedSetNode | null
}
