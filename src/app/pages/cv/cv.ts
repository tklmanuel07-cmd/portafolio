import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CvService } from '../../services/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.html',
  styleUrl: './cv.scss'
})
export class Cv {
  cv = toSignal(inject(CvService).getCv());
}
