import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FunnyComponent } from './funny/funny.component';


export const routes: Routes = [
    { path: 'main', component: MainComponent },
    { path: 'about', component: HeaderComponent },
    { path: 'footer', component: FooterComponent },
    { path: 'funny', component: FunnyComponent},

];
