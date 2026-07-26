from fstop import Fstop

with Fstop(jwt_auth="YOUR_ACCESS_TOKEN") as f_client:
    galleries = f_client.galleries.list_galleries()

    for gallery in galleries:
        print(f"{gallery.gallery_name} - {gallery.picture_count} photos")
