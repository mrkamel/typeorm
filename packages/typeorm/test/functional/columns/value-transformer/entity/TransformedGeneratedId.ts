import { Column, Entity, PrimaryColumn } from "../../../../../src"
import { prefixTransformer } from "./PrefixTransformer"

@Entity()
export class TransformedGeneratedId {
    @PrimaryColumn({
        type: "int",
        generated: "increment",
        transformer: prefixTransformer("id"),
    })
    id: string

    @Column({ unique: true })
    title: string
}
