export class LogInComponent {
  userName = "";
  passWord = "";

  onAddPost(){
    const logIn : LogIn = {
      userName: this.userName,
      passWord: this.passWord
    };
  }
}
