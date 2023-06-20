import * as dotenv from 'dotenv';
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';

dotenv.config();
const app: Application = express();

app.use(
	cors({
		origin:
			process.env.NODE_ENV === 'production'
				? process.env.PROD_URL
				: '<http://localhost:3000>',
	})
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
	res.send('Healthy');
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
