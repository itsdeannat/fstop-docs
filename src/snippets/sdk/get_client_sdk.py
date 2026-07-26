from fstop import Fstop

with Fstop(jwt_auth="YOUR_ACCESS_TOKEN") as f_client:
    client_data = f_client.clients.retrieve_client(id="550e8400-e29b-41d4-a716-446655440000")

    print(f"{client_data.first_name} {client_data.last_name}")
    print(f"Email: {client_data.email}")
