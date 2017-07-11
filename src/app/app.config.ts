import { OpaqueToken } from "@angular/core";
import { IAppConfig } from "./app.iconfig"

export let APP_CONFIG = new OpaqueToken("app.config");

export const AppConfig: IAppConfig = {  

     applocalhostUrl: "http://localhost/getsporty/php",

<<<<<<< HEAD
     apBaseUrl : "http://getsporty.in/dist/assets/php",
=======
     applocalhostUrl : "http://getsporty.in/dist/php",
>>>>>>> 5ec22aab2b298a303f79f2f5c87de44c2196bf49



     loginUrl :  "http://localhost/testingapp/angularapi.php?act=angulartest",
     viewcontenturl: "http://localhost/testingapp/angularapi.php?act=contentangularlex",
     createcontenturl: "http://localhost/testingapp",
     createeventurl :  "http://localhost/testingapp/angularapi.php?act=createevent",
     sportlist : "http://localhost/testingapp/angularapi.php?act=sportlisting",
}; 