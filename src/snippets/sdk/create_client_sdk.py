from fstop import Fstop

with Fstop(jwt_auth="YOUR_ACCESS_TOKEN") as f_client:
    created_client = f_client.clients.create_client(
        first_name="Alice",
        last_name="Johnson",
        city="Cincinnati",
        state="OH",
        zip_code="45202",
        email="alice.johnson@example.com",
        phone_number="+12161239999"
    )
    
    print(f"Client created with ID: {created_client.id}")
