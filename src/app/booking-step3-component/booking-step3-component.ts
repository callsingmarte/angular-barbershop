import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import moment, { Moment } from 'moment';
import { BarberShopService } from '../barbershopservicesinterface';
import { Image } from '../image-gallery/image-gallery';
import { email, form, FormField, pattern, required } from '@angular/forms/signals';
import { isEmpty } from 'rxjs';
import { services } from '../barber/barber';

interface openBarbershopHours {
  [key: string]: {
    start: Moment,
    end: Moment,
  },
}

interface UserModel {
    name: '',
    email: '',
    phone: '',
    acceptAds: false,
    acceptNotifications: false,
    acceptConditions: false,
  }

type FormFieldKey = Extract<keyof UserModel, string>;

interface BarbershopBarber {
  img : Image,
  name : string,
  services: services[]
}

interface times {
  [key: string]: {
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

@Component({
  imports: [FormField],
  selector: 'app-booking-step3-component',
  styleUrl: './booking-step3-component.scss',
  templateUrl: './booking-step3-component.html',
})
export class BookingStep3Component implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {
  }

   userModel = signal({
    name: '',
    email: '',
    phone: '',
    acceptAds: false,
    acceptNotifications: false,
    acceptConditions: false,
  });

  userForm = form(this.userModel, (schemaPath) => {
    required(schemaPath.name, {message: $localize`Name is required`})
    required(schemaPath.phone, {message: $localize`Phone is required`})
    required(schemaPath.acceptConditions, {message: $localize`Acceptance of the conditions is required`})
    email(schemaPath.email, {message: $localize`Enter a valid email address`})
    pattern(schemaPath.phone, /^\+34-\d{3}-\d{3}-\d{3}$/,
    {
      message: $localize`Phone must be in format: +34-555-123-456`,
    });
    pattern(schemaPath.name, /^[a-zA-Z]+$/,
    {
      message:  $localize`Name must contain only letters`,
    });
  })


  datetimes : Moment[] = []
  appointment! : Moment;
  selectedBarbershopService! : BarberShopService
  barber! : BarbershopBarber

  ngOnInit(){
      this.appointment = moment(this.route.snapshot.queryParams['date'])
      this.selectedBarbershopService = JSON.parse(this.route.snapshot.queryParams['service'])
      this.barber = JSON.parse(this.route.snapshot.queryParams['barber'])

      for(let times in this.openStablishmentHours){
        let timeStart = this.openStablishmentHours[times].start;
        let timeEnd = this.openStablishmentHours[times].end;
        let time : Moment = timeStart.clone()
        while(time.isBefore(timeEnd)){
          this.datetimes.push(time.clone())
          time.add(30,'m')
        }
      }
  }

  addTimeBtnClass(datetime : Moment){

    const busyDay = this.busyDayHours.find(element =>
      (element.day.toString() === this.appointment.format("D")
      && element.month === this.appointment.format("MMMM")
      && element.year === this.appointment.year() )
    )

    const time = busyDay?.times.find(element => element === datetime.format("HH:mm").toString())

    return time ? "time-btn unavalible-time" : "time-btn";
  }

  openStablishmentHours : openBarbershopHours = {
    morning: {
      start:  moment("T9:00:00","HH:mm:ss"),
      end:  moment("T14:00:00","HH:mm:ss"),
    },
    afternoon: {
      start:  moment("T16:30:00","HH:mm:ss"),
      end:  moment("T20:30:00","HH:mm:ss")

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
      times: ["16:30"],
      isDayfilled: false
    },
    {
      day: 26,
      month: "November",
      year: 2026,
      times: ["09:30", "20:00"],
      isDayfilled: false
    },
    {
      day: 27,
      month: "November",
      year: 2026,
      times: ["09:30", "20:00", "12:30"],
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



  prevElement : HTMLElement | null = null;
  selectTime(event : PointerEvent , time: Moment) : void{
    const element = event.target as HTMLElement;
    let button : HTMLElement | null = null

    if(element.tagName != "BUTTON"){
      button = element.closest('button') ? element.closest('button') : element.querySelector('button');
    }else{
      button = element;
    }

    if(this.prevElement && this.prevElement === button){
      this.prevElement.classList.remove("selected-time");
      button.classList.remove("selected-time");
      this.prevElement = null;
      this.appointment = moment({
        day: Number(this.appointment.format("D")),
        month: this.appointment.month(),
        year: this.appointment.year(),
        hour: 0,
        minute: 0
      })
    }else{
      if(this.prevElement){
        this.prevElement.classList.remove("selected-time");
      }
      button?.classList.add("selected-time")
      this.prevElement = button;
      this.appointment = moment({
        day: Number(this.appointment.format("D")),
        month: this.appointment.month(),
        year: this.appointment.year(),
        hour: time.hour(),
        minute: time.minute()
      })
    }

    console.log(this.appointment);
  }

  getFieldClass(field : FormFieldKey) : string{

    const fieldState = this.userForm[field]()

    let classname : string = '';
    if (!fieldState.touched() && !fieldState.value() ) {
        classname = '';
      }

    if(fieldState.invalid() && fieldState.value() ){
      classname = 'invalid'
    }else if(fieldState.touched() && fieldState.required() && !fieldState.valid()){
      classname = 'invalid'
    }else if(fieldState.touched() && fieldState.valid()){
      classname = 'valid'
    }

    return classname
  }

  submit = false;
  areTermsAccepted() : boolean{
    return this.submit && !this.userForm.acceptConditions().value();
  }


  isConfirmDisabled() : boolean{
    if(
        !this.userForm.acceptConditions().value() && this.userForm.acceptConditions().invalid() ||
        !this.userForm.name().value() && this.userForm.name().invalid()  ||
        !this.userForm.phone().value() && this.userForm.phone().invalid()  ||
        !this.userForm.email().value() && this.userForm.email().invalid() ||
        this.appointment.hour() == 0
      ){
        return true
      }

      return false
  }

  changeBarber(){
    this.router.navigate(['/appointment', { outlets: { appointment: ['step2'] } }],
    { queryParams: {
      service: JSON.stringify(this.selectedBarbershopService),
      date: this.appointment,
    } }
    );
  }

  saveAppointment(){
    this.submit = true;

    this.router.navigate(['/appointment', { outlets: { appointment: ['step4'] } }],);

    //send data to server

  }
}
