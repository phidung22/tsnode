import {DataSource} from "typeorm";
import {Skill} from "./entity/skill";
import {Wilder} from "./entity/wilder";
import {Rating} from "./entity/rating";

const dataSource = new DataSource({
    type: "sqlite",
    database: "wildersdb.sqlite",
    synchronize: true,
    entities: [Wilder, Skill, Rating],
    logging: ["query", "error"],
  });
export default dataSource;