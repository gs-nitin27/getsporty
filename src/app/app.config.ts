import { OpaqueToken } from "@angular/core";
import { IAppConfig } from "./app.iconfig"

export let APP_CONFIG = new OpaqueToken("app.config");

export const AppConfig: IAppConfig = {  


    applocalhostUrl: "http://localhost/getsporty/php",
    apBaseUrl: "http://getsporty.in/testingapp",
    dir_url :"http://getsporty.in/staging/uploads/",
    localimageurl:"http://localhost/getsporty/php/image/",

     loginUrl :  "http://localhost/testingapp/angularapi.php?act=angulartest",
     viewcontenturl: "http://localhost/testingapp/angularapi.php?act=contentangularlex",
     createcontenturl: "http://localhost/testingapp",
     createeventurl :  "http://localhost/testingapp/angularapi.php?act=createevent",
     sportlist : "http://localhost/testingapp/angularapi.php?act=sportlisting",
}; 