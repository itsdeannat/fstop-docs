from fstop import Fstop

with Fstop(jwt_auth="YOUR_ACCESS_TOKEN") as f_client:
    created_project = f_client.projects.create_project(
        project_name="Birthday Party",
        project_type="party",
        client_id="550e8400-e29b-41d4-a716-446655440002"
    )
    
    print(f"Project created with ID: {created_project.id}")
