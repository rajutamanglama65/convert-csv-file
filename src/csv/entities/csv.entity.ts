import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"


@Entity()
export class csv {
    @PrimaryGeneratedColumn()
    Id: number

    @Column()
    Quarter: string

    @Column()
    Team: string

    @Column()
    KeyResults: string

    @Column()
    Objective: string

    @Column()
    InitialValue: number

    @Column()
    CurrentValue: number

    @Column()
    TargetValue: number

    @Column()
    Progress: number

    @Column()
    TimeFrame: string

    @Column()
    LastModified: string

    @Column()
    Comments: string[]

    @Column()
    QuarterStart: string

    @Column()
    Difference: string

    @Column()
    Health: string

    @Column()
    KPIs: string[]

    @Column()
    ProgressBar: string

    @Column()
    Property: string

    @Column()
    property1: string

    @Column()
    key: string
}
