from fstop import Fstop

with Fstop(jwt_auth="YOUR_ACCESS_TOKEN") as f_client:
    bookings = f_client.bookings.list_bookings()
    
    # Filter bookings by project_id client-side
    project_id = "660e8400-e29b-41d4-a716-446655440000"
    filtered = [b for b in bookings if b.project.id == project_id]

    for booking in filtered:
        print(f"{booking.date} at {booking.time} - {booking.location}")
