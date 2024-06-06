import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-export-import',
  templateUrl: './export-import.component.html',
  styleUrls: ['./export-import.component.css']
})
export class ExportImportComponent implements OnInit {

  files: any[] = [];
  formGroup !: FormGroup;

  constructor(private formBuilder: FormBuilder, private readonly snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.initExportForm();
  }

  public onSelect(event: any) {
    if (this.files.length < 1) {
      this.files.push(...event.addedFiles);
    } else {
      this.snackBar.open("Exceeds the Limit - limited to one", "Close", {
        duration: 5000,
        horizontalPosition: "start",
        verticalPosition: "bottom",
        panelClass: ["red-snackbar"],
      });
    }

  }

  public onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
    console.log(this.files, 'file out')
  }

  public onImportToExcel(event: any) {
    this.onSelect(event);
  }



  private initExportForm() {
    this.formGroup = this.formBuilder.group({
      warehouse: new FormControl('', Validators.required),
      customer: new FormControl('')
    })
  }

}
