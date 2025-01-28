import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-deminscri',
  templateUrl: './deminscri.component.html',
  styleUrls: ['./deminscri.component.css'],
})
export class DeminscriComponent implements OnInit {
  item: string | null = null;
  title: string = 'Form';

  // Properties for "mapping-request"
  field1: string = '';
  field2: number | null = null;

  // Properties for "ownership-deed"
  name: string = '';
  documentId: string = '';

  // Flag to check submission
  submitted = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get the item from the route
    this.item = this.route.snapshot.paramMap.get('item');
  }

  onSubmit(): void {
    this.submitted = true;

    // Check which item was submitted and handle accordingly
    if (this.item === 'mapping-request' && this.field1 && this.field2 !== null) {
      console.log('Mapping Request Submitted:', { field1: this.field1, field2: this.field2 });
      alert('Mapping request submitted successfully!');
    } else if (this.item === 'ownership-deed' && this.name && this.documentId) {
      console.log('Ownership Deed Submitted:', { name: this.name, documentId: this.documentId });
      alert('Ownership deed submitted successfully!');
    } else {
      alert('Please fill all required fields.');
    }
  }
}
