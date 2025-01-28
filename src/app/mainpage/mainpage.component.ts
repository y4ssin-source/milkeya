import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainPageComponent implements OnInit {
  formGroup!: FormGroup; // Holds form controls and their validation state
  currentDate: string = ''; // Stores the current date to display in the top bar

  @ViewChild('scrollableWrapper', { static: true })
  scrollableWrapper!: ElementRef; // Reference to the scrollable cards container

  items: string[] = [
    'مطلب ترسيم',
    'سند ملكية',
    'نسخة من سند ملكية',
    'شهادة ملكية',
    'شهادة اشتراك في الملكية',
    'شهادة في عدم الملكية',
    'شهادة إبراء رسوم عقارية',
    'نسخة مطابقة للأصل من وثيقة',
    'شهادة في مراحل تسجيل عقد',
    'نسخة مطابقة للأصل من رسم عقاري',
    'نسخة مجردة من رسم عقاري',
    'تكوين ملف ذات صبغة',
    'الإطلاع على رسم عقاري',
    'تحرير عقد',
    'تنفيذ حكم بالتسجيل',
  ]; // List of items for the scrollable cards

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
    this.setCurrentDate();
  }

  /**
   * Initialize the form with form controls and their validators
   */
  private initializeForm(): void {
    this.formGroup = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      surname: ['', [Validators.required, Validators.minLength(3)]],
      identityDocument: ['', Validators.required],
      countNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      issueDate: ['', Validators.required],
      issuePlace: ['', Validators.required],
      entityName: [''], // Optional field
      address: ['', Validators.required],
      documentName: ['', Validators.required]
    });
  }

  /**
   * Set the current date to display in the top bar
   */
  private setCurrentDate(): void {
    const today = new Date();
    this.currentDate = today.toLocaleDateString('EG', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
  }

  /**
   * Handle form submission
   */
  onSubmit(): void {
    if (this.formGroup.valid) {
      console.log('Form Submitted Successfully:', this.formGroup.value);
      alert('تم الحفظ بنجاح!');
    } else {
      alert('يرجى التحقق من صحة النموذج قبل الإرسال.');
      this.formGroup.markAllAsTouched(); // Highlights invalid fields
    }
  }

  /**
   * Scroll the cards container to the left
   */
  scrollLeft(): void {
    this.scrollableWrapper.nativeElement.scrollBy({
      left: -200, // Adjust scroll distance
      behavior: 'smooth'
    });
  }

  /**
   * Scroll the cards container to the right
   */
  scrollRight(): void {
    this.scrollableWrapper.nativeElement.scrollBy({
      left: 200, // Adjust scroll distance
      behavior: 'smooth'
    });
  }
}
