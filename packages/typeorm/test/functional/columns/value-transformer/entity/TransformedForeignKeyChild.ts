import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "../../../../../src"
import { prefixTransformer } from "./PrefixTransformer"
import { TransformedParent } from "./TransformedParent"

@Entity()
export class TransformedForeignKeyChild {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column({ type: "int", transformer: prefixTransformer("parent") })
    parentId: string

    @ManyToOne(() => TransformedParent)
    @JoinColumn({ name: "parentId" })
    parent: TransformedParent
}
