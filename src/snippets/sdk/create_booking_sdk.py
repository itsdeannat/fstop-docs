from fstop import Fstop
from datetime import date

with Fstop(jwt_auth="YOUR_ACCESS_TOKEN") as f_client:
    created_booking = f_client.bookings.create_booking(
        project_id="660e8400-e29b-41d4-a716-446655440000",
        date_=date.fromisoformat("2026-06-15"),
        time="14:00:00",
        duration=480,
        location="Downtown Venue"
    )
    
    print(f"Booking created with ID: {created_booking.id}")
