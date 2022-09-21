


import dataSource from "../utils";
import { Request, Response } from "express";

import {Skill} from "../entity/skill";
const skillController = {
    
    createSkill: (req: Request, res: Response) => {
        dataSource
            .getRepository(Skill)
            .save(req.body)
            .then(()=>{
                res.send("Skill Created");
            })
            .catch(()=>{
                res.send("Error while creating Skill");
            });
        
    },
    findSkill: async (req: Request, res: Response) =>{
        
            try{
                const data = await dataSource
                .getRepository(Skill)
                .find();
                res.send(data);
            }
            catch{
                res.send("Error while finding Skill");
            };
    }, 
    updateSkill: async (req: Request, res: Response) =>{
            try {
              await  dataSource
            .getRepository(Skill)
            .update(req.body.idToUpdate, {name: req.body.nameToUpdate});
                res.send("Skill updated");
            }
            catch{
                res.send("Error while updating Skill");
            };
    }, 
    deleteSkill: async (req: Request, res: Response)=>{
        
            try {
               await dataSource
            .getRepository(Skill)
            .delete(req.body.idToDelete);
            res.send("Skill deleted");
            }
            catch{
                res.send("Error while deleting Skill");
            };
    },
};

export default skillController;