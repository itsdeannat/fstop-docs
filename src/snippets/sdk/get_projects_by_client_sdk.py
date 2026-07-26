from fstop import Fstop

with Fstop(jwt_auth="YOUR_ACCESS_TOKEN") as f_client:
    projects = f_client.projects.list_projects()
    
    # Filter projects by client_id client-side
    client_id = "550e8400-e29b-41d4-a716-446655440000"
    filtered = [p for p in projects if p.client.id == client_id]

    for project in filtered:
        print(f"{project.project_name} ({project.project_type})")
