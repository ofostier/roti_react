import { config, createSchema } from '@keystone-next/keystone/schema';
import { createAuth } from '@keystone-next/auth';
import {
  withItemData,
  statelessSessions,
} from '@keystone-next/keystone/session';
import { User } from './schemas/User';
import { Roti } from './schemas/Roti';
import { Vote } from './schemas/Vote';
// import { Product } from './schemas/Product';
// import { ProductImage } from './schemas/ProductImage';
// import { insertSeedData } from './seed-data';
import 'dotenv/config';

const databaseURL =
  process.env.DATABASE_URL || 'mongodb://localhost/keystone-sick-fits-tutorial';

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // How long they stay signed in?
  secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
    // TODO: Add in initial roles here
  },
});

export default withAuth(
  config({
    // @ts-ignore
    server: {
      cors: {
        origin: [process.env.FRONTEND_URL],
        credentials: true,
      },
      port: process.env.BACKEND_PORT,
    },
    db: {
      adapter: 'mongoose',
      url: databaseURL,
      // TODO: Add data seeding here
      // async onConnect(keystone) {
      //   if (process.argv.includes('--seed-data')) {
      //     await insertSeedData(keystone);
      //   }
      // },
    },
    lists: createSchema({
      // Schema items go in here
      User,
      Roti,
      Vote,
      // Product,
      // ProductImage,
    }),
    ui: {
      // TODO: Show the UII only for people who pass this test
      isAccessAllowed: ({ session }) =>
        // console.log(session);
        !!session?.data,
    },
    // TODO: Add session values here
    session: withItemData(statelessSessions(sessionConfig), {
      User: 'id',
    }),
  })
);
