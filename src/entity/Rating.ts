import {Column, Entity, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import { Skill } from "./skill";
import {Wilder} from "./wilder"

@Entity()
  export class Rating {
@PrimaryGeneratedColumn()
id: number;

@Column()
rating: number;


@ManyToOne(() => Wilder, (wilder)=> wilder.ratings)
    wilder: Wilder;

@ManyToOne(() => Skill, (skill)=> skill.name)
    skill: Skill;
  }
 