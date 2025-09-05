import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
 imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  password='';
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  onButtonClick() {
    const password='';
    const numbers='1234567890';
    const letters='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const symbols='!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let validChars = '';
    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }
    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }

  onChangeUseLetters() {
    this.includeLetters =!this.includeLetters;
  }
  onChangeUseNumbers() {
    this.includeNumbers =!this.includeNumbers;
  }
  onChangeUseSymbols() {
    this.includeSymbols =!this.includeSymbols;
  }
  onChangeLength(value: string) {
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }
}
