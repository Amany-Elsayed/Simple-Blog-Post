import { HttpClientModule } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { MainPage } from "./components/main-page/main-page";

@Component({
  selector: 'app-root',
  imports: [HttpClientModule, MainPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('client');
}
