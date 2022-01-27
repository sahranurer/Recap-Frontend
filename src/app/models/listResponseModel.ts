import { ResponseModel } from "./ResponseModel";

export interface listResponseModel<T> extends ResponseModel{
    data:T[];
}