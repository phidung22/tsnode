import {Column, Entity, PrimaryGeneratedColumn, ManyToOne} from "typeorm";

@Entity()
  export class Rating {
@PrimaryGeneratedColumn()
id: number;

@Column()
rating: string;

@Column()
description: string

@ManyToOne(() => Wilder, (wilder)=> wilder.ratings)
    wilder: Wilder

@ManyToOne(() => Skill, (skill)=> skill.ratings)
    skill: Skill
  }
 