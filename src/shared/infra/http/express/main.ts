import express from "express";
import routes from "./routes";

import swagger from "swagger-ui-express";
import swaggerDocs from "./x-docs.json";

const app = express();

app.use(express.json());
app.use(routes);
app.use("/api-docs", swagger.serve, swagger.setup(swaggerDocs));

export default app;
