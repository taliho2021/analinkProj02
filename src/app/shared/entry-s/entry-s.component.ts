import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-entry-s',
  templateUrl: './entry-s.component.html',
  styleUrls: ['./entry-s.component.scss']
})
export class EntrySComponent implements OnInit {
  entryForm = this.fb.group({
    lessons: this.fb.array([])
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get lessons() {
    return this.entryForm.controls["lessons"] as FormArray;
  }

  addLesson() {
    let lessonForm = this.fb.group({
      title: ['', Validators.required],
      level: ['beginner', Validators.required]
    })

    this.lessons.push(lessonForm)
  }

  deleteLesson(lessonIndex: number){
    this.lessons.removeAt(lessonIndex)
  }
}
