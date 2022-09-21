import {Column, Entity, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { Rating } from "./rating";



@Entity()
  export class Wilder {
@PrimaryGeneratedColumn()
id: number;

@Column()
name: string;

@Column()
description: string

@OneToMany(() => Rating, (rating) => rating.rating)
    ratings: Rating[];

  }
 