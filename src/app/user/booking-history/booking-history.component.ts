import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/models/booking.model';
import { AuthService } from 'src/app/services/auth.service';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {

  bookings: Booking[]

  constructor( private authService: AuthService, private bookingService: BookingService ) { }

  ngOnInit(): void {
    if (this.authService.loggedInUser.value) {
      this.bookings = []
      this.authService.loggedInUser.value.bookings.forEach(bookingId => {
        this.bookingService.getBookingById(bookingId).subscribe(booking => this.bookings.push(booking));
      })
      console.log(this.bookings);
      
      this.bookings.sort((a, b) => a.bookingDate<b.bookingDate?-1:1);
    }
  }

}
