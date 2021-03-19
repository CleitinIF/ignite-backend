import { Options } from "multer";
import path from "path";

export const multerConfig: Options = {
  dest: path.join(__dirname, "../../../tmp"),
};
