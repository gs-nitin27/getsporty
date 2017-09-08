import { OpaqueToken } from "@angular/core";
import { IAppConfig } from "./app.iconfig"

export let APP_CONFIG = new OpaqueToken("app.config");

export const AppConfig: IAppConfig = {  


    apBaseUrl: "http://localhost/testingapp",
    applocalhostUrl: "http://getsporty.in/testingapp",
    localimageurl :"http://getsporty.in/staging/uploads/",
    dir_url:"http://localhost/staging/uploads/",

     loginUrl :  "http://localhost/testingapp/angularapi.php?act=angulartest",
     viewcontenturl: "http://localhost/testingapp/angularapi.php?act=contentangularlex",
     createcontenturl: "http://localhost/testingapp",
     createeventurl :  "http://localhost/testingapp/angularapi.php?act=createevent",
     sportlist : "http://localhost/testingapp/angularapi.php?act=sportlisting",
}; 