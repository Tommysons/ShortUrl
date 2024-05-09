// // server.ts
// import express, { Application } from 'express';
// import dotenv from 'dotenv';
// import cors from 'cors';
// import connectDb from './config/dbConfig';
// import { ClerkExpressWithAuth } from '@clerk/clerk-sdk-node';
// import { Request } from 'express';

// dotenv.config();
// connectDb();

// const port = process.env.PORT || 5001;
// const app: Application = express();

// app.use(
//   ClerkExpressWithAuth({

//   })
// );

// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     credentials: true,
//   })
// );


// app.get('/api/protected-route', (req: Request, res) => {

//   if ((req as any).auth && (req as any).auth.user) {

//     res.json({ message: 'You are authenticated', user: (req as any).auth.user });
//   } else {
//     // User is not authenticated
//     res.status(401).json({ message: 'You are not authenticated' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
