import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute to access route parameters

@Component({
  selector: 'app-sandmilkeya',
  templateUrl: './sandmilkeya.component.html',
  styleUrls: ['./sandmilkeya.component.css']
})
export class SandmilkeyaComponent implements OnInit { // Fixed PascalCase naming
  item: string | null = null; // Variable to hold the route parameter

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get the 'mapping-request' parameter from the route
    this.item = this.route.snapshot.paramMap.get('ownership-deed'); // Keep using paramMap.get
    console.log('Item from route:', this.item);
  }
}
