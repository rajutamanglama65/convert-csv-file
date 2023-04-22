import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"


@Entity()
export class Csv {
    @PrimaryGeneratedColumn()
    Id: number;

    @Column({ nullable: true })
    Quarter?: string;

    @Column({ nullable: true })
    Team?: string;

    @Column({ nullable: true })
    KeyResults?: string;

    @Column({ nullable: true })
    Objective?: string;

    @Column({ nullable: true })
    InitialValue?: number;

    @Column({ nullable: true })
    CurrentValue?: number;

    @Column({ nullable: true })
    TargetValue?: number;

    @Column({ nullable: true })
    Progress?: number;

    @Column({ nullable: true })
    TimeFrame?: string;

    @Column({ nullable: true })
    LastModified?: string;

    @Column({ nullable: true })
    Comments?: string;

    @Column({ nullable: true })
    QuarterStart?: string;

    @Column({ nullable: true })
    Difference?: string;

    @Column({ nullable: true })
    Health?: string;

    @Column({ nullable: true })
    KPIs?: string;

    @Column({ nullable: true })
    ProgressBar?: string;

    @Column({ nullable: true })
    Property?: string;

    @Column({ nullable: true })
    property1?: string;

    @Column({ nullable: true })
    key?: string;
}
