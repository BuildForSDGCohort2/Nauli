import { Notes } from './../../../shared/interfaces/notes';
import { Appointments } from './../../../shared/interfaces/appointments';
import { DataLayerService } from './../../../shared/services/data-layer.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-record-notes',
  templateUrl: './record-notes.component.html',
  styleUrls: ['./record-notes.component.scss']
})
export class RecordNotesComponent implements OnInit {
  id: string;
  error: string;
  client: any;
  appointments: Appointments[];
  notesForm: FormGroup;
  loading: boolean;
  notes: Notes;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dl: DataLayerService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getAppointment(this.id);
    this.buildForm();
    this.getNote(this.id)
  }

  getAppointment(appointment_id){
    this.loading = true;
    this.dl.getAppointments()
    .subscribe((res: any) => {
      this.appointments =  res.appointments;
      for(let app in this.appointments){
        if(this.appointments[parseInt(app)]._id == appointment_id){
          this.client = this.appointments[parseInt(app)];
        }
      }
      this.loading = false;
    });
  }

  getNote(note_id){
    this.dl.getNotesById(note_id)
    .subscribe((res: any) => {
      this.notes = res;
      if(this.notes){
        this.buildForm(this.notes.notes)
      }
    });
  }

  buildForm(i: any = {}) {
    this.notesForm = this.fb.group({
      medication: [i.medication ? i.medication : ''],
      notes: [i.notes ? i.notes : '', Validators.required],
      cost: [i.cost ? i.cost : ''],
      follow_up_date: [i.follow_up ? this.formDate(i.follow_up) : ''],
      time: [i.follow_up ? this.formTime(i.follow_up) : {hour: 12, minute: 30}],
    });
  }


  saveNotes() {
    // stop here if form is invalid
    if (this.notesForm.invalid) {
      return;
    }
    // this.notesForm.value.type = this.client.details.type;
    // console.log(this.notesForm.value);
    // this.notes = new Notes(this.client.details.type, this.notesForm.value.notes, this.notesForm.value.medication, this.notesForm.value.cost, this.unixTimeCalculator(this.notesForm.value.follow_up_date, this.notesForm.value.time)  )
    // console.log(this.notes);
    // this.dl.postNotes(this.notes, this.id)
    //   .subscribe(res => {
    //     console.log(res);
    //     this.router.navigateByUrl('/dashboard');
    //   },
    //   error => {
    //     this.error="Unexpected Error. Please try again later."
    //     console.log(error);               
    // });
  }

/**
 * 
  * @param date
  * @param time 
 */
  unixTimeCalculator(date:any, time:any){
    const year = date.year+"";
    let month = date.month+"";
    if(month.length===1){
      month='0'+month;
    }
    let day = date.day+"";
    if(day.length===1){
      day='0'+day;
    }
    let hour=time.hour
    let min=time.minute
    let dateToPost = `${year}/${month}/${day} ${hour}:${min}:00`;
    console.log(dateToPost);
    const utcTime = (new Date(dateToPost).getTime()/1000); //to get answer in seconds
    // console.log(utcTime)
    return utcTime;
  }


  formTime(unixTime){
    let date = new Date(unixTime*1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return {hour:hours, minute: minutes}
  }

  formDate(unixTime){
    let date = new Date(unixTime*1000);
    const day = date.getDate();
    const month = date.getMonth()+1;
    const year = date.getFullYear();
    return {year: year, month: month, day:day}
  }

}
