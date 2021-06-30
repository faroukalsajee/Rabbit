import { Post } from "./entities/Post";
import { __prod__ } from "./constants";
import path from "path";
import { User } from "./entities/User";
import { Options } from '@mikro-orm/core';

const config: Options = {
  migrations: {
    path: path.join(__dirname, "../src/migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
    disableForeignKeys: false,

  },
  entities: [Post, User],
  dbName: 'lireddit',
  type: 'postgresql',
  password: 's3xy',
  debug: !__prod__,

}
export default config;
