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
@Tree("materialized-path")
export class TransformedMaterializedPathNode {
    @PrimaryColumn({
        type: "int",
        generated: "increment",
        transformer: prefixTransformer("id"),
    })
    id: string

    @Column()
    title: string

    @TreeChildren({ cascade: true })
    children: TransformedMaterializedPathNode[]

    @TreeParent()
    parent: TransformedMaterializedPathNode | null
}
