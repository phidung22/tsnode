
import dataSource from "../utils";
import { Request, Response } from "express";
import {Wilder} from "../entity/wilder";


const wilderController = {
    create: (req: Request, res: Response) => {
        console.log(req.body);
        dataSource
          .getRepository(Wilder)
          .save(req.body)
          .then(() => {
            res.status(201).send("Wilder created");
          })
          .catch((error) => {
            console.log("Error", error);
            res.status(500).send("Error while creating the wilder");
          });
      },
    find: async (req: Request, res: Response) => {
      const allWilders = await dataSource.getRepository(Wilder).find({
        relations: {
          ratings: {
            skill: true,
          },
        },
      });
      res.send(allWilders);
    },
    
    update: async (req: Request, res: Response) =>{
            try {
              await  dataSource
            .getRepository(Wilder)
            .update(req.body.idToUpdate, {name: req.body.name,description: req.body.description});
                res.send("Wilder updated");
            }
            catch{
                res.send("Error while updating Wilder");
            };
    }, 
    delete: async (req: Request, res: Response)=>{
        
            try {
               await dataSource
            .getRepository(Wilder)
            .delete(req.body.idToDelete);
            res.send("Wilder deleted");
            }
            catch{
                res.send("Error while deleting Wilder");
            };
    },
    
};

export default wilderController;