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
    
    if (skillToAddRating !== null && wilderToAddRating !== null ){
        const newRating = new Rating();
        newRating.rating = req.body.rating;
        newRating.skill = skillToAddRating;
        newRating.wilder = wilderToAddRating;
        await dataSource.getRepository(Rating).save(newRating);
    }
    



res.send("Rating added");


}

}
export default ratingController;