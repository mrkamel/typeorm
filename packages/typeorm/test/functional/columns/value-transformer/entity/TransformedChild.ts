import {
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "../../../../../src"
import { TransformedParent } from "./TransformedParent"

@Entity()
export class TransformedChild {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @ManyToOne(() => TransformedParent, (parent) => parent.children)
    parent: TransformedParent
}
