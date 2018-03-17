import {NgModule} from "@angular/core";
import {LoginPage} from "../login/login";
import {IonicPageModule} from "ionic-angular";
import {HomePage} from "./home";

@NgModule({
  declarations: [
    HomePage,
  ],
  entryComponents: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
})
export class HomePageModule {}
