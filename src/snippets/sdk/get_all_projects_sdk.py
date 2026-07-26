from fstop import Fstop

with Fstop(jwt_auth="YOUR_ACCESS_TOKEN") as f_client:
    projects = f_client.projects.list_projects()

    for project in projects:
        print(f"{project.project_name} ({project.project_type}) - {project.client.first_name} {project.client.last_name}")
