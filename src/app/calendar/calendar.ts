import { Component, ElementRef, OnInit, output, Output, ViewChild } from '@angular/core';
import moment, { Moment } from 'moment';

interface openBarbershopHours {
  morning: {
    start: Moment,
    end: Moment,
  },
  afternoon: {
    start: Moment,
    end: Moment
  }
}

interface busyDayHours{
  day: number,
  month: string,
  year: number,
  times: string[];
  isDayfilled: boolean
}

export enum sides{
  PREV,
  NEXT
}

export enum dateStatus{
  UNAVALIBLE,
  DISABLED,
  AVALIBLE
}

@Component({
  imports: [],
  standalone: true,
  selector: 'app-calendar',
  styleUrl: './calendar.scss',
  templateUrl: './calendar.html',
})
export class Calendar implements OnInit{
  readonly sides = sides
  readonly dateStatus = dateStatus

  locale = moment.locale('es-Es');
  moment = moment;
  now = moment();
  selectedMonth! : string
  SelectedYear! : string
  weekdays = moment.weekdays();
  daysInMonth = moment().daysInMonth();
  days :number[] = []
  bookingDateSelected = output<Moment | null>();
  selectedBookingDate : Moment | null = null;

  openStablishmentHours : openBarbershopHours = {
    morning: {
      start:  moment("T9:00:00+01:00"),
      end:  moment("T14:00:00+01:00"),
    },
    afternoon: {
      start:  moment("T16:30:00+01:00"),
      end:  moment("T20:30:00+01:00")

    }
  }

    busyDayHours: busyDayHours[] = [
    {
      day: 21,
      month: "November",
      year: 2026,
      times: ["19:00"],
      isDayfilled: false
    },
    {
      day: 23,
      month: "November",
      year: 2026,
      times: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"],
      isDayfilled: true
    },
    {
      day: 24,
      month: "November",
      year: 2026,
      times: ["08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"],
      isDayfilled: true
    },
    {
      day: 25,
      month: "November",
      year: 2026,
      times: ["16:53"],
      isDayfilled: false
    },
    {
      day: 26,
      month: "November",
      year: 2026,
      times: ["07:28", "22:04"],
      isDayfilled: false
    },
    {
      day: 27,
      month: "November",
      year: 2026,
      times: ["12:39"],
      isDayfilled: false
    },
    {
      day: 28,
      month: "November",
      year: 2026,
      times: ["09:00", "16:30"],
      isDayfilled: false
    },
  ];

  @ViewChild('calendarDays') calendarDays! : ElementRef<HTMLElement>

  ngOnInit(){
    this.selectedMonth = this.now.format("MMMM");
    this.SelectedYear = this.now.format("YYYY")

    console.log(this.SelectedYear);
    console.log(this.selectedMonth);

    this.loadDays()
  }

  prevElement : HTMLElement | null = null;

  dateSelected(event : PointerEvent, day : number) : void {
    this.selectedBookingDate = moment([this.now.year(), this.now.month(), day]);
    const element = event.target as HTMLElement;
    let button : HTMLElement| null = null;

    if(element.tagName != "BUTTON"){
       button = element.closest('button') ? element.closest('button') : element.querySelector('button');
    }else{
      button = element
    }

    if(!element || !button){
      return
    }



    if(button == this.prevElement){
      button.classList.remove('selected')
      this.selectedBookingDate = null
      this.prevElement = null;
    }else{
      if(this.prevElement){
        this.prevElement.classList.remove('selected')
      }
      this.prevElement = button;
      button.classList.add('selected')
    }

    this.bookingDateSelected.emit(this.selectedBookingDate)
    console.log(this.selectedBookingDate);
  }

  changeYear(sides: sides){
    let momentSelected! : Moment;

    if(sides == this.sides.NEXT){
      momentSelected = this.now.add(1, 'y')
    }
    else if(sides == this.sides.PREV){
      momentSelected = this.now.subtract(1, 'y')
    }

    this.SelectedYear = momentSelected.format("YYYY")
    this.selectedMonth = momentSelected.format("MMMM")
    this.daysInMonth = momentSelected.daysInMonth();
    const startDay = momentSelected.weekday()

    this.weekdays = moment.weekdays();
    this.weekdays = moment.weekdays().slice(startDay + 1).concat(this.weekdays.slice(0, startDay + 1));

    this.loadDays();
  }

  changeMonth(sides: sides): void{

    let momentSelected! : Moment;

    if(sides == this.sides.NEXT){
      momentSelected = this.now.add(1, 'M')
    }
    else if(sides == this.sides.PREV){
      momentSelected = this.now.subtract(1, 'M')
    }

    this.selectedMonth = momentSelected.format("MMMM")
    this.daysInMonth = momentSelected.daysInMonth();

    const startDay = momentSelected.weekday()

    this.weekdays = moment.weekdays();
    this.weekdays = moment.weekdays().slice(startDay + 1).concat(this.weekdays.slice(0, startDay + 1));

  }

  loadDays() : void{
    this.days = [];
    for(let day = 0; day < this.daysInMonth; day++){
      this.days.push(day+1);
    }
  }

  moveToCurrentDate(){
    this.now = moment();
    this.SelectedYear = moment().format("YYYY")
    this.selectedMonth = moment().format("MMMM")
    this.daysInMonth = moment().daysInMonth();
    this.weekdays = moment.weekdays();

    this.days = [];
    for(let day = 0; day < this.daysInMonth; day++){
      this.days.push(day+1);
    }
  }

  getDayClassName(day : number, type : dateStatus ){

    let className = "";

    switch(type){
      case dateStatus.UNAVALIBLE:
        className = (moment(moment(`${day.toString()}-${this.now.month()+1}-${this.now.year()}`, "D-M-YYYY")).isSame(moment(), "day")) ? "current-day unavalible" : "unavalible"
      break;
      case dateStatus.DISABLED:
        className = (moment(moment(`${day.toString()}-${this.now.month()+1}-${this.now.year()}`, "D-M-YYYY")).isSame(moment(), "day")) ? "current-day disabled" : "disabled"
      break;
    }

    return className;
  }
}
