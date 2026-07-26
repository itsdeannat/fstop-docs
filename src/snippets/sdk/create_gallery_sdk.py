from fstop import Fstop

with Fstop(jwt_auth="YOUR_ACCESS_TOKEN") as f_client:
    created_gallery = f_client.galleries.create_gallery(
        project_id="660e8400-e29b-41d4-a716-446655440000",
        gallery_name="Reception Photos",
        picture_count=89,
        is_visible=True,
        url="https://example.com/galleries/reception"
    )
    
    print(f"Gallery created with ID: {created_gallery.id}")
