import { Component, LOCALE_ID, ɵsetLocaleId } from '@angular/core';
import { locale } from '../app';

interface Dictionary<T>{
  [key: string]: T;
}
@Component({
  imports: [],
  standalone: true,
  selector: 'app-lang-selector',
  styleUrl: './lang-selector.scss',
  templateUrl: './lang-selector.html',
})

export class LangSelector {

  locales : string[] = ["en","es","fr","pt"]
  flagLocales : Dictionary<string> = {"en":"gb", "es": "es", "fr": "fr", "pt": "pt"}
  languages: Dictionary<string> = {"en": "English", "es": "Español", "fr": "Français", "pt": "Portugues"}
  nations : Dictionary<string> = {"gb":"England", "es": "Spain", "fr": "France", "pt": "Portugal"}
  selectedLocale = localStorage.getItem("lang") || "en"
  currentLocale : string = this.selectedLocale

  updateLocale (selectedLocale : string) : void{
    this.currentLocale = selectedLocale
    $localize.locale = selectedLocale
    document.documentElement.lang = selectedLocale
    try{
      localStorage.setItem("lang", selectedLocale)
      console.log("lang", localStorage.getItem("lang"))
    }catch(e){
      console.error("fallo al guardar en localStorage", e)
    }
  }

}
