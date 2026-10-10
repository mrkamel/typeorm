import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    Generated,
    PrimaryColumn,
    VersionColumn,
} from "../../../../../src"
import { prefixTransformer } from "./PrefixTransformer"

export enum Priority {
    Low = 1,
    High = 2,
}

@Entity()
export class TransformedDatabaseValues {
    @PrimaryColumn({
        type: "int",
        generated: "increment",
        transformer: prefixTransformer("id"),
    })
    id: string

    @Column()
    title: string

    @Column({ default: 0, transformer: prefixTransformer("hits") })
    hits: string

    @Column({ type: "simple-enum", enum: Priority, default: Priority.High })
    priority: Priority

    @Column({ transformer: prefixTransformer("token") })
    @Generated("uuid")
    token: string

    @VersionColumn({ transformer: prefixTransformer("version") })
    version: string

    @CreateDateColumn()
    createdAt: Date

    @DeleteDateColumn()
    deletedAt: Date | null
}
