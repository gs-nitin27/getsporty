import { OpaqueToken } from "@angular/core";
import { IAppConfig } from "./app.iconfig"

export let APP_CONFIG = new OpaqueToken("app.config");

export const AppConfig: IAppConfig = {  


    apBaseUrl: "http://localhost/getsporty/php",
    applocalhostUrl: "http://getsporty.in/testingapp",



     loginUrl :  "http://localhost/testingapp/angularapi.php?act=angulartest",
     viewcontenturl: "http://localhost/testingapp/angularapi.php?act=contentangularlex",
     createcontenturl: "http://localhost/testingapp",
     createeventurl :  "http://localhost/testingapp/angularapi.php?act=createevent",
     sportlist : "http://localhost/testingapp/angularapi.php?act=sportlisting",
}; 