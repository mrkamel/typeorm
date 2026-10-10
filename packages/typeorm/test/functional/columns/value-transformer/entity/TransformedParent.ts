import { Column, Entity, OneToMany, PrimaryColumn } from "../../../../../src"
import { prefixTransformer } from "./PrefixTransformer"
import { TransformedChild } from "./TransformedChild"

@Entity()
export class TransformedParent {
    @PrimaryColumn({
        type: "int",
        generated: "increment",
        transformer: prefixTransformer("id"),
    })
    id: string

    @Column()
    title: string

    @OneToMany(() => TransformedChild, (child) => child.parent, {
        cascade: true,
    })
    children: TransformedChild[]
}
