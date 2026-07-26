from fstop import Fstop

with Fstop(jwt_auth="YOUR_ACCESS_TOKEN") as f_client:
    bookings = f_client.bookings.list_bookings()

    for booking in bookings:
        print(f"{booking.project.project_name} - {booking.date} at {booking.time}")
