export class AuthInfo {

  constructor(
  public $authResponce: AuthInfoResponce,
  ) {
  }
  isLoggedIn() {
    return !!this.$authResponce.$userid;
  }
}

export class AuthInfoResponce
{
   constructor(
    public $name: string,
    public $userid: number,
    public $prof_id: string,
    public $user_image: string,
   ){}
}




