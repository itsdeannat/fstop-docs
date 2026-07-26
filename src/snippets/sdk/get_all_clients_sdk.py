from fstop import Fstop

with Fstop(jwt_auth="YOUR_ACCESS_TOKEN") as f_client:
    clients = f_client.clients.list_clients()

    for c in clients:
        print(f"{c.first_name} {c.last_name} - {c.email}")
