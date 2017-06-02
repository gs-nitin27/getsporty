import { OpaqueToken } from "@angular/core";
import { IAppConfig } from "./app.iconfig"

export let APP_CONFIG = new OpaqueToken("app.config");

export const AppConfig: IAppConfig = {  
    apBaseUrl: "http://localhost/staging/index.php/",
    viewcontenturl: "http://localhost/testingapp/angularapi.php?act=contentangularlex",
    createcontenturl: "http://localhost/testingapp/angularapi.php?act=createcontent",

};