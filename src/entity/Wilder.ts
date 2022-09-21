import {Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToMany} from "typeorm";

@Entity()
  export class Wilder {
@PrimaryGeneratedColumn()
id: number;

@Column()
name: string;

@Column()
description: string

@OneToMany(() => Rating, (rating) => rating.wilder)
    ratings: Rating[]

@ManyToMany(() => Skill, (skill) => skill.skills)
    skills: Skill[]
  }
 