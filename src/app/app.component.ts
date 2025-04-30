import { HttpClient, HttpClientModule } from '@angular/common/http'; //für chat
import { Component, ViewEncapsulation } from '@angular/core'; //ViewEncapsulation für darkmode
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; //für den Datenschutzbutton
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule], //FormsModule für Darkmode? und CommonModule für datenschutz und HttpClientModule für chat

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None //für dark-mode
})
export class AppComponent {
  selectedLanguage = 'de';
  isDarkMode = false;

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode');
  }


  //datenschutz:
  showDatenschutz = false;

  toggleDatenschutz() {
    this.showDatenschutz = !this.showDatenschutz;
  }


  //chat
  messages: { text: string, from: 'user' | 'bot' }[] = [];
  userInput = '';

  constructor(private http: HttpClient) {}

  sendMessage() {
    if (!this.userInput.trim()) return;

    // Nachricht des Users anzeigen
    this.messages.push({ text: this.userInput, from: 'user' });
    const userMessage = this.userInput;
    this.userInput = '';
    /*
    // REST API Call simulieren
    this.http.post<{ reply: string }>('https://dein-backend-endpunkt/api/chat', { message: userMessage })
      .subscribe({
        next: (response) => {
          this.messages.push({ text: response.reply, from: 'bot' });
        },
        error: () => {
          this.messages.push({ text: 'Es gab ein Problem mit dem Server.', from: 'bot' });
        }
      });
      */
      // Bot-Antwort nach 500ms simulieren
      setTimeout(() => {
        this.messages.push({ text: 'Danke für deine Nachricht!', from: 'bot' });
      }, 500);
  }

}

