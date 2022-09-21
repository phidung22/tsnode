import dataSource from "../utils";
import { Request, Response } from "express";

import {Rating} from "../entity/rating";
import {Wilder} from "../entity/wilder";
import {Skill} from "../entity/skill";

const ratingController = {
create: async(req: Request, res:Response)=>{
    const skillToAddRating = await dataSource
        .getRepository(Skill)
        .findOneBy({id: req.body.skillId});
        console.log(skillToAddRating);
    
    const wilderToAddRating = await dataSource
        .getRepository(Wilder)
        .findOneBy({id: req.body.wilderId});
        console.log(wilderToAddRating);
    
await dataSource.getRepository(Rating).save({
    rating: req.body.rating,
    skills: skillToAddRating,
    wilders: wilderToAddRating
});

res.send("Rating added");


}

}
export default ratingController;