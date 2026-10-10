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
@Tree("closure-table")
export class TransformedTreeNode {
    @PrimaryColumn({
        type: "int",
        generated: "increment",
        transformer: prefixTransformer("id"),
    })
    id: string

    @Column()
    title: string

    @TreeChildren({ cascade: true })
    children: TransformedTreeNode[]

    @TreeParent()
    parent: TransformedTreeNode | null
}
